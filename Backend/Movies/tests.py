from django.test import TestCase
from neo4j import GraphDatabase
# Create your tests hfrom neo4j import GraphDatabase

URI = "bolt+s://db-530a5e84.databases.cognodb.com"
USER = "cognodb"
PASSWORD = "ae21da6647e82de3ca34bef407e9a03a"

driver = GraphDatabase.driver(
    URI,
    auth=(USER, PASSWORD),
)

try:
    driver.verify_connectivity()
    print("✅ Connected successfully!")
except Exception as e:
    print("❌ Error:", e)
finally:
    driver.close()