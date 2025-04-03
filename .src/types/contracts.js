import request from "../request.js";

export async function getContracts() {
	const agentResponse = await request("GET", `my/contracts`);
	return agentResponse.data;
}
