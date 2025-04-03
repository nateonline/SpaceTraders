import request from "../request.js";


export async function getWaypoint(waypointSymbol) {
	const systemSymbol = getSystemFromWaypoint(waypointSymbol);
	console.log(`Waypoint ${waypointSymbol} is located in system ${systemSymbol}`);
	const agentResponse = await request("GET", `systems/${systemSymbol}/waypoints/${waypointSymbol}`);
	return agentResponse.data;
}

function getSystemFromWaypoint(waypointSymbol) {
	const parts = waypointSymbol.split('-');
	if (parts.length !== 3) {
		throw new Error(`The symbol '${waypointSymbol}' is not a valid waypoint`);
	}
	return `${parts[0]}-${parts[1]}`;
}
