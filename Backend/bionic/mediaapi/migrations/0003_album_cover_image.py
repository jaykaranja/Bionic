# Generated by Django 5.0.3 on 2024-03-26 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mediaapi', '0002_remove_genre_album_album_genre'),
    ]

    operations = [
        migrations.AddField(
            model_name='album',
            name='cover_image',
            field=models.ImageField(blank=True, null=True, upload_to='genre_covers/'),
        ),
    ]