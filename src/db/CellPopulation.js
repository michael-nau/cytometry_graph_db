import { Neo4jSingleton } from "./connect";

export class CellPopulation {
  constructor(dbConnection) {
    this.neo4j = new Neo4jSingleton();
  }

  async getCellPopulations() {
    const session = this.neo4j.session();
    console.log("session", session);
    const result = await session.run("MATCH (c:CellPopulation) RETURN c");
    session.close();
    return result.records.map((record) => record.get("c").properties);
  }

  async createCellPopulation(name, value) {
    const session = this.neo4j.session();
    const result = await session.run(
      "CREATE (c:CellPopulation {name: $name, value: $value}) RETURN c",
      { name, value }
    );
    session.close();
    return result.records[0].get("c").properties;
  }

  async deleteCellPopulation(value) {
    const session = this.neo4j.session();
    const result = await session.run(
      "MATCH (c:CellPopulation {value: $value}) DELETE c",
      { value }
    );
    session.close();
    return result;
  }

  async updateCellPopulation(value, newName, newValue) {
    const session = this.neo4j.session();
    const result = await session.run(
      "MATCH (c:CellPopulation {value: $value}) SET c.name = $newName, c.value = $newValue RETURN c",
      { value, newName, newValue }
    );
    session.close();
    return result.records[0].get("c").properties;
  }
}
