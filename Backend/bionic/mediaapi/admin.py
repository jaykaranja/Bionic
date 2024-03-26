from django.contrib import admin
from .models import Artist, Album, Genre, Song, FavoriteSong

# Register your models here.

admin.site.register(Artist)
admin.site.register(Album)
admin.site.register(Genre)
admin.site.register(Song)
admin.site.register(FavoriteSong)