import ssl
import certifi
from neo4j import GraphDatabase

ssl_context = ssl.create_default_context(cafile=certifi.where())

driver = GraphDatabase.driver(
    "bolt+s://db-227dc778.databases.cognodb.com",
    auth=("cognodb", "83bf2a933b3fa34488bd9717f285d39f"),
    ssl_context=ssl_context,
)

try:
    driver.verify_connectivity()
    print("✅ Connected")
except Exception as e:
    print(type(e).__name__)
    print(e)
finally:
    driver.close()