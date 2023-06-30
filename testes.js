const cadastro = 	{
	"id": "68fdd68e-d49f-4d15-ac1f-b683443580d8",
	"nome": "Aluno Teste",
	"boletim":{
        "matematica": 8.5,
		"portugues": 0,
		"historia": 6,
		"ingles": 9.5}
	}

	let notas = cadastro.boletim
	let {
		matematica,portugues,historia,ingles
	} = notas
	// let notasStatus = [ matematica, portugues, historia, ingles]
	let resultado = []
	
	for (let nota in notas){
		console.log(notas[nota])
		if (notas[nota]>=7) resultado.push("Aprovado")
		else if(notas[nota]==0) resultado.push("Sem nota")
		else resultado.push("Reprovado")
		}
	console.log(resultado)
	console.log("matematica: ", resultado[0])
	console.log("port", resultado[1])
	console.log("hist", resultado[2])
	console.log("ing", resultado[3])
	console.log("...........")
	for (let i=0; i<notas.length;i++){
		console.log(notas[i], ": ", resultado[i])
	}