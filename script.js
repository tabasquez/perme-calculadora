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
