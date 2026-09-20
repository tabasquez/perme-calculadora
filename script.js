/* ---------------------------------------------------------
   PERME SCORE
--------------------------------------------------------- */
function calcularPERME() {
  // Si no estamos en la página PERME, salir
  if (!document.getElementById("perme1")) return;

  const ids = [
    "perme1","perme2","perme3","perme4","perme5",
    "perme6","perme7","perme8","perme9","perme10",
    "perme11","perme12","perme13","perme14","perme15"
  ];

  const valores = ids.map(id => Number(document.getElementById(id).value || 0));
  const total = valores.reduce((a, b) => a + b, 0);

  document.getElementById("resultado-perme").innerHTML = `
    <h3>Puntaje PERME: ${total}</h3>
    <p>Interpretar según protocolo institucional.</p>
  `;
}


/* ---------------------------------------------------------
   GLASGOW
--------------------------------------------------------- */
function calcularGlasgow() {
  const ocular = document.getElementById("g-ocular");
  const verbal = document.getElementById("g-verbal");
  const motora = document.getElementById("g-motora");

  if (!ocular || !verbal || !motora) return;

  const total = Number(ocular.value) + Number(verbal.value) + Number(motora.value);

  let interpretacion = "";
  if (total <= 8) interpretacion = "Coma: Daño neurológico grave, requiere intubación.";
  else if (total <= 12) interpretacion = "Lesión cerebral moderada, requiere vigilancia.";
  else interpretacion = "Paciente despierto, responde rápido o casi normal.";

  document.getElementById("resultado-glasgow").innerHTML = `
    <h3>Puntaje Glasgow: ${total} / 15</h3>
    <p>${interpretacion}</p>
  `;
}


/* ---------------------------------------------------------
   RASS
--------------------------------------------------------- */
function calcularRass() {
  const select = document.getElementById("rass-select");
  if (!select) return;

  const valor = Number(select.value);
  let descripcion = "";

  const textos = {
    4: "Combativo — violento, peligro inmediato.",
    3: "Muy agitado — agresivo, intenta retirar tubos.",
    2: "Agitado — movimientos sin propósito.",
    1: "Inquieto — ansioso, sin agresión.",
    0: "Despierto y tranquilo.",
    "-1": "Somnoliento — despierta >10 segundos.",
    "-2": "Sedación leve — contacto visual <10 segundos.",
    "-3": "Sedación moderada — abre ojos a la voz.",
    "-4": "Sedación profunda — responde al estímulo físico.",
    "-5": "Sin respuesta — no responde a voz ni estímulo físico."
  };

  descripcion = textos[valor];

  document.getElementById("resultado-rass").innerHTML = `
    <h3>Puntaje RASS: ${valor}</h3>
    <p>${descripcion}</p>
  `;
}


/* ---------------------------------------------------------
   BORG MODIFICADA
--------------------------------------------------------- */
function calcularBorgModificada() {
  const select = document.getElementById("borg-select");
  if (!select) return;

  const valor = Number(select.value);

  const textos = {
    0: "Nada en absoluto.",
    0.5: "Muy muy ligero (apenas perceptible).",
    1: "Muy ligero.",
    2: "Ligero.",
    3: "Moderado.",
    4: "Algo duro.",
    5: "Duro (pesado).",
    6: "Muy duro.",
    7: "Muy muy duro.",
    8: "Casi máximo.",
    9: "Máximo.",
    10: "Esfuerzo extremo / Agotamiento total."
  };

  document.getElementById("resultado-borg").innerHTML = `
    <h3>Borg Modificada: ${valor}</h3>
    <p>${textos[valor]}</p>
  `;
}


/* ---------------------------------------------------------
   ICU MOBILITY SCALE (IMS)
--------------------------------------------------------- */
function calcularIMS() {
  const select = document.getElementById("ims-select");
  if (!select) return;

  const valor = Number(select.value);

  const textos = {
    0: "Nada — paciente permanece pasivamente en la cama.",
    1: "Ejercicios en cama — actividad sin salir del borde.",
    2: "Traslado pasivo a silla.",
    3: "Sentado en el borde de la cama.",
    4: "De pie — soporta peso.",
    5: "Transferencia activa cama ↔ silla.",
    6: "Marcha en el sitio.",
    7: "Marcha con ayuda de 2 personas.",
    8: "Marcha con ayuda de 1 persona.",
    9: "Marcha independiente con ayuda para la marcha.",
    10: "Marcha independiente sin ayuda."
  };

  document.getElementById("resultado-ims").innerHTML = `
    <h3>Nivel IMS: ${valor}</h3>
    <p>${textos[valor]}</p>
  `;
}


/* ---------------------------------------------------------
   MRC (con resumen por lado)
--------------------------------------------------------- */
function calcularMRC() {
  const derechoIDs = ["mrc1d","mrc2d","mrc3d","mrc4d","mrc5d","mrc6d"];
  const izquierdoIDs = ["mrc1i","mrc2i","mrc3i","mrc4i","mrc5i","mrc6i"];

  // Si no estamos en la página MRC, salir
  if (!document.getElementById("mrc1d")) return;

  const derecho = derechoIDs
    .map(id => Number(document.getElementById(id).value || 0))
    .reduce((a, b) => a + b, 0);

  const izquierdo = izquierdoIDs
    .map(id => Number(document.getElementById(id).value || 0))
    .reduce((a, b) => a + b, 0);

  const total = derecho + izquierdo;

  let interpretacion = "";
  if (total >= 48) interpretacion = "Fuerza general conservada.";
  else if (total >= 36) interpretacion = "Debilidad adquirida en UCI (ICU-AW).";
  else interpretacion = "Debilidad severa / Tetraparesia funcional.";

  document.getElementById("resultado-mrc").innerHTML = `
    <h3>Puntaje MRC Total: ${total} / 60</h3>

    <p><strong>Lado derecho:</strong> ${derecho} / 30</p>
    <p><strong>Lado izquierdo:</strong> ${izquierdo} / 30</p>

    <p>${interpretacion}</p>
  `;
}

