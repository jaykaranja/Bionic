# music/views.py
from django.http import FileResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .models import Song, Genre, FavoriteSong, Artist, Album
from .serializers import SongSerializer, GenreSerializer, FavoriteSongSerializer, AlbumSerializer, ArtistSerializer, GenreLookupSerializer
from .lookupenums import Lookups



@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user(request):
    return Response(status=200)

# music/views.py
@api_view(['GET'])
def list_songs_by_genre(request):
    genres = Genre.objects.all()
    serialized_data = GenreSerializer(genres, many=True).data
    for genre_data in serialized_data:
        genre_id = genre_data['guid']
        songs = Song.objects.filter(genre=genre_id)
        genre_data['songs'] = SongSerializer(songs, many=True).data
    return Response(serialized_data)

@api_view(['GET'])
def get_genre_by_guid(request, guid):
    genre = Genre.objects.get(pk=guid)
    serialized_data = GenreSerializer(genre).data
    songs = Song.objects.filter(genre=guid)
    serialized_data['songs'] = SongSerializer(songs, many=True).data
    return Response(serialized_data)

@api_view(['POST'])
def create_genre(request):
    serializer = GenreSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def upload_song(request):
    serializer = SongSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def stream_song(request, song_id):
    try:
        song = Song.objects.get(pk=song_id)
    except Song.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    audio_file = song.audio_file
    response = FileResponse(audio_file.open('rb'), content_type='audio/mpeg')
    return response

@api_view(['GET'])
def list_songs(request):
    songs = Song.objects.all()
    serializer = SongSerializer(songs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_Song(request, song_id):
    try: 
        song = Song.objects.get(pk=song_id)
    except Song.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = SongSerializer(song)
    return Response(serializer.data)

@api_view(['GET'])
def get_lookups(request, category):

    if int(category) == Lookups.Genres.value:
        genres = Genre.objects.all()
        serializer = GenreLookupSerializer(genres, many=True)
        return Response(serializer.data)
    elif int(category) == Lookups.Albums.value:
        albums = Album.objects.all()
        serializer = AlbumSerializer(albums, many=True)
        return Response(serializer.data)
    elif int(category) == Lookups.Artists.value:
        artists = Artist.objects.all()
        serializer = ArtistSerializer(artists, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_favorite_songs(request):
    favorite_songs = FavoriteSong.objects.filter(user=request.user)
    serializer = FavoriteSongSerializer(favorite_songs, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def like_song(request, song_id):
    try:
        song = Song.objects.get(pk=song_id)
    except Song.DoesNotExist:
        return Response({'error': 'Song not found'}, status=status.HTTP_404_NOT_FOUND)

    # Check if the song is already liked by the user
    if FavoriteSong.objects.filter(user=request.user, song=song).exists():
        return Response({'error': 'Song already liked by the user'}, status=status.HTTP_400_BAD_REQUEST)

    # Create a new favorite song object for the user and the song
    favorite_song = FavoriteSong.objects.create(user=request.user, song=song)
    serializer = FavoriteSongSerializer(favorite_song)
    return Response(serializer.data, status=status.HTTP_201_CREATED)