from Backend.database import get_driver

driver = get_driver()

query = """
CREATE (g1:Genre {name:'Action'})
CREATE (g2:Genre {name:'Sci-Fi'})
CREATE (g3:Genre {name:'Drama'})

CREATE (m1:Movie {
    id:1,
    title:'Inception',
    year:2010,
    rating:8.8
})

CREATE (m2:Movie {
    id:2,
    title:'Interstellar',
    year:2014,
    rating:8.6
})

CREATE (m3:Movie {
    id:3,
    title:'The Dark Knight',
    year:2008,
    rating:9.0
})

CREATE (a1:Actor {name:'Leonardo DiCaprio'})
CREATE (a2:Actor {name:'Matthew McConaughey'})
CREATE (a3:Actor {name:'Christian Bale'})

CREATE (u1:User {
    id:101,
    name:'John'
})

CREATE (u2:User {
    id:102,
    name:'Alice'
})

CREATE (m1)-[:BELONGS_TO]->(g2)
CREATE (m2)-[:BELONGS_TO]->(g2)
CREATE (m3)-[:BELONGS_TO]->(g1)

CREATE (a1)-[:ACTED_IN]->(m1)
CREATE (a2)-[:ACTED_IN]->(m2)
CREATE (a3)-[:ACTED_IN]->(m3)

CREATE (u1)-[:LIKES]->(m1)
CREATE (u1)-[:WATCHED]->(m2)

CREATE (u2)-[:LIKES]->(m3)
"""

with driver.session() as session:
    session.run(query)

print("✅ Sample data inserted successfully!")

driver.close()