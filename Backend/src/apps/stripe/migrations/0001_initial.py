# Generated by Django 5.0.8 on 2024-11-28 20:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ExternalAccount',
            fields=[
                ('id', models.CharField(help_text='Stripe Payout ID', max_length=255, primary_key=True, serialize=False, unique=True)),
                ('account_id', models.CharField(max_length=255)),
                ('object', models.CharField(choices=[('card', 'Card'), ('bank_account', 'Bank Account')], default='bank_account', max_length=50)),
                ('country', models.CharField(blank=True, max_length=255, null=True)),
                ('fingerprint', models.CharField(blank=True, max_length=255, null=True)),
                ('full_response', models.JSONField(blank=True, null=True)),
                ('last4', models.CharField(blank=True, max_length=255, null=True)),
                ('metadata', models.JSONField(blank=True, null=True)),
                ('bank_status', models.CharField(blank=True, max_length=255, null=True)),
                ('bank_account_holder_name', models.CharField(blank=True, max_length=255, null=True)),
                ('bank_account_holder_type', models.CharField(blank=True, max_length=255, null=True)),
                ('bank_bank_name', models.CharField(blank=True, max_length=255, null=True)),
                ('bank_routing_number', models.CharField(blank=True, max_length=255, null=True)),
                ('bank_currency', models.CharField(blank=True, max_length=255, null=True)),
                ('card_address_city', models.CharField(blank=True, max_length=255, null=True)),
                ('card_address_country', models.CharField(blank=True, max_length=255, null=True)),
                ('card_address_line1', models.CharField(blank=True, max_length=255, null=True)),
                ('card_address_line1_check', models.CharField(blank=True, max_length=255, null=True)),
                ('card_address_line2', models.CharField(blank=True, max_length=255, null=True)),
                ('card_address_state', models.CharField(blank=True, max_length=255, null=True)),
                ('card_address_zip', models.CharField(blank=True, max_length=255, null=True)),
                ('card_address_zip_check', models.CharField(blank=True, max_length=255, null=True)),
                ('card_brand', models.CharField(blank=True, max_length=255, null=True)),
                ('card_cvc_check', models.CharField(blank=True, max_length=255, null=True)),
                ('card_last4', models.CharField(blank=True, max_length=255, null=True)),
                ('card_exp_month', models.SmallIntegerField(blank=True, null=True)),
                ('card_exp_year', models.SmallIntegerField(blank=True, null=True)),
                ('card_funding', models.CharField(blank=True, max_length=255, null=True)),
                ('card_name', models.CharField(blank=True, max_length=255, null=True)),
                ('card_tokenization_method', models.CharField(blank=True, max_length=255, null=True)),
                ('card_wallet', models.CharField(blank=True, max_length=255, null=True)),
                ('is_active', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Payout',
            fields=[
                ('id', models.CharField(help_text='Stripe Payout ID', max_length=255, primary_key=True, serialize=False, unique=True)),
                ('amount', models.FloatField(help_text='A positive integer in cents representing how much to transfer.')),
                ('currency', models.CharField(help_text='Three-letter ISO currency code', max_length=50)),
                ('description', models.CharField(blank=True, help_text='An arbitrary string attached to the object. Often useful for displaying to users.', max_length=1000, null=True)),
                ('destination', models.CharField(help_text='ID of the bank account or card the payout was sent to.', max_length=255)),
                ('failure_balance_transaction', models.CharField(blank=True, help_text='ID of the balance transaction that failed.', max_length=255, null=True)),
                ('failure_code', models.CharField(help_text='https://stripe.com/docs/api/payouts/failures', max_length=255, null=True)),
                ('failure_message', models.CharField(help_text='Message to user further explaining reason for payout failure if available.', max_length=255, null=True)),
                ('metadata', models.JSONField()),
                ('original_payout', models.CharField(max_length=255, null=True)),
                ('source_type', models.CharField(help_text='The source balance this payout came from. One of card, fpx, or bank_account.', max_length=255)),
                ('statement_descriptor', models.CharField(blank=True, help_text='Extra information about a payout to be displayed on the user’s bank statement.', max_length=255, null=True)),
                ('arrival_date', models.DateTimeField(help_text='Date the payout is expected to arrive in the bank.')),
                ('created', models.DateTimeField(help_text='Date the payout was created.')),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('paid', 'Paid'), ('failed', 'Failed'), ('canceled', 'Canceled'), ('in_transit', 'In Transit')], default='pending', max_length=50)),
                ('type', models.CharField(choices=[('bank_account', 'Bank Account'), ('card', 'Card')], default='bank_account', help_text="The type of the payout: 'bank_account' or 'card'", max_length=50)),
                ('full_response', models.JSONField(blank=True, null=True)),
            ],
            options={
                'ordering': ['-created'],
            },
        ),
        migrations.CreateModel(
            name='Price',
            fields=[
                ('id', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('currency', models.CharField(help_text='Three-letter ISO currency code', max_length=255)),
                ('unit_amount', models.IntegerField(help_text='The unit amount in cents to be charged, represented as a whole integer if possible. Only set if billing_scheme=per_unit.')),
                ('recurring', models.JSONField(blank=True, null=True)),
                ('recurring_interval', models.CharField(choices=[('month', 'Month'), ('year', 'Year'), ('week', 'Week'), ('day', 'Day')], default='month', help_text='he frequency at which a subscription is billed. One of day, week, month or year.', max_length=100)),
                ('recurring_interval_count', models.IntegerField(default=1)),
                ('recurring_usage_type', models.CharField(choices=[('metered', 'Metered'), ('licensed', 'Licensed')], default='licensed', help_text='One of metered or licensed.', max_length=100)),
                ('metadata', models.JSONField(blank=True, null=True)),
                ('full_response', models.JSONField(blank=True, null=True)),
                ('type', models.CharField(choices=[('recurring', 'Recurring'), ('one_time', 'One Time')], default='recurring', max_length=50)),
                ('active', models.BooleanField(default=True)),
                ('created', models.DateTimeField()),
            ],
            options={
                'verbose_name': 'Stripe Package Price',
                'verbose_name_plural': 'Stripe Packages Prices',
                'ordering': ['created'],
            },
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('image', models.URLField(blank=True, help_text='Image URL', null=True)),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True, null=True)),
                ('default_price', models.CharField(blank=True, help_text='The ID of the Price object that is the default price for this product.', max_length=255, null=True)),
                ('features', models.JSONField(blank=True, null=True)),
                ('metadata', models.JSONField(blank=True, null=True)),
                ('full_response', models.JSONField(blank=True, null=True)),
                ('active', models.BooleanField(default=True)),
                ('created', models.DateTimeField()),
            ],
            options={
                'verbose_name': 'Stripe Package',
                'verbose_name_plural': 'Stripe Packages',
                'ordering': ['created'],
            },
        ),
        migrations.CreateModel(
            name='StripeCustomer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_id', models.CharField(max_length=255)),
                ('subscription_id', models.CharField(blank=True, max_length=255, null=True)),
                ('price_id', models.CharField(blank=True, max_length=255, null=True)),
                ('subscription_start', models.DateTimeField(blank=True, null=True)),
                ('subscription_end', models.DateTimeField(blank=True, null=True)),
                ('subscription_status', models.CharField(blank=True, choices=[('active', 'Active'), ('past_due', 'Past Due'), ('unpaid', 'Unpaid'), ('canceled', 'Canceled'), ('incomplete', 'Incomplete'), ('incomplete_expired', 'Incomplete Expired'), ('trialing', 'Trialing'), ('paused', 'Paused')], max_length=50, null=True)),
                ('subscription_full_response', models.JSONField(blank=True, null=True)),
                ('created', models.DateTimeField(blank=True, null=True)),
                ('modified', models.DateTimeField(auto_now=True, null=True)),
            ],
            options={
                'verbose_name': 'Stripe Customer',
                'verbose_name_plural': 'Stripe Customers',
                'ordering': ['created'],
            },
        ),
        migrations.CreateModel(
            name='Transfer',
            fields=[
                ('id', models.CharField(editable=False, help_text='Stripe Transfer ID', max_length=255, primary_key=True, serialize=False, unique=True)),
                ('amount', models.FloatField(help_text='A positive integer in cents representing how much to transfer.')),
                ('currency', models.CharField(help_text='Three-letter ISO currency code', max_length=255)),
                ('description', models.CharField(help_text='An arbitrary string attached to the object. Often useful for displaying to users.', max_length=255, null=True)),
                ('destination', models.CharField(max_length=255)),
                ('metadata', models.JSONField(blank=True, help_text='Set of key-value pairs that you can attach to an object. This can be useful for storing additional information', null=True)),
                ('destination_payment', models.CharField(help_text='If the destination is a Stripe account, this will be the ID of the payment that the destination account received for the transfer.', max_length=255)),
                ('source_type', models.CharField(help_text='The source balance this transfer came from. One of card, fpx, or bank_account.', max_length=255)),
                ('created', models.DateTimeField()),
                ('full_response', models.JSONField(blank=True, null=True)),
            ],
            options={
                'verbose_name_plural': 'Transfers',
                'ordering': ['-created'],
                'get_latest_by': 'created',
            },
        ),
    ]
