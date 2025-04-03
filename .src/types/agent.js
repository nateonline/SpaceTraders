import request from "../request.js";


export async function getAgent() {
	const agentResponse = await request("GET", `my/agent`);
	return agentResponse.data;
}
