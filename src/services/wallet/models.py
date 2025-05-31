# import uuid
#
# from cities_light.models import Country
# from django.contrib.contenttypes.models import ContentType
# from django.core.exceptions import ValidationError
# from django.db import models
#
# from src.apps.stripe.bll import stripe_transfer_to_connect_account
# from src.services.users.models import User
#
# BANK_ACCOUNT_TYPES = (
#     ('personal', 'Personal'),
#     ('business', 'Business')
# )
# FINANCE_ACCOUNT_STATUS = (
#     ('pending', 'Pending'),
#     ('verified', 'Verified'),
#     ('cancelled', 'Cancelled')
# )
# WITHDRAWAL_TYPES = (
#     ('bank', 'Bank'),
#     ('paypal', 'PayPal'),
#     ('connect', 'Connect')
# )
# WITHDRAWAL_STATUS = (
#     ('pending', 'Pending'),
#     ('accepted', 'Accepted'),
#     ('cancelled', 'Cancelled')
# )
#
#
# class Wallet(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='wallet')
#     description = models.TextField(null=True, blank=True)
#
#     # STRIPE
#     stripe_account_id = models.CharField(max_length=255, null=True, blank=True)
#     stripe_account_type = models.CharField(max_length=255, null=True, blank=True)
#     stripe_account_country = models.CharField(max_length=255, null=True, blank=True)
#     stripe_account_email = models.EmailField(null=True, blank=False)
#     stripe_description = models.JSONField(null=True, blank=True)
#     stripe_is_active = models.BooleanField(default=False)
#
#     # OVERALL REPORT
#     total_amounts = models.FloatField(default=0)
#     total_deposits = models.FloatField(default=0)
#     total_earnings = models.FloatField(default=0)
#     total_withdrawals = models.FloatField(default=0)
#
#     # BALANCE REPORT
#     balance_available = models.FloatField(default=0)
#     balance_pending = models.FloatField(default=0)
#     outstanding_charges = models.FloatField(default=0)
#
#     # CONNECT REPORT
#     connect_available_balance = models.FloatField(default=0)
#     connect_available_balance_currency = models.CharField(max_length=3, null=True, blank=True)
#     connect_pending_balance = models.FloatField(default=0)
#     connect_pending_balance_currency = models.CharField(max_length=3, null=True, blank=True)
#
#     # DATES
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#
#     class Meta:
#         ordering = ['-id']
#         verbose_name_plural = 'Wallets'
#
#     def __str__(self):
#         return str(self.pk)
#
#     def is_stripe_connected(self):
#         return self.stripe_account_id is not None
#
#     def is_stripe_account_active(self):
#         if not self.is_stripe_connected() or not self.stripe_is_active:
#             return False
#         return True
#
#     def get_available_balance(self):
#         return self.balance_available
#
#     def get_pending_balance(self):
#         return self.balance_pending
#
#     def get_connect_balance(self):
#         return self.connect_available_balance
#
#
# class Bank(models.Model):
#     name = models.CharField(max_length=150)
#     is_active = models.BooleanField(default=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#
#     def __str__(self):
#         return f"{self.name})"
#
#
# class BankAccount(models.Model):
#     ACCOUNT_TYPES = [
#         ('savings', 'Savings'),
#         ('checking', 'Checking'),
#         ('business', 'Business'),
#         ('other', 'Other'),
#     ]
#
#     id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='bank_accounts')
#     account_holder_name = models.CharField(max_length=150)
#     account_number = models.CharField(max_length=30, blank=True, null=True)
#     account_iban = models.CharField(max_length=34, blank=True, null=True)
#     account_type = models.CharField(max_length=20, choices=ACCOUNT_TYPES, default='checking')
#     account_currency = models.CharField(max_length=3, default='USD')
#     swift_code = models.CharField(max_length=20, blank=True, null=True)
#     routing_number = models.CharField(max_length=20, blank=True, null=True)
#
#     bank = models.ForeignKey(Bank, on_delete=models.CASCADE)
#     country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True, blank=True)
#     bank_city = models.CharField(max_length=100, blank=True, null=True)
#     bank_address = models.CharField(max_length=255, blank=True, null=True)
#     bank_postal_code = models.CharField(max_length=20, blank=True, null=True)
#
#     is_active = models.BooleanField(default=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#
#     def __str__(self):
#         return f"{self.account_holder_name} - {self.bank.name} ({self.account_number})"
#
#
# class Withdrawal(models.Model):
#     user = models.ForeignKey(
#         User, on_delete=models.CASCADE, related_name='withdrawals', blank=True
#     )
#     amount = models.DecimalField(max_digits=12, decimal_places=2, blank=False, null=False)
#     withdrawal_type = models.CharField(max_length=20, choices=WITHDRAWAL_TYPES, default=WITHDRAWAL_TYPES[0][0])
#
#     description = models.TextField(
#         blank=True, null=True, help_text='You have applied for account please wait for verification process'
#     )
#     status = models.CharField(
#         max_length=20, choices=WITHDRAWAL_STATUS, default=WITHDRAWAL_STATUS[0][0], help_text='Status of withdrawal'
#     )
#
#     created_on = models.DateTimeField(auto_now_add=True)
#     updated_on = models.DateTimeField(auto_now=True)
#
#     class Meta:
#         verbose_name_plural = 'Withdrawals'
#         ordering = ['-created_on']
#
#     def __str__(self):
#         return f'{self.user} - {self.amount} - {self.status}'
#
#     def handle_connect_withdrawal(self, obj):
#         success = False
#
#         try:
#             amount = int(self.amount)
#         except ValueError:
#             return success, "Please enter a valid integer amount"
#
#         success, obj = stripe_transfer_to_connect_account(user=self.user, amount=self.amount)
#         return success, obj
#
#     def clean(self):
#
#         # user is required here.
#         try:
#             user = self.user
#         except Exception as e:
#             raise ValidationError('User is required for withdrawal')
#
#         # get vendor and wallet
#         wallet = self.user.get_user_wallet()
#
#         # balance check
#         if self.amount > wallet.balance_available:
#             raise ValidationError({'amount': 'Insufficient balance in wallet'})
#
#         # withdrawal type check and validation
#         if self.withdrawal_type == 'bank':
#             if not user.bank_account_active():
#                 raise ValidationError({'withdrawal_type': 'User does not have an active bank account'})
#         elif self.withdrawal_type == 'connect':
#             if not self.user.is_stripe_account_active():
#                 raise ValidationError({'withdrawal_type': 'user connect account is not active'})
#         else:
#             raise ValidationError({'withdrawal_type': 'Invalid withdrawal type'})
#
#         # First time status must be pending
#         if not self.pk:
#
#             previous_withdrawals = Withdrawal.objects.filter(user=self.user, status__in=['pending'])
#             if previous_withdrawals.exists():
#                 raise ValidationError(f'Your previous withdrawal request is still pending.')
#
#             if self.status != 'pending':
#                 raise ValidationError({'status': 'Status must be pending at start'})
#
#         else:
#             previous_status = Withdrawal.objects.get(pk=self.pk).status
#             if previous_status in ['accepted', 'cancelled']:
#                 raise ValidationError({'status': 'Cancelled or accepted requests cannot be updated'})
#
#         if self.withdrawal_type == 'connect' and self.status == 'accepted':
#             success, obj = self.handle_connect_withdrawal(self)
#             if not success:
#                 raise ValidationError(obj)
#
#
# class Transaction(models.Model):
#     TRANSACTION_TYPE = (
#         ('deposit', 'Deposit'),
#         ('withdrawal', 'Withdrawal'),
#         ('charge', 'Charge'),
#         ('refund', 'Refund'),
#     )
#
#     STATUS_TYPE = (
#         ('pending', 'Pending'),
#         ('processing', 'Processing'),
#         ('accepted', 'Accepted'),
#         ('rejected', 'Rejected'),
#         ('completed', 'Completed'),
#         ('cancelled', 'Cancelled'),
#     )
#
#     PAYMENT_TYPE = (
#         ('connect', 'Connect'),
#         ('paypal', 'Paypal'),
#         ('bank_account', 'Bank Account'),
#     )
#
#     user = models.ForeignKey(
#         User, on_delete=models.SET_NULL, null=True, blank=True, related_name='financial_transactions'
#     )
#     wallet = models.ForeignKey(
#         'Wallet', on_delete=models.CASCADE, null=True, blank=True, related_name='financial_transactions'
#     )
#     amount = models.FloatField(default=0, verbose_name='Amount')
#     fee = models.FloatField(default=0, null=True, blank=True)
#     description = models.TextField(null=True, blank=True)
#
#     transaction_type = models.CharField(
#         max_length=50, choices=TRANSACTION_TYPE, default='deposit'
#     )
#     status = models.CharField(max_length=50, choices=STATUS_TYPE, default='pending')
#     payment_type = models.CharField(
#         max_length=50, choices=PAYMENT_TYPE, default='bank_account', null=True, blank=True
#     )
#
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#
#     class Meta:
#         ordering = ['-created_at']
#         verbose_name_plural = "Transactions"
#
#     def __str__(self):
#         return f"{self.transaction_type} - {self.pk}"
#
#     def clean(self):
#         # AMOUNT CHECK
#         if self.amount <= 0:
#             raise ValidationError('Amount must be greater than 0')
#
#         # USER MUST HAVE WALLET
#         if self.transaction_type in ['withdrawal', 'charge']:
#             if not self.wallet:
#                 raise ValidationError('Wallet is required for withdrawals or charges')
#             if self.wallet.balance_available < self.amount:
#                 raise ValidationError('Insufficient balance to perform this transaction')
#
#         # IF ALREADY EXISTS THEN DON'T ALLOW TO CHANGE STATUS TO ANOTHER
#         if self.pk:
#             previous_status = Transaction.objects.get(pk=self.pk).status
#             if previous_status == 'completed' and self.status != 'completed':
#                 raise ValidationError("Completed transactions cannot be modified")
#
#     def process_transaction(self):
#         # Handle transaction processing
#         if self.transaction_type == 'withdrawal':
#             self._handle_withdrawal()
#         elif self.transaction_type == 'deposit':
#             self._handle_deposit()
#
#         # Save the updated status
#         self.status = 'completed'
#         self.save()
#
#     def _handle_withdrawal(self):
#         # Deduct the amount from the wallet's available balance
#         if self.wallet and self.wallet.balance_available >= self.amount:
#             self.wallet.balance_available -= self.amount
#             self.wallet.save()
#
#     def _handle_deposit(self):
#         # Add the amount to the wallet's available balance
#         if self.wallet:
#             self.wallet.balance_available += self.amount
#             self.wallet.save()
