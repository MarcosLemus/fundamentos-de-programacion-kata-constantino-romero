const pregunta = {
    titulo: '¿A quién ha doblado más veces Constantino Romero?',
    respuestas: [
        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood"
        },
        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl"
        },
        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore"
        },
        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner"
        },
        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger"
        }
    ]
}

function imprimePregunta(pregunta) {
  let newHTML = "";

  newHTML += imprimeTitulo(pregunta);
  newHTML += imprimeTodasLasRespuestas(pregunta);

  return newHTML;
}

function imprimeTitulo(pregunta) {
  // Put your code here
  const titulo = pregunta.titulo;
  return titulo;
}


function imprimeTodasLasRespuestas(pregunta) {
  // Put your code here
  const respuestas = pregunta.respuestas;
  return respuestas;
}


function imprimeUnaRespuesta(respuesta) {
  // Put your code here
  let imprimeRespuesta = '';

  imprimeRespuesta += imprimeLabel(respuesta);
  imprimeRespuesta += imprimeInput(respuesta);

  return imprimeRespuesta;
}



function imprimeLabel(respuesta) {
  // Put your code here
  let newLabel = "";
  const respuesta = pregunta.respuestas[0, 1, 2, 3, 4].label;
  for (let i = 0; i < newLabel; i++){
      newLabel[i];
  }
  
  return respuesta;

}
console.log(imprimeLabel(respuesta));

function imprimeInput(respuesta) {
  // Put your code here
  let newInput = "";
  const input = pregunta.respuestas[0, 1, 2, 3, 4].id;
  for (let i = 0; i < newInput; i++){
    newInput[i];
  }

  return newInput;
}

document.getElementById("contenedorPreguntas").innerHTML = imprimePregunta(pregunta);