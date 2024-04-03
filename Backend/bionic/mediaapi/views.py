# music/views.py
from django.http import FileResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from .models import Song, Genre, FavoriteSong, Artist, Album
from .serializers import SongSerializer, GenreSerializer, FavoriteSongSerializer, AlbumSerializer, AlbumListSerializer, ArtistSerializer, GenreLookupSerializer
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
    serializer = SongSerializer.Form(data=request.data)
    if serializer.is_valid():
        serializer.data
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

@api_view(['POST'])
def upload_audio(request) -> Response:  
    if not request.FILES.get('songFile'):
        return Response({'error': 'No file provided'}, status=400)
    
    if not request.POST.get('songName'):
        return Response({'error': 'No name provided'}, status=400)
            
    try:
        Song.objects.create(
            artist_id = request.POST.get('artist'),
            album_id = request.POST.get('album'),
            genre = Genre.objects.get(guid = request.POST.get('genre')),
            title= request.POST.get('songName'),
            audio_file = request.FILES.get('songFile')
        )
        return Response({'message': 'File uploaded successfully'})
    except Exception as e:
        return Response({'error': str(e)}, status=500)
    

@api_view(['POST'])
def upload_artist(request) -> Response:  
    if not request.POST.get('artist'):
        return Response({'error': 'No file provided'}, status=400)
    
    try:
        Artist.objects.create(
            name = request.POST.get('artist')
        )
        return Response({'message': 'File uploaded successfully'})
    except Exception as e:
        return Response({'error': str(e)}, status=500)
    
@api_view(['POST'])
def upload_album(request) -> Response:  
    if not request.FILES.get('coverImage'):
        return Response({'error': 'No file provided'}, status=400)
    
    if not request.POST.get('album'):
        return Response({'error': 'No name provided'}, status=400)
            
    try:
        Album.objects.create(
            title = request.POST.get('album'),
            artist_id = request.POST.get('artist'),
            genre = Genre.objects.get(guid = request.POST.get('genre')),
            cover_image = request.FILES.get('coverImage')
        )
        return Response({'message': 'File uploaded successfully'})
    except Exception as e:
        return Response({'error': str(e)}, status=500)
    
@api_view(['GET'])
def get_artists(request):
    artists = Artist.objects.all()
    serializer = ArtistSerializer(artists, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_albums(request):
    albums = Album.objects.all()
    serializer = AlbumListSerializer(albums, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def album_detail(request, album_id):
    try:
        album = Album.objects.select_related('artist', 'genre').prefetch_related('song_set').get(guid=album_id)
        album_serializer = AlbumListSerializer(album)
        songs = album.song_set.all()
        song_serializer = SongSerializer(songs, many=True)
        return Response({'album': album_serializer.data, 'songs': song_serializer.data})
    except Album.DoesNotExist:
        return Response({'error': 'Album does not exist'}, status=404)