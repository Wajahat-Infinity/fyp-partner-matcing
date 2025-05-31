from django.db import models
from django.db.models import Count, F, Q
from src.services.users.models import User

class Interest(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class UserInterest(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_interests')
    interest = models.ForeignKey(Interest, on_delete=models.CASCADE, related_name='users')

    def __str__(self):
        return f"{self.user.username} - {self.interest.name}"

class UserMatch(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='matches')
    matched_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='matched_by')
    score = models.PositiveIntegerField()  # Number of common interests
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ['user', 'matched_user']  # Prevent duplicate matches
        ordering = ['-score']  # Order by score descending
        constraints = [
            models.CheckConstraint(
                check=~Q(user=F('matched_user')),
                name='check_not_self_match'  # Ensure no self-matching
            )
        ]

    def __str__(self):
        return f"{self.user} matched with {self.matched_user} (score: {self.score})"

# Function to compute and store top 5 matches for a user
def update_matches_for_user(user):
    """
    Updates the top 5 matches for a given user based on common interests.
    """
    # Find users with common interests, excluding the user themselves
    top_matches = User.objects.filter(
        interests__in=user.interests.all()
    ).exclude(
        id=user.id
    ).annotate(
        common_count=Count('interests')
    ).order_by('-common_count')[:5]

    # Delete existing matches for this user
    UserMatch.objects.filter(user=user).delete()

    # Store new matches
    for match in top_matches:
        UserMatch.objects.create(
            user=user,
            matched_user=match,
            score=match.common_count
        )

# Example usage:
# user = User.objects.get(id=1)
# update_matches_for_user(user)
# top_matches = user.matches.all()[:5]  # Retrieve top 5 matches & Create the objects