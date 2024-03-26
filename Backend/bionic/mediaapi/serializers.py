# music/serializers.py
from rest_framework import serializers
from .models import Genre, Song, FavoriteSong, Artist, Album

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['name', 'guid', 'cover_image']  # Include only the name field

class GenreLookupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = ['name', 'guid']  # Include only the name field

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ['name', 'guid']  # Include only the name field

class AlbumSerializer(serializers.ModelSerializer):
    class Meta:
        model = Album
        fields = ['title', 'guid']  # Include only the name field

class SongSerializer(serializers.ModelSerializer):
    genre = serializers.CharField(source='genre.name', read_only=True, required=False, allow_null=True)
    artist_name = serializers.CharField(source='artist.name', read_only=True)  # Add artist_name field

    class Meta:
        model = Song
        fields = ['guid', 'title', 'audio_file', 'genre', 'artist', 'artist_name']  # Include artist_name

class FavoriteSongSerializer(serializers.ModelSerializer):
    song = SongSerializer()  # Include the related song details in the serialized data

    class Meta:
        model = FavoriteSong
        fields = ['guid', 'title', 'audio_file', 'genre', 'artist', 'artist_name']  # Include artist_name
