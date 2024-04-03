from django.urls import path
from . import views

urlpatterns = [

    # Authentication
    path('api/me', views.get_user),


    # Genres
    path('genres/create', views.create_genre),
    path('genres', views.list_songs_by_genre),
    path('api/genres/<str:guid>', views.get_genre_by_guid),

    # Songs
    path('songs/upload/', views.upload_audio),
    path('list/', views.list_songs),
    path('api/liked-songs/create/<int:song_id>', views.like_song),
    path('api/liked-songs/all', views.list_favorite_songs),
    path('api/stream/<int:song_id>/', views.stream_song),
    path('api/song/<str:song_id>/', views.get_Song),
    path('api/lookups/<str:category>/', views.get_lookups),
    path('api/songs/album/<str:album_id>/', views.album_detail),

    # Artists
    path('artists/upload/', views.upload_artist),
    path('artists/get/', views.get_artists),

    # Albums
    path('albums/upload/', views.upload_album),
    path('albums/get/', views.get_albums),



]
