// ===============================
// CALCULAR PERME ICU MOBILITY SCORE
// ===============================

function calcularPerme() {
  let total = 0;

  // Selecciona todos los selects del formulario PERME
  const items = document.querySelectorAll(".perme-item");

  items.forEach(item => {
    total += Number(item.value);
  });

  // Interpretación clínica según protocolo Los Cobos
  let interpretacion = "";

  if (total >= 0 && total <= 7) {
    interpretacion = "Movilidad muy baja — paciente sedado o con múltiples dispositivos, requiere asistencia total.";
  } else if (total >= 8 && total <= 22) {
    interpretacion = "Movilidad moderada — control de tronco, fuerza de piernas, movilización activo-asistida.";
  } else if (total >= 23 && total <= 32) {
    interpretacion = "Movilidad alta — independencia funcional, pocas barreras externas.";
  }

  // Mostrar resultado
  const resultado = document.getElementById("resultado-perme");
  resultado.innerHTML = `
    <h3>Puntaje PERME: ${total} / 32</h3>
    <p>${interpretacion}</p>
  `;
}

// Activar cálculo al presionar el botón
document.getElementById("calcular-perme").addEventListener("click", calcularPerme);


// ===============================
// CALCULAR BORG CR10
// ===============================

function calcularBorg() {
  const valor = Number(document.getElementById("borg-input").value);

  const interpretaciones = {
    0: "Nada de esfuerzo",
    1: "Muy ligero",
    2: "Ligero",
    3: "Moderado",
    4: "Algo intenso",
    5: "Intenso",
    6: "Muy intenso",
    7: "Extremadamente intenso",
    8: "Casi máximo",
    9: "Máximo",
    10: "Esfuerzo extremo"
  };

  const resultado = document.getElementById("resultado-borg");
  resultado.innerHTML = `
    <h3>BORG CR10: ${valor}</h3>
    <p>${interpretaciones[valor]}</p>
  `;
}

// Activar cálculo al presionar el botón
document.getElementById("calcular-borg").addEventListener("click", calcularBorg);

// ===============================
// CALCULAR Glasgow
// ===============================

function calcularGlasgow() {
  const ocular = Number(document.getElementById("g-ocular").value);
  const verbal = Number(document.getElementById("g-verbal").value);
  const motora = Number(document.getElementById("g-motora").value);

  const total = ocular + verbal + motora;

  let interpretacion = "";

  if (total >= 3 && total <= 8) {
    interpretacion = "Coma: Daño neurológico grave, requiere intubación.";
  } else if (total >= 9 && total <= 12) {
    interpretacion = "Lesión cerebral moderada, requiere vigilancia y posible ingreso.";
  } else if (total >= 13 && total <= 15) {
    interpretacion = "Paciente despierto, responde rápido o casi normal.";
  }

  document.getElementById("resultado-glasgow").innerHTML = `
    <h3>Puntaje Glasgow: ${total} / 15</h3>
    <p>${interpretacion}</p>
  `;
}

// ===============================
// CALCULAR RASS
// ===============================

function calcularRass() {
  const valor = Number(document.getElementById("rass-select").value);

  let descripcion = "";

  switch (valor) {
    case 4:
      descripcion = "+4";
      break;
    case 3:
      descripcion = "+3";
      break;
    case 2:
      descripcion = "+2";
      break;
    case 1:
      descripcion = "+1";
      break;
    case 0:
      descripcion = "0";
      break;
    case -1:
      descripcion = "-1";
      break;
    case -2:
      descripcion = "-2";
      break;
    case -3:
      descripcion = "-3";
      break;
    case -4:
      descripcion = "-4";
      break;
    case -5:
      descripcion = "-5";
      break;
  }

  document.getElementById("resultado-rass").innerHTML = `
    <h3>Puntaje RASS: ${valor}</h3>
    <p>${descripcion}</p>
  `;
}

// ===============================
// CALCULAR Borg modificada
// ===============================


function calcularBorgModificada() {
  const valor = Number(document.getElementById("borg-select").value);

  let descripcion = "";

  switch (valor) {
    case 0:
      descripcion = "0";
      break;
    case 0.5:
      descripcion = "0.5";
      break;
    case 1:
      descripcion = "1";
      break;
    case 2:
      descripcion = "2";
      break;
    case 3:
      descripcion = "3";
      break;
    case 4:
      descripcion = "4";
      break;
    case 5:
      descripcion = "5";
      break;
    case 6:
      descripcion = "6";
      break;
    case 7:
      descripcion = "7";
      break;
    case 8:
      descripcion = "8";
      break;
    case 9:
      descripcion = "9";
      break;
    case 10:
      descripcion = "10";
      break;
  }

  document.getElementById("resultado-borg").innerHTML = `
    <h3>Borg Modificada: ${valor}</h3>
    <p>${descripcion}</p>
  `;
}


// ===============================
// CALCULAR IMS
// ===============================

function calcularIMS() {
  const valor = Number(document.getElementById("ims-select").value);

  let descripcion = "";

  switch (valor) {
    case 0:
      descripcion = "0";
      break;
    case 1:
      descripcion = "1";
      break;
    case 2:
      descripcion = "2";
      break;
    case 3:
      descripcion = "3";
      break;
    case 4:
      descripcion = "4";
      break;
    case 5:
      descripcion = "5";
      break;
    case 6:
      descripcion = "6";
      break;
    case 7:
      descripcion = "7";
      break;
    case 8:
      descripcion = "8";
      break;
    case 9:
      descripcion = "9";
      break;
    case 10:
      descripcion = "10";
      break;
  }

  document.getElementById("resultado-ims").innerHTML = `
    <h3>Nivel IMS: ${valor}</h3>
    <p>${descripcion}</p>
  `;
}


// ===============================
// CALCULAR MRC
// ===============================

function calcularMRC() {
  // IDs por lado
  const derechoIDs = ["mrc1d","mrc2d","mrc3d","mrc4d","mrc5d","mrc6d"];
  const izquierdoIDs = ["mrc1i","mrc2i","mrc3i","mrc4i","mrc5i","mrc6i"];

  // Sumar lado derecho
  const derecho = derechoIDs
    .map(id => Number(document.getElementById(id).value || 0))
    .reduce((a, b) => a + b, 0);

  // Sumar lado izquierdo
  const izquierdo = izquierdoIDs
    .map(id => Number(document.getElementById(id).value || 0))
    .reduce((a, b) => a + b, 0);

  // Total general
  const total = derecho + izquierdo;

  // Interpretación oficial (según tu documento)
  let interpretacion = "";
  if (total >= 48) {
    interpretacion = "Fuerza general conservada.";
  } else if (total < 48 && total >= 36) {
    interpretacion = "Debilidad adquirida en UCI (ICU-AW).";
  } else if (total < 36) {
    interpretacion = "Debilidad severa / Tetraparesia funcional.";
  }

  // Mostrar resultados
  document.getElementById("resultado-mrc").innerHTML = `
    <h3>Puntaje MRC Total: ${total} / 60</h3>

    <p><strong>Lado derecho:</strong> ${derecho} / 30</p>
    <p><strong>Lado izquierdo:</strong> ${izquierdo} / 30</p>

    <p>${interpretacion}</p>
  `;
}
