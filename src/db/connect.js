const neo4j = require("neo4j-driver");

export class Neo4jSingleton {
  constructor() {
    if (!Neo4jSingleton.instance) {
      this.driver = neo4j.driver(
        "neo4j://localhost:7687",
        neo4j.auth.basic("neo4j", "password")
      );
      Neo4jSingleton.instance = this;
    }

    return Neo4jSingleton.instance;
  }

  session() {
    return this.driver.session();
  }
}
