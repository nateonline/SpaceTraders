import { getAgent } from "./types/agent.js";
import { getContracts } from "./types/contracts.js";
import { getWaypoint } from "./types/waypoint.js";


console.log("SpaceTraders!");

async function main() {
	const agentData = await getAgent();
	console.log(agentData);

	const contracts = await getContracts();
	console.log(contracts);

	const waypoint = await getWaypoint(agentData.headquarters);
	console.log(waypoint);
}

main();
