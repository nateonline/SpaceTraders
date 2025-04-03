const AgentToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiQU5fT05MSU5FX1VTRVIiLCJ2ZXJzaW9uIjoidjIuMy4wIiwicmVzZXRfZGF0ZSI6IjIwMjUtMDMtMzAiLCJpYXQiOjE3NDM2OTU0MTcsInN1YiI6ImFnZW50LXRva2VuIn0.pKFYpCwXkLeHnt-xSp9Ph39ECvLxwLtXOOgw3xlF4ZMj-7JA6tjUM2s43QkQ3LwaRuYHfAZh-OUoyqkI3ic-lKMxGZQNZwRJD2uCHaG947JAvvD28m9wLH63bEWhGUXoF9Zurk2CAVZ04VzSEMZM4ZrPPX2QNzRhsPvcTF4MgeqtE6j_C9-VhZSfdyilMY_pa_TPznnz0OJCuUjWo-iHZgOyYmcior9QCxvS9MNhIyMN6wk8BksxDIkJWu9i_daMJKI6Fc2e0cFfUNOcq-oNcSWoi7xhWk0r4cxfGM80oNgssP4RSnlHZkh-bvwdG1hZYZpSQPZPiURYHgnIj4uJ2J6CpLpLg3DBNGoYLwIwusD-6xDY7GwvAG6OmWrMV4AT0xAUcM5D3Nhl7FpIPULSllHRjw-fOSxXkyiFjkNJAi2sFatPBeYhLYtRoIe9aQysu55owB0ckvKjrNQ8ou004JSu0VrRitJZNPZhv1fqgfLxo20QE0Qf-mSgwHRnhz6_qbW8WaiW30SR1Fs-S2O1h3MOJ5xSSW1IY0_Nkxz-gmuTDD1TsyJ9oWqjMQrXwydJxe3Vjw8EtucKcr0wYtNGliGiXhh--oT9R421VTeIzKz_GIFZhcXF8mi8QuWOQL-4mKt7K1MTAOjg-qriugkUKMt71tktj93Iil_8MFsdi2k";

export default async function request(method, endpoint) {
	const request = {
		method: method,
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${AgentToken}`,
		},
	};
	try {
		const response = await fetch(`https://api.spacetraders.io/v2/${endpoint}`, request);
		if (!response.ok) {
			// Try to parse the error message if available
			const errorData = await response.json().catch(() => null);
			const errorMessage = errorData?.message || `Error: ${response.status} ${response.statusText}`;
			throw new Error(errorMessage);
		}
		return await response.json();
	} catch (error) {
		console.error(error.message);
	}
}
