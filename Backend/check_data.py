from Backend.database import get_driver

driver = get_driver()

query = """
MATCH (m:Movie)
RETURN m.title AS title,
       m.year AS year,
       m.rating AS rating
"""

with driver.session() as session:
    result = session.run(query)

    print("\nMovies\n")

    for record in result:
        print(record["title"], record["year"], record["rating"])

driver.close()