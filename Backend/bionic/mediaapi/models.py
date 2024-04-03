import uuid
from django.db import models
from django.contrib.auth.models import User

class Genre(models.Model):
    guid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=50)
    cover_image = models.ImageField(upload_to='genre_covers/', null=True, blank=True)

    def __str__(self) -> str:
        return self.name

class Artist(models.Model):
    guid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    cover_image = models.ImageField(upload_to='artist_covers/', null=True, blank=True)

    # Add other artist fields as needed
    def __str__(self) -> str:
        return self.name

class Album(models.Model):
    guid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.SET_NULL, null=True, blank=True)
    cover_image = models.ImageField(upload_to='album_covers/', null=True, blank=True)

    # Add other album fields as needed
    def __str__(self) -> str:
        return self.title

class Song(models.Model):
    guid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100)
    audio_file = models.FileField(upload_to='songs/')
    genre = models.ForeignKey(Genre, on_delete=models.SET_NULL, null=True, blank=True)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)

    
    def __str__(self) -> str:
        return f"{self.title} - {self.artist.name}"

class FavoriteSong(models.Model):
    guid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    song = models.ForeignKey(Song, on_delete=models.CASCADE)

    class Meta:
        unique_together = ['user', 'song']  # Ensure each user-song combination is unique

    def __str__(self):
        return f"{self.user.username}'s favorite: {self.song.title}"
