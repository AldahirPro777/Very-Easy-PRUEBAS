// Función para pausar durante un tiempo específico
async function pausar(ms) {
	await new Promise(resolve => setTimeout(resolve, ms));
}