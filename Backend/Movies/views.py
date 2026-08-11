from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from Backend.database import get_driver

driver = get_driver()


class MovieListAPIView(APIView):

    def get(self, request):

        query = """
        MATCH (m:Movie)
        RETURN
            m.id AS id,
            m.title AS title,
            m.year AS year,
            m.rating AS rating
        ORDER BY m.title
        """

        with driver.session() as session:
            result = session.run(query)

            movies = []

            for record in result:
                movies.append({
                    "id": record["id"],
                    "title": record["title"],
                    "year": record["year"],
                    "rating": record["rating"]
                })

        return Response(movies)


class MovieDetailAPIView(APIView):

    def get(self, request, movie_id):

        query = """
        MATCH (m:Movie {id:$id})
        OPTIONAL MATCH (m)-[:BELONGS_TO]->(g:Genre)
        OPTIONAL MATCH (a:Actor)-[:ACTED_IN]->(m)

        RETURN
            m.id AS id,
            m.title AS title,
            m.year AS year,
            m.rating AS rating,
            collect(DISTINCT g.name) AS genres,
            collect(DISTINCT a.name) AS actors
        """

        with driver.session() as session:

            record = session.run(query, id=movie_id).single()

            if not record:
                return Response({"message": "Movie not found"}, status=404)

            movie = {
                "id": record["id"],
                "title": record["title"],
                "year": record["year"],
                "rating": record["rating"],
                "genres": record["genres"],
                "actors": record["actors"],
            }

        return Response(movie)

from rest_framework import status

class CreateUserAPIView(APIView):

    def post(self, request):

        user_id = request.data.get("id")
        name = request.data.get("name")

        if not user_id or not name:
            return Response(
                {"error": "id and name are required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        query = """
        CREATE (u:User {
            id:$id,
            name:$name
        })
        RETURN u
        """

        with driver.session() as session:
            session.run(
                query,
                id=user_id,
                name=name
            )

        return Response(
            {"message": "User created successfully"},
            status=status.HTTP_201_CREATED,

        )

class LikeMovieAPIView(APIView):

    def post(self, request, movie_id):

        user_id = request.data.get("user_id")

        query = """
        MATCH (u:User {id:$user_id})
        MATCH (m:Movie {id:$movie_id})

        MERGE (u)-[:LIKES]->(m)

        RETURN u,m
        """

        with driver.session() as session:
            session.run(
                query,
                user_id=user_id,
                movie_id=movie_id,
            )

        return Response(
            {"message": "Movie liked successfully"}
        )

class RecommendationAPIView(APIView):

    def get(self, request, user_id):

        query = """
        MATCH (u:User {id:$user_id})-[:LIKES]->(:Movie)-[:BELONGS_TO]->(g:Genre)
        MATCH (recommended:Movie)-[:BELONGS_TO]->(g)

        WHERE NOT (u)-[:LIKES]->(recommended)

        RETURN DISTINCT
            recommended.id AS id,
            recommended.title AS title,
            recommended.year AS year,
            recommended.rating AS rating

        ORDER BY recommended.rating DESC
        """

        with driver.session() as session:

            result = session.run(
                query,
                user_id=user_id
            )

            movies = []

            for record in result:
                movies.append({
                    "id": record["id"],
                    "title": record["title"],
                    "year": record["year"],
                    "rating": record["rating"],
                })

        return Response(movies)