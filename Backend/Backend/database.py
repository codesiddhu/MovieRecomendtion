import os
from dotenv import load_dotenv
from neo4j import GraphDatabase

load_dotenv()

driver = GraphDatabase.driver(
    os.getenv("COGNODB_URI"),
    auth=(
        os.getenv("COGNODB_USER"),
        os.getenv("COGNODB_PASSWORD"),
    ),
)

def get_driver():
    return driver