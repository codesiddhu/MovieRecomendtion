from neo4j import GraphDatabase
from dotenv import load_dotenv
import os

load_dotenv()

URI = os.getenv("COGNODB_URI")
USER = os.getenv("COGNODB_USER")
PASSWORD = os.getenv("COGNODB_PASSWORD")

try:
    driver = GraphDatabase.driver(
        URI,
        auth=(USER, PASSWORD)
    )

    driver.verify_connectivity()
    print("✅ Connected successfully!")

except Exception as e:
    print("❌ Connection failed")
    print(e)

finally:
    if "driver" in locals():
        driver.close()