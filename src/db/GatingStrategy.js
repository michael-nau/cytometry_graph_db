import { Neo4jSingleton } from "./connect";

export class GatingStrategy {
  constructor() {
    this.neo4j = new Neo4jSingleton().driver; // Ensure you're using the driver instance
  }

  async createGatingStrategy(parentValue, childValue, criteria, strategyId) {
    const session = this.neo4j.session();
    try {
      const result = await session.run(
        `
        MATCH (parent:CellPopulation {value: $parentValue})
        MATCH (child:CellPopulation {value: $childValue})
        CREATE (parent)-[r:GATES_TO {criteria: $criteria, id: $strategyId}]->(child)
        RETURN r
        `,
        { parentValue, childValue, criteria, strategyId }
      );
      return result.records.map((record) => record.get("r").properties);
    } finally {
      await session.close();
    }
  }

  async deleteGatingStrategy(strategyId) {
    const session = this.neo4j.session();
    try {
      const result = await session.run(
        `
        MATCH ()-[r:GATES_TO {id: $strategyId}]->()
        DELETE r
        `,
        { strategyId }
      );
      return result;
    } finally {
      await session.close();
    }
  }

  async updateGatingStrategy(strategyId, newCriteria) {
    const session = this.neo4j.session();
    try {
      const result = await session.run(
        `
        MATCH ()-[r:GATES_TO {id: $strategyId}]->()
        SET r.criteria = $newCriteria
        RETURN r
        `,
        { strategyId, newCriteria }
      );
      return result.records.map((record) => record.get("r").properties);
    } finally {
      await session.close();
    }
  }
}
