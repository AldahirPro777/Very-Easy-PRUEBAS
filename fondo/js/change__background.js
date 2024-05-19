// Función para pausar durante un tiempo específico
async function pausar(ms) {
	await new Promise(resolve => setTimeout(resolve, ms));
}

function selecImg(key) {
	var pic ="";

	switch (key) {
		case 1:
				pic = "img/fondo1.jpg";
			break;
		case 2:
				pic = "img/fondo2.jpg";
			break;
		case 3:
				pic = "img/fondo3.jpg";
			break;
		case 4:
				pic = "img/fondo4.jpg";
			break;
		case 5:
				pic = "img/fondo5.png";
			break;
		default:
			break;
	}

	document.getElementById('myimg').src = pic;
}

async function change__background() {

	await pausar(1000);

	for (let i = 2; i < Infinity; i++) {
		selecImg(i);

		await pausar(3000);
		if (i == 5) {
			i = 0;
		}
	}
}

window.onload = change__background();