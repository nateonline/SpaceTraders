import { getAgent } from "./types/agent.js";
import { getContracts } from "./types/contracts.js";
import { getWaypoint } from "./types/waypoint.js";


console.log("SpaceTraders!");

async function main() {
	const agent = await getAgent();
	const contracts = await getContracts();
	const waypoint = await getWaypoint(agent.headquarters);
}

main();
