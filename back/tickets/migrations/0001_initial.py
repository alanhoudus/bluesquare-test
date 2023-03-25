# Generated by Django 4.1.7 on 2023-03-25 13:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('type', models.CharField(choices=[('bug', 'Bug'), ('feature', 'Feature'), ('other', 'Other')], max_length=20)),
                ('title', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('context', models.TextField()),
                ('page', models.CharField(max_length=200)),
                ('priority', models.CharField(choices=[('open', 'Open'), ('closed', 'Closed')], default='open', max_length=20)),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
