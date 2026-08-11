from django.urls import path
from .views import (
    MovieListAPIView,
    MovieDetailAPIView,
    CreateUserAPIView,
    LikeMovieAPIView,
    RecommendationAPIView,
)

urlpatterns = [
    path("movies/", MovieListAPIView.as_view()),
    path("movies/<int:movie_id>/", MovieDetailAPIView.as_view()),
    path("users/", CreateUserAPIView.as_view()),
    path("movies/<int:movie_id>/like/",LikeMovieAPIView.as_view()),path(
    "recommendations/<int:user_id>/",
    RecommendationAPIView.as_view(),
),

]