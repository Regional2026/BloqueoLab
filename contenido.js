/* =====================================================================
   BloqueoLab · contenido.js
   ---------------------------------------------------------------------
   Este es el ÚNICO archivo que se actualiza a medida que avanzan los
   temas de la rotación. index.html (la aplicación) no cambia.

   Estructura:
     temas        → hoja de ruta de las 8 presentaciones
     anatomia     → bases, plexos y articulaciones (Tema 1)
     bloqueos     → fichas por bloqueo (se llena desde el Tema 2)
     farmacos     → anestésicos locales y adyuvantes (calculadora)
     last         → protocolo de toxicidad sistémica
     anticoag     → intervalos ASRA para neuroaxial / bloqueos profundos
     referencias  → bibliografía citada en toda la herramienta
   ===================================================================== */

window.BLOQUEOLAB = {
  version: "8 oct 2026 · Tema 1",

  /* ------------------------------------------------------------------ */
  temas: [
    { n: 1, titulo: "Anatomía de plexos braquial, cervical, lumbar y sacro", estado: "listo", ruta: "braquial",
      bloqueos: [] },
    { n: 2, titulo: "Técnicas regionales para cirugía de hombro", estado: "pendiente",
      bloqueos: ["Interescalénico", "Tronco superior", "Supraclavicular", "Supraescapular anterior y posterior", "Nervio axilar", "Plexo cervical superficial"] },
    { n: 3, titulo: "Técnicas regionales para cirugía de miembro superior", estado: "pendiente",
      bloqueos: ["Supraclavicular", "Infraclavicular", "Axilar", "Bloqueos distales en codo y antebrazo"] },
    { n: 4, titulo: "Técnicas anestésicas para cirugía de cadera", estado: "pendiente",
      bloqueos: ["Espinal", "PENG", "Fascia ilíaca suprainguinal", "Femoral", "Cutáneo femoral lateral", "Cuadrado lumbar"] },
    { n: 5, titulo: "Técnicas anestésicas para cirugía de rodilla", estado: "pendiente",
      bloqueos: ["Canal aductor", "Triángulo femoral", "iPACK", "Geniculares", "Femoral", "Ciático"] },
    { n: 6, titulo: "Técnicas anestésicas para cirugía de pierna y pie", estado: "pendiente",
      bloqueos: ["Ciático poplíteo", "Ciático subglúteo", "Safeno", "Bloqueo de tobillo"] },
    { n: 7, titulo: "Analgesia para cirugía de tórax y glándula mamaria", estado: "pendiente",
      bloqueos: ["Paravertebral torácico", "ESP", "PECS I y II", "Plano del serrato", "Paraesternales", "Epidural torácica"] },
    { n: 8, titulo: "Analgesia para procedimientos abdominales", estado: "pendiente",
      bloqueos: ["TAP", "Vaina de los rectos", "Cuadrado lumbar", "Ilioinguinal / iliohipogástrico", "Epidural", "Espinal con morfina"] }
  ],

  /* ------------------------------------------------------------------ */
  anatomia: {

    /* ============================ BASES ============================ */
    bases: {
      titulo: "Bases de anatomía funcional",
      intro: "Lo que hay que saber antes de hablar de cualquier plexo: cómo está construido un nervio, de dónde sale y cómo se mapea su territorio en piel, músculo y hueso.",
      secciones: [
        {
          titulo: "El nervio periférico por capas",
          html: `
          <p>La dispersión del anestésico y el riesgo de lesión dependen de <b>las capas que rodean al nervio</b>, no solo del nervio en sí. Por eso se habla de <b>anatomía funcional</b> (término de Vloka, años 90).</p>
          <table class="t">
            <thead><tr><th>Capa</th><th>Qué es</th><th>Por qué importa en regional</th></tr></thead>
            <tbody>
              <tr><td><b>Endoneuro</b></td><td>Tejido laxo alrededor de cada axón</td><td>Espacio intrafascicular: aquí no debe llegar la aguja</td></tr>
              <tr><td><b>Perineuro</b></td><td>Envoltura resistente de cada fascículo; barrera hemato-nerviosa</td><td>La inyección <b>intrafascicular</b> genera presión alta e isquemia: es la lesión que queremos evitar</td></tr>
              <tr><td><b>Epineuro</b></td><td>Tejido conectivo denso que envuelve todo el nervio (interfascicular y epifascicular)</td><td>La inyección intraneural extrafascicular suele dispersarse sin daño; aun así no es un objetivo</td></tr>
              <tr><td><b>Paraneuro / vaina paraneural</b></td><td>Tejido laxo que une el nervio a sus vecinos y permite su deslizamiento</td><td>Inyectar <b>bajo la vaina paraneural</b> (p. ej. ciático poplíteo) acelera la instalación del bloqueo</td></tr>
            </tbody>
          </table>
          <div class="perla"><b>Proximal vs distal.</b> En raíces y troncos predomina el tejido neural con poco tejido conectivo: son más vulnerables y se ven <b>hipoecoicos</b> (monofasciculares). Distalmente aumenta el tejido conectivo y el nervio adquiere el patrón en <b>panal de abejas</b>.</div>
          <div class="perla"><b>Presión de apertura.</b> Una presión de inyección &gt;15 psi se asocia a contacto aguja-nervio en el interescalénico (Gadsden 2014). Si la inyección cuesta, se detiene y se reposiciona.</div>`
        },
        {
          titulo: "Del nervio espinal al plexo",
          html: `
          <p>Raíz <b>dorsal</b> (sensitiva, con su ganglio) + raíz <b>ventral</b> (motora) se unen en el foramen intervertebral y forman el <b>nervio espinal</b>, que se divide enseguida en:</p>
          <ul>
            <li><b>Rama dorsal:</b> piel y musculatura paravertebral, articulaciones facetarias.</li>
            <li><b>Rama ventral:</b> forma los <b>plexos</b> (cervical, braquial, lumbar, sacro) o los nervios intercostales (T1–T11) y el subcostal (T12).</li>
          </ul>
          <p>Son <b>31 pares</b>: 8 cervicales, 12 torácicos, 5 lumbares, 5 sacros y 1 coccígeo. C1–C7 salen por encima de su vértebra, C8 entre C7 y T1, y del T1 hacia abajo cada nervio sale por debajo de su vértebra. En el adulto el cono medular termina en L1–L2: por debajo está la cola de caballo.</p>
          <p><b>Simpático:</b> las fibras preganglionares salen solo de T1–L2 (ramos comunicantes blancos); todos los nervios espinales reciben un ramo comunicante gris. El parasimpático sacro sale por S2–S4 (nervios esplácnicos pélvicos).</p>`
        },
        {
          titulo: "Dermatomas, miotomas y osteotomas",
          html: `
          <p>El <b>dermatoma</b> es piel inervada por una raíz; el <b>miotoma</b>, músculo; el <b>osteotoma</b>, hueso y articulación. <b>No coinciden entre sí</b>: la incisión de una artroplastia de cadera está en T12–L1, pero el hueso y la cápsula dependen de L2–S1. Por eso se piensa en qué bloqueo cubre la cirugía, no solo en dermatomas.</p>
          <div class="grid2">
            <div>
              <h4>Dermatomas de referencia</h4>
              <table class="t compact">
                <tbody>
                  <tr><td class="mono">C4</td><td>Clavícula y "capa" del hombro</td></tr>
                  <tr><td class="mono">C5</td><td>Cara lateral del brazo (deltoides)</td></tr>
                  <tr><td class="mono">C6</td><td>Pulgar</td></tr>
                  <tr><td class="mono">C7</td><td>Dedo medio</td></tr>
                  <tr><td class="mono">C8</td><td>Meñique</td></tr>
                  <tr><td class="mono">T1</td><td>Cara medial del antebrazo</td></tr>
                  <tr><td class="mono">T2</td><td>Axila y cara medial del brazo</td></tr>
                  <tr><td class="mono">T4</td><td>Mamila</td></tr>
                  <tr><td class="mono">T6</td><td>Xifoides</td></tr>
                  <tr><td class="mono">T10</td><td>Ombligo</td></tr>
                  <tr><td class="mono">L1</td><td>Ligamento inguinal</td></tr>
                  <tr><td class="mono">L3</td><td>Rodilla (cara anterior/medial)</td></tr>
                  <tr><td class="mono">L4</td><td>Cara medial de la pierna</td></tr>
                  <tr><td class="mono">L5</td><td>Dorso del pie y hallux</td></tr>
                  <tr><td class="mono">S1</td><td>Borde lateral del pie y talón</td></tr>
                  <tr><td class="mono">S2–S4</td><td>Periné</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <h4>Miotomas para explorar un bloqueo</h4>
              <table class="t compact">
                <tbody>
                  <tr><td class="mono">C5</td><td>Abducción del hombro</td></tr>
                  <tr><td class="mono">C6</td><td>Flexión del codo, extensión de muñeca</td></tr>
                  <tr><td class="mono">C7</td><td>Extensión del codo</td></tr>
                  <tr><td class="mono">C8</td><td>Flexión de los dedos</td></tr>
                  <tr><td class="mono">T1</td><td>Abducción de los dedos</td></tr>
                  <tr><td class="mono">L2</td><td>Flexión de cadera</td></tr>
                  <tr><td class="mono">L3</td><td>Extensión de rodilla</td></tr>
                  <tr><td class="mono">L4</td><td>Dorsiflexión del tobillo</td></tr>
                  <tr><td class="mono">L5</td><td>Extensión del hallux</td></tr>
                  <tr><td class="mono">S1</td><td>Flexión plantar</td></tr>
                </tbody>
              </table>
              <p class="nota">Hay superposición importante entre dermatomas vecinos: bloquear una sola raíz rara vez anestesia por completo su dermatoma.</p>
            </div>
          </div>`
        },
        {
          titulo: "Tipos de fibra y bloqueo diferencial",
          html: `
          <table class="t">
            <thead><tr><th>Fibra</th><th>Mielina</th><th>Función</th><th>Sensibilidad al AL</th></tr></thead>
            <tbody>
              <tr><td class="mono">B</td><td>Sí, fina</td><td>Simpática preganglionar</td><td>La más sensible</td></tr>
              <tr><td class="mono">C</td><td>No</td><td>Dolor sordo, temperatura, posganglionar simpática</td><td>Alta</td></tr>
              <tr><td class="mono">Aδ</td><td>Sí</td><td>Dolor agudo, frío</td><td>Alta</td></tr>
              <tr><td class="mono">Aβ</td><td>Sí</td><td>Tacto, presión</td><td>Intermedia</td></tr>
              <tr><td class="mono">Aγ</td><td>Sí</td><td>Tono del huso muscular</td><td>Intermedia</td></tr>
              <tr><td class="mono">Aα</td><td>Sí, gruesa</td><td>Motora, propiocepción</td><td>Menor</td></tr>
            </tbody>
          </table>
          <p>Secuencia clínica de instalación: <b>simpático → temperatura → dolor → tacto → motor</b>; la recuperación ocurre en orden inverso. Por eso el frío (hielo, cloruro de etilo) es la prueba más precoz de que el bloqueo está funcionando.</p>
          <p class="nota">En los troncos mixtos la disposición de los fascículos también influye: las fibras del manto (periféricas) se bloquean antes que las del núcleo; en el plexo braquial el manto inerva lo proximal, así que el hombro se anestesia antes que la mano.</p>`
        }
      ],
      preguntas: [
        { q: "¿Por qué una inyección intrafascicular es más peligrosa que una extrafascicular?", a: "Porque el perineuro es poco distensible: la inyección dentro del fascículo eleva bruscamente la presión endoneural, comprime los vasos y produce isquemia y daño axonal. Fuera del perineuro el anestésico se dispersa sin generar esa presión." },
        { q: "¿Por qué el dermatoma no basta para planear un bloqueo?", a: "Porque piel, músculo y hueso de una misma zona dependen de raíces distintas. En la cadera la piel es T12–L1 pero la cápsula y el fémur son L2–S1; un bloqueo que cubra solo la incisión deja dolor óseo y capsular." },
        { q: "¿Qué evalúa primero para saber si un bloqueo se está instalando?", a: "La sensibilidad al frío (fibras Aδ/C), que se pierde antes que el tacto y la fuerza. La vasodilatación y el calor de la extremidad (bloqueo simpático) aparecen incluso antes." }
      ],
      refs: ["hadzic", "brown", "gadsden"]
    },

    /* ============================ PLEXOS ============================ */
    plexos: [

      /* --------------------------- BRAQUIAL --------------------------- */
      {
        id: "braquial",
        nombre: "Plexo braquial",
        segmentos: ["C4", "C5", "C6", "C7", "C8", "T1", "T2"],
        rango: "C5–T1",
        resumen: "Ramas ventrales de C5–T1 que se organizan en raíces, troncos, divisiones, cordones y ramas terminales. Inerva piel, músculos, huesos y articulaciones del miembro superior, excepto la piel de la axila y la cara medial del brazo (T2, intercostobraquial) y la piel del hombro superior (C4, supraclaviculares).",
        variante: "Contribuciones variables: <b>prefijado</b> con aporte de C4 o <b>posfijado</b> con aporte de T2. El núcleo clásico es C5–T1.",
        diagrama: "braquial",
        secciones: [
          {
            titulo: "Organización: R · T · D · C · R",
            html: `
            <table class="t">
              <thead><tr><th>Nivel</th><th>Composición</th><th>Dónde está</th><th>Ramas que salen aquí</th></tr></thead>
              <tbody>
                <tr><td><b>Raíces</b> (5)</td><td>Ramas ventrales C5, C6, C7, C8, T1</td><td>Entre escaleno anterior y medio</td><td>Escapular dorsal (C5), torácico largo (C5–C7), aporte de C5 al frénico</td></tr>
                <tr><td><b>Troncos</b> (3)</td><td>Superior C5–C6 · Medio C7 · Inferior C8–T1</td><td>Triángulo posterior del cuello</td><td>Supraescapular y n. del subclavio (tronco superior)</td></tr>
                <tr><td><b>Divisiones</b> (6)</td><td>Cada tronco da una anterior (flexora) y una posterior (extensora)</td><td>Detrás de la clavícula</td><td>Ninguna</td></tr>
                <tr><td><b>Cordones</b> (3)</td><td>Lateral: div. anteriores sup. + medio · Medial: div. anterior inf. · Posterior: las 3 posteriores</td><td>Axila, alrededor de la arteria axilar, bajo el pectoral menor</td><td>Pectorales, subescapulares, toracodorsal, cutáneos mediales</td></tr>
                <tr><td><b>Ramas</b> (5)</td><td>Musculocutáneo, axilar, radial, mediano, cubital</td><td>Axila distal y brazo</td><td>—</td></tr>
              </tbody>
            </table>
            <div class="perla"><b>Nombres de los cordones.</b> Se llaman lateral, medial y posterior por su relación con la <b>arteria axilar</b>, no por su posición en el esquema.</div>
            <div class="perla"><b>Divisiones anteriores</b> → nervios de compartimentos flexores (musculocutáneo, mediano, cubital). <b>Divisiones posteriores</b> → extensores (axilar, radial).</div>`
          },
          {
            titulo: "Inervación del hombro y del miembro superior",
            html: `
            <ul>
              <li><b>Hombro:</b> supraescapular (la mayor parte de la cápsula posterosuperior, articulación AC y bursa subacromial) + axilar (cápsula anteroinferior y posterior) + subescapulares y pectoral lateral (cara anterior). La piel del hombro superior es C4 (supraclaviculares, plexo cervical).</li>
              <li><b>Codo:</b> los cuatro nervios que lo cruzan: musculocutáneo, radial, mediano y cubital.</li>
              <li><b>Muñeca y mano:</b> mediano, cubital y radial, incluidas las ramas interóseas anterior (mediano) y posterior (radial).</li>
              <li><b>Torniquete en el brazo:</b> la piel medial del brazo depende del cutáneo medial del brazo (C8–T1) y del <b>intercostobraquial (T2)</b>, que no es del plexo braquial.</li>
            </ul>`
          }
        ],
        nervios: [
          { id: "escapular-dorsal", nombre: "Escapular dorsal", raices: ["C5"], tipo: "colateral", origen: "Raíz C5",
            motor: "Romboides y elevador de la escápula", sensitivo: "—", articular: "—",
            clinica: "Atraviesa el escaleno medio: en el interescalénico con aguja de lateral a medial puede aparecer dentro del músculo y es un nervio a evitar.",
            eco: "Punto hipoecoico pequeño dentro del escaleno medio, a veces acompañado de la arteria escapular dorsal." },
          { id: "toracico-largo", nombre: "Torácico largo", raices: ["C5", "C6", "C7"], tipo: "colateral", origen: "Raíces C5–C7",
            motor: "Serrato anterior", sensitivo: "—", articular: "—",
            clinica: "Su lesión produce escápula alada. También cruza el escaleno medio, igual que el escapular dorsal.",
            eco: "Dentro o en la cara anterior del escaleno medio; en la pared torácica corre sobre el serrato (bloqueo del plano del serrato, tema 7)." },
          { id: "supraescapular", nombre: "Supraescapular", raices: ["C5", "C6"], tipo: "colateral", origen: "Tronco superior",
            motor: "Supraespinoso e infraespinoso", sensitivo: "—",
            articular: "Mayor parte de la cápsula posterosuperior del hombro, articulación acromioclavicular y bursa subacromial",
            clinica: "Base de las alternativas que ahorran el frénico en cirugía de hombro (supraescapular anterior bajo el omohioideo o posterior en la fosa supraespinosa, combinado con el nervio axilar). Sale del tronco superior antes que el resto del plexo, por eso el supraclavicular puede no cubrirlo.",
            eco: "En el cuello se separa del tronco superior y corre lateral, profundo al omohioideo. En la fosa supraespinosa: junto a la arteria supraescapular, en el suelo óseo de la fosa." },
          { id: "subclavio", nombre: "N. del subclavio", raices: ["C5", "C6"], tipo: "colateral", origen: "Tronco superior",
            motor: "Subclavio", sensitivo: "—", articular: "Articulación esternoclavicular; contribuye a la inervación de la clavícula",
            clinica: "Una de las razones por las que la cirugía de clavícula necesita algo más que el plexo cervical superficial.", eco: "No se identifica de rutina." },
          { id: "pectoral-lateral", nombre: "Pectoral lateral", raices: ["C5", "C6", "C7"], tipo: "colateral", origen: "Cordón lateral",
            motor: "Pectoral mayor", sensitivo: "—", articular: "Cara anterior del hombro y articulación acromioclavicular",
            clinica: "Diana del PECS I (entre pectoral mayor y menor), junto a la rama pectoral de la arteria toracoacromial (tema 7).",
            eco: "Entre pectoral mayor y menor, al lado de la rama pectoral de la arteria toracoacromial." },
          { id: "pectoral-medial", nombre: "Pectoral medial", raices: ["C8", "T1"], tipo: "colateral", origen: "Cordón medial",
            motor: "Pectoral menor y parte del pectoral mayor", sensitivo: "—", articular: "—",
            clinica: "Perfora el pectoral menor; también es diana del PECS I.", eco: "Atraviesa el pectoral menor, más lateral y caudal que el pectoral lateral." },
          { id: "cutaneos-mediales", nombre: "Cutáneos mediales del brazo y antebrazo", raices: ["C8", "T1"], tipo: "colateral", origen: "Cordón medial",
            motor: "—", sensitivo: "Cara medial del brazo (cutáneo medial del brazo) y del antebrazo (cutáneo medial del antebrazo)", articular: "—",
            clinica: "El cutáneo medial del brazo se anastomosa con el intercostobraquial (T2). Para el torniquete se complementa con infiltración subcutánea en la cara medial del brazo.",
            eco: "Superficiales en la axila, cerca de la vena basílica." },
          { id: "subescapulares", nombre: "Subescapulares (superior e inferior)", raices: ["C5", "C6"], tipo: "colateral", origen: "Cordón posterior",
            motor: "Subescapular y redondo mayor", sensitivo: "—", articular: "Cara anterior de la cápsula del hombro",
            clinica: "Parte de la inervación anterior del hombro que el supraescapular no cubre.", eco: "No se identifican de rutina." },
          { id: "toracodorsal", nombre: "Toracodorsal", raices: ["C6", "C7", "C8"], tipo: "colateral", origen: "Cordón posterior",
            motor: "Dorsal ancho", sensitivo: "—", articular: "—",
            clinica: "Relevante en cirugía de mama y colgajos de dorsal ancho (tema 7).", eco: "Junto a la arteria toracodorsal, en la pared lateral del tórax." },
          { id: "musculocutaneo", nombre: "Musculocutáneo", raices: ["C5", "C6", "C7"], tipo: "terminal", origen: "Cordón lateral",
            motor: "Coracobraquial, bíceps y braquial (flexión del codo, supinación)", sensitivo: "Cara lateral del antebrazo (n. cutáneo lateral del antebrazo)", articular: "Codo y articulación radiocubital proximal",
            clinica: "Perfora el coracobraquial y abandona la vaina neurovascular muy alto en la axila. En el bloqueo axilar hay que buscarlo e inyectarlo aparte o queda sin bloquear.",
            eco: "Ovalado y aplanado, hiperecoico, en el plano entre bíceps y coracobraquial, separado de la arteria." },
          { id: "axilar", nombre: "Axilar", raices: ["C5", "C6"], tipo: "terminal", origen: "Cordón posterior",
            motor: "Deltoides y redondo menor", sensitivo: "Piel sobre el deltoides (n. cutáneo lateral superior del brazo)", articular: "Cápsula anteroinferior y posterior del hombro",
            clinica: "Sale por el espacio cuadrangular con la arteria circunfleja humeral posterior. Es el complemento del supraescapular para analgesia de hombro sin bloquear el frénico.",
            eco: "Posterior al cuello quirúrgico del húmero, junto a la arteria circunfleja humeral posterior, bajo el deltoides." },
          { id: "radial", nombre: "Radial", raices: ["C5", "C6", "C7", "C8", "T1"], tipo: "terminal", origen: "Cordón posterior",
            motor: "Tríceps, ancóneo, braquiorradial, supinador y extensores de muñeca y dedos", sensitivo: "Cara posterior del brazo y antebrazo; dorso radial de la mano", articular: "Codo, radiocubitales y muñeca",
            clinica: "Rodea el húmero por el surco espiral. En el codo pasa entre braquial y braquiorradial, donde se puede bloquear de forma distal.",
            eco: "En la axila: profundo a la arteria, sobre el tendón conjunto (dorsal ancho y redondo mayor), a la hora 5–6." },
          { id: "mediano", nombre: "Mediano", raices: ["C6", "C7", "C8", "T1"], raicesMenor: ["C5"], tipo: "terminal", origen: "Cordones lateral y medial",
            motor: "Pronadores, flexores del antebrazo (excepto flexor cubital del carpo y mitad cubital del flexor profundo), tenares y lumbricales 1–2", sensitivo: "Palma y cara palmar de los 3½ dedos radiales, con sus lechos ungueales", articular: "Codo anterior, radiocubitales, muñeca y mano",
            clinica: "Se forma por una raíz lateral y una medial que rodean la arteria (la 'M' del plexo). En el codo está medial a la arteria braquial.",
            eco: "En la axila: superficial y lateral a la arteria, a la hora 10–12. En el antebrazo, entre flexor superficial y profundo." },
          { id: "cubital", nombre: "Cubital", raices: ["C8", "T1"], tipo: "terminal", origen: "Cordón medial",
            motor: "Flexor cubital del carpo, mitad cubital del flexor profundo, hipotenares, interóseos, lumbricales 3–4 y aductor del pulgar", sensitivo: "Borde cubital de la mano y 1½ dedos cubitales", articular: "Codo medial, muñeca y mano",
            clinica: "Como depende de C8–T1, es el territorio que respeta el interescalénico. En el codo no se bloquea dentro del surco epitroclear (riesgo de compresión); se hace proximal o en el antebrazo.",
            eco: "En la axila: superficial y medial a la arteria, a la hora 1–3, cerca de la vena." }
        ],
        niveles: [
          { id: "interescalenico", nombre: "Interescalénico", donde: "Raíces / tronco superior, entre escalenos a nivel de C6",
            banda: [45, 30, 195, 190],
            cubre: "Hombro, clavícula distal y brazo proximal",
            respeta: "Territorio C8–T1 (cubital, cutáneos mediales). La mano y el antebrazo medial quedan sin bloqueo.",
            frenico: "Paresia hemidiafragmática en casi todos los pacientes con volúmenes convencionales (Urmey 1991): el frénico corre sobre el escaleno anterior a pocos milímetros.",
            estados: { "musculocutaneo": "si", "axilar": "si", "supraescapular": "si", "radial": "parcial", "mediano": "parcial", "cubital": "no", "cutaneos-mediales": "no", "escapular-dorsal": "parcial", "toracico-largo": "parcial", "pectoral-lateral": "parcial", "pectoral-medial": "no", "subescapulares": "parcial", "toracodorsal": "parcial", "subclavio": "si" },
            eco: "interescalenico" },
          { id: "supraclavicular", nombre: "Supraclavicular", donde: "Troncos / divisiones, lateral a la arteria subclavia sobre la 1.ª costilla",
            banda: [185, 25, 165, 290],
            cubre: "Brazo, codo, antebrazo y mano. El plexo es muy compacto aquí: 'la espinal del miembro superior'.",
            respeta: "Puede respetar el territorio cubital si no se deposita anestésico en el 'corner pocket' (ángulo arteria-costilla), y el supraescapular si ya se separó del tronco superior.",
            frenico: "Menos frecuente que en el interescalénico, pero ocurre y depende del volumen. Riesgo de neumotórax: la pleura está justo lateral y profunda a la costilla.",
            estados: { "musculocutaneo": "si", "axilar": "si", "supraescapular": "parcial", "radial": "si", "mediano": "si", "cubital": "parcial", "cutaneos-mediales": "si", "escapular-dorsal": "no", "toracico-largo": "no", "pectoral-lateral": "si", "pectoral-medial": "si", "subescapulares": "si", "toracodorsal": "si", "subclavio": "parcial" },
            eco: "supraclavicular" },
          { id: "infraclavicular", nombre: "Infraclavicular", donde: "Cordones, alrededor de la arteria axilar bajo el pectoral menor",
            banda: [415, 55, 70, 250],
            cubre: "Codo, antebrazo y mano. Sitio estable para catéter.",
            respeta: "Hombro (supraescapular ya salió). Piel medial del brazo por el intercostobraquial (T2).",
            frenico: "Excepcional. Es profundo y no compresible: se trata como bloqueo profundo en el paciente anticoagulado.",
            estados: { "musculocutaneo": "si", "axilar": "si", "supraescapular": "no", "radial": "si", "mediano": "si", "cubital": "si", "cutaneos-mediales": "si", "escapular-dorsal": "no", "toracico-largo": "no", "pectoral-lateral": "parcial", "pectoral-medial": "parcial", "subescapulares": "parcial", "toracodorsal": "parcial", "subclavio": "no" },
            eco: "infraclavicular" },
          { id: "axilar", nombre: "Axilar", donde: "Ramas terminales alrededor de la arteria axilar",
            banda: [555, 20, 165, 320],
            cubre: "Antebrazo y mano; codo si se incluye el musculocutáneo.",
            respeta: "Musculocutáneo si no se inyecta aparte; nervio axilar y supraescapular (ya salieron); intercostobraquial (T2).",
            frenico: "Sin riesgo de frénico ni de neumotórax. Superficial y compresible: buena opción en el paciente anticoagulado.",
            estados: { "musculocutaneo": "parcial", "axilar": "no", "supraescapular": "no", "radial": "si", "mediano": "si", "cubital": "si", "cutaneos-mediales": "parcial", "escapular-dorsal": "no", "toracico-largo": "no", "pectoral-lateral": "no", "pectoral-medial": "no", "subescapulares": "no", "toracodorsal": "no", "subclavio": "no" },
            eco: "axilar" }
        ],
        preguntas: [
          { q: "¿Por qué el interescalénico no sirve para cirugía de mano?", a: "Porque se deposita a nivel de raíces y tronco superior (C5–C7) y la dispersión rara vez alcanza C8–T1. El territorio cubital y el antebrazo medial quedan sin bloquear." },
          { q: "¿Por qué casi todo interescalénico paraliza el hemidiafragma?", a: "El frénico (C3–C5) desciende sobre la cara anterior del escaleno anterior, a pocos milímetros de las raíces, y comparte el plano de la fascia prevertebral. Con volúmenes convencionales el anestésico lo alcanza en prácticamente todos los pacientes." },
          { q: "¿Qué nervio hay que buscar aparte en el bloqueo axilar y por qué?", a: "El musculocutáneo: sale del cordón lateral, perfora el coracobraquial y abandona la vaina neurovascular muy alto. En la axila está entre bíceps y coracobraquial, lejos de la arteria." },
          { q: "¿Qué cubre el supraescapular en el hombro y qué le falta?", a: "La mayor parte de la cápsula posterosuperior, la articulación acromioclavicular y la bursa subacromial. Le falta la cápsula anterior e inferior (axilar, subescapulares y pectoral lateral) y la piel (C4 y axilar)." },
          { q: "¿Por qué los cordones se llaman lateral, medial y posterior?", a: "Por su posición respecto a la arteria axilar en la axila, que es donde se forman y donde se bloquean en el infraclavicular." }
        ],
        refs: ["hadzic", "brown", "urmey", "gadsden"]
      },

      /* --------------------------- CERVICAL --------------------------- */
      {
        id: "cervical",
        nombre: "Plexo cervical",
        segmentos: ["C1", "C2", "C3", "C4", "C5"],
        rango: "C1–C4",
        resumen: "Ramas ventrales de C1–C4, profundas al esternocleidomastoideo y anteriores al escaleno medio y al elevador de la escápula. Tiene un componente superficial (sensitivo, piel del cuello, oreja y hombro) y uno profundo (motor: asa cervical, escalenos, frénico).",
        variante: "El frénico recibe C3–C5: 'C3, 4 y 5 mantienen vivo el diafragma'.",
        diagrama: "cervical",
        secciones: [
          {
            titulo: "Ramas superficiales: el punto de Erb",
            html: `
            <p>Las cuatro ramas sensitivas emergen juntas en el <b>punto nervioso (punto de Erb del cuello)</b>, en la mitad del borde posterior del esternocleidomastoideo, y se abren en abanico:</p>
            <ul>
              <li><b>Occipital menor</b> (C2): piel retroauricular y occipital lateral.</li>
              <li><b>Auricular mayor</b> (C2–C3): pabellón auricular, ángulo de la mandíbula, piel parotídea.</li>
              <li><b>Cervical transverso</b> (C2–C3): piel de la cara anterior del cuello.</li>
              <li><b>Supraclaviculares</b> (C3–C4) mediales, intermedios y laterales: piel sobre la clavícula y el hombro superior; ramas a las articulaciones esternoclavicular y acromioclavicular.</li>
            </ul>`
          },
          {
            titulo: "Ramas profundas",
            html: `
            <ul>
              <li><b>Asa cervical</b> (C1–C3): músculos infrahioideos. La raíz superior viaja con el hipogloso (XII).</li>
              <li><b>Frénico</b> (C3–C5): desciende sobre la cara anterior del escaleno anterior, profundo a la fascia prevertebral, entra al tórax y llega al diafragma (motor y sensitivo de su pleura y peritoneo).</li>
              <li><b>Ramas musculares:</b> escalenos, elevador de la escápula y prevertebrales; aporta al esternocleidomastoideo y al trapecio junto con el accesorio (XI).</li>
            </ul>`
          },
          {
            titulo: "Superficial, intermedio y profundo: las fascias mandan",
            html: `
            <table class="t">
              <thead><tr><th>Bloqueo</th><th>Plano</th><th>Riesgos propios</th></tr></thead>
              <tbody>
                <tr><td><b>Superficial</b></td><td>Subcutáneo, superficial a la lámina de revestimiento de la fascia cervical, sobre el borde posterior del ECM</td><td>Mínimos</td></tr>
                <tr><td><b>Intermedio</b></td><td>Entre la lámina de revestimiento (bajo el ECM) y la fascia prevertebral</td><td>Bajos; difusión ocasional al frénico</td></tr>
                <tr><td><b>Profundo</b></td><td>Paravertebral C2–C4, profundo a la fascia prevertebral</td><td>Frénico, arteria vertebral, inyección epidural/intratecal, laríngeo recurrente, Horner</td></tr>
              </tbody>
            </table>
            <div class="perla"><b>Usos.</b> Endarterectomía carotídea (superficial o intermedio, a menudo con infiltración del cirujano en la vaina carotídea), cirugía de clavícula (combinado con el plexo braquial: la clavícula también recibe ramas del n. del subclavio y del pectoral lateral), tiroides y cirugía de oído o región parotídea.</div>`
          }
        ],
        nervios: [
          { id: "occipital-menor", nombre: "Occipital menor", raices: ["C2"], raicesMenor: ["C3"], tipo: "superficial", origen: "Punto de Erb",
            motor: "—", sensitivo: "Piel retroauricular y occipital lateral", articular: "—",
            clinica: "Sube por el borde posterior del ECM. Se incluye en el bloqueo de scalp para craneotomía.", eco: "Puntos hipoecoicos bajo el borde posterior del ECM, en el plano intermedio." },
          { id: "auricular-mayor", nombre: "Auricular mayor", raices: ["C2", "C3"], tipo: "superficial", origen: "Punto de Erb",
            motor: "—", sensitivo: "Pabellón auricular, ángulo mandibular y piel parotídea", articular: "—",
            clinica: "Cruza superficial al ECM hacia la parótida: es el nervio que se ve más fácil en ecografía sobre el músculo.", eco: "Estructura pequeña y redonda superficial al ECM, a medio camino entre mastoides y clavícula." },
          { id: "cervical-transverso", nombre: "Cervical transverso", raices: ["C2", "C3"], tipo: "superficial", origen: "Punto de Erb",
            motor: "—", sensitivo: "Piel de la cara anterior del cuello", articular: "—",
            clinica: "Principal objetivo cutáneo para cirugía tiroidea y carotídea.", eco: "Se dirige en sentido medial, superficial al ECM." },
          { id: "supraclaviculares", nombre: "Supraclaviculares", raices: ["C3", "C4"], tipo: "superficial", origen: "Punto de Erb",
            motor: "—", sensitivo: "Piel sobre la clavícula, hombro superior y pared torácica hasta la 2.ª costilla", articular: "Esternoclavicular y acromioclavicular",
            clinica: "Son la razón por la que se añade plexo cervical superficial al interescalénico cuando el portal o la incisión llegan a la piel del hombro superior o de la clavícula.", eco: "Descienden por el triángulo posterior hacia la clavícula, superficiales." },
          { id: "asa-cervical", nombre: "Asa cervical", raices: ["C1", "C2", "C3"], tipo: "profundo", origen: "Ramas ventrales C1–C3",
            motor: "Infrahioideos (esternohioideo, esternotiroideo, omohioideo)", sensitivo: "—", articular: "—",
            clinica: "Las ramas de C1 también van al tirohioideo y geniohioideo. Su bloqueo con niveles altos compromete la protección de la vía aérea.", eco: "Sobre la vaina carotídea." },
          { id: "frenico", nombre: "Frénico", raices: ["C3", "C4", "C5"], tipo: "profundo", origen: "Ramas ventrales C3–C5",
            motor: "Diafragma", sensitivo: "Pleura y peritoneo diafragmático, pericardio", articular: "—",
            clinica: "Se bloquea en el interescalénico, el cervical profundo y, con menor frecuencia, el supraclavicular. En pacientes con reserva respiratoria limitada se prefieren abordajes más distales, menos volumen o alternativas que lo respeten.",
            eco: "Estructura hipoecoica de 1–2 mm sobre la cara anterior del escaleno anterior, bajo la fascia prevertebral; se aleja de C5 a medida que desciende." },
          { id: "ramas-musculares-cervicales", nombre: "Ramas musculares", raices: ["C1", "C2", "C3", "C4"], tipo: "profundo", origen: "Ramas ventrales",
            motor: "Escalenos, elevador de la escápula, prevertebrales; aporte al ECM y trapecio con el XI", sensitivo: "—", articular: "—",
            clinica: "El bloqueo de los escalenos se suma al frénico en la disminución de la capacidad inspiratoria.", eco: "—" }
        ],
        preguntas: [
          { q: "¿Qué diferencia el bloqueo cervical intermedio del profundo?", a: "La fascia prevertebral. El intermedio deposita el anestésico entre la lámina de revestimiento y la fascia prevertebral; el profundo atraviesa esa fascia hasta las raíces C2–C4, con más riesgo de frénico, arteria vertebral e inyección neuroaxial." },
          { q: "¿Por qué el plexo cervical superficial solo no basta para la clavícula?", a: "Porque cubre la piel (supraclaviculares) pero el hueso y el periostio reciben ramas del n. del subclavio, del pectoral lateral y probablemente del supraescapular, todos del plexo braquial." },
          { q: "¿Qué raíces forman el frénico y dónde se ve?", a: "C3–C5, con el mayor aporte de C4. Se ve como un punto hipoecoico sobre la cara anterior del escaleno anterior, bajo la fascia prevertebral." }
        ],
        refs: ["hadzic", "brown"]
      },

      /* ---------------------------- LUMBAR ---------------------------- */
      {
        id: "lumbar",
        nombre: "Plexo lumbar",
        segmentos: ["T12", "L1", "L2", "L3", "L4"],
        rango: "L1–L4 (± T12)",
        resumen: "Ramas ventrales de L1–L4, con aporte frecuente de T12, formadas dentro del psoas mayor entre sus fascículos anteriores (cuerpos vertebrales) y posteriores (apófisis transversas). Inerva la pared abdominal baja, la ingle y la cara anterior y medial del muslo, y aporta a cadera y rodilla.",
        variante: "Las divisiones posteriores dan el femoral y el cutáneo femoral lateral; las anteriores, el obturador. El obturador accesorio (L3–L4) es inconstante.",
        diagrama: "lumbar",
        secciones: [
          {
            titulo: "Trayecto de las ramas respecto al psoas",
            html: `
            <ul>
              <li><b>Emergen por el borde lateral del psoas:</b> iliohipogástrico, ilioinguinal, cutáneo femoral lateral y femoral.</li>
              <li><b>Por la cara anterior:</b> genitofemoral (perfora el músculo).</li>
              <li><b>Por el borde medial:</b> obturador (y el obturador accesorio cuando existe).</li>
            </ul>
            <div class="perla"><b>Fascia ilíaca.</b> Femoral y cutáneo femoral lateral viajan <b>bajo la fascia ilíaca</b>; el obturador va medial, hacia la pelvis, y no está en ese compartimento. Por eso el "3 en 1" y la fascia ilíaca infrainguinal rara vez bloquean el obturador.</div>
            <div class="perla"><b>Bloqueo del plexo lumbar (compartimento del psoas).</b> Es profundo, no compresible y puede difundir al espacio epidural: en anticoagulación se maneja como neuroaxial.</div>`
          },
          {
            titulo: "Femoral en el pliegue inguinal",
            html: `
            <p>De lateral a medial: <b>nervio – arteria – vena</b> (NAV; en inglés NAVEL, de lateral a medial). El nervio está lateral a la arteria, profundo a la fascia ilíaca y superficial al iliopsoas. Bajo el ligamento inguinal se divide en una parte anterior (sartorio y cutáneos anteriores del muslo) y una posterior (cuádriceps y safeno, que es su parte más medial).</p>`
          }
        ],
        nervios: [
          { id: "iliohipogastrico", nombre: "Iliohipogástrico", raices: ["L1"], raicesMenor: ["T12"], tipo: "rama", origen: "Borde lateral del psoas",
            motor: "Oblicuo interno y transverso del abdomen", sensitivo: "Piel suprapúbica y glútea lateral", articular: "—",
            clinica: "Se bloquea junto al ilioinguinal medial a la EIAS o en el TAP/cuadrado lumbar (tema 8).", eco: "Entre oblicuo interno y transverso, medial y craneal a la EIAS." },
          { id: "ilioinguinal", nombre: "Ilioinguinal", raices: ["L1"], tipo: "rama", origen: "Borde lateral del psoas",
            motor: "Oblicuo interno y transverso (con el iliohipogástrico)", sensitivo: "Cara medial y superior del muslo, raíz del pene y escroto o monte de Venus y labio mayor", articular: "—",
            clinica: "Atraviesa el canal inguinal: herniorrafia, incisión de Pfannenstiel.", eco: "En el mismo plano que el iliohipogástrico, más cerca de la EIAS." },
          { id: "genitofemoral", nombre: "Genitofemoral", raices: ["L1", "L2"], tipo: "rama", origen: "Cara anterior del psoas",
            motor: "Cremáster (rama genital)", sensitivo: "Escroto o labio mayor (rama genital); piel bajo el ligamento inguinal (rama femoral)", articular: "—",
            clinica: "Explica el dolor residual en herniorrafia con bloqueo II-IH: la rama genital va dentro del cordón espermático.", eco: "Rama genital dentro del cordón espermático en el canal inguinal." },
          { id: "cutaneo-femoral-lateral", nombre: "Cutáneo femoral lateral", raices: ["L2", "L3"], tipo: "rama", origen: "Borde lateral del psoas (div. posterior)",
            motor: "—", sensitivo: "Cara anterolateral del muslo hasta la rodilla", articular: "—",
            clinica: "Pasa cerca de la EIAS, bajo o a través del ligamento inguinal (meralgia parestésica). Cubre la incisión lateral de cadera y la zona donante de injerto de piel (tema 4).", eco: "Entre sartorio y tensor de la fascia lata, inferomedial a la EIAS, en un desdoblamiento de la fascia lata." },
          { id: "femoral", nombre: "Femoral", raices: ["L2", "L3", "L4"], tipo: "rama", origen: "Borde lateral del psoas (div. posterior)",
            motor: "Ilíaco, pectíneo, sartorio y cuádriceps", sensitivo: "Cara anterior del muslo; por el safeno, cara medial de la pierna hasta el borde medial del pie", articular: "Cadera anterior y rodilla anterior",
            clinica: "Su bloqueo debilita el cuádriceps (riesgo de caídas): por eso en rodilla se prefieren bloqueos más distales que respetan la motora (tema 5).", eco: "Triangular e hiperecoico, lateral a la arteria femoral, bajo la fascia ilíaca y sobre el iliopsoas." },
          { id: "safeno", nombre: "Safeno", raices: ["L3", "L4"], tipo: "rama", origen: "Rama terminal sensitiva del femoral",
            motor: "—", sensitivo: "Cara medial de la rodilla (rama infrarrotuliana), pierna y borde medial del pie", articular: "Rodilla anteromedial",
            clinica: "Es el único territorio bajo la rodilla que no es del ciático: se suma al poplíteo para cirugía de tobillo (tema 6).", eco: "En el canal aductor, junto a la arteria femoral superficial, bajo el sartorio." },
          { id: "obturador", nombre: "Obturador", raices: ["L2", "L3", "L4"], tipo: "rama", origen: "Borde medial del psoas (div. anterior)",
            motor: "Aductores largo, corto y mayor, grácil, obturador externo", sensitivo: "Cara medial del muslo (territorio inconstante)", articular: "Cadera anteromedial; rodilla posteromedial (rama posterior)",
            clinica: "Su bloqueo evita el reflejo aductor en la resección transuretral de tumores de la pared lateral de la vejiga. Aporta a cadera y rodilla.", eco: "Rama anterior entre aductor largo y corto; rama posterior entre aductor corto y mayor." },
          { id: "obturador-accesorio", nombre: "Obturador accesorio", raices: ["L3", "L4"], tipo: "rama", origen: "Borde medial del psoas (inconstante)",
            motor: "Pectíneo (variable)", sensitivo: "—", articular: "Cápsula anterior de la cadera",
            clinica: "Junto con el femoral y el obturador forma la diana del PENG sobre la eminencia iliopúbica (Short 2018; Girón-Arango 2018).", eco: "No se ve; se alcanza en el plano entre el psoas y la rama púbica." }
        ],
        preguntas: [
          { q: "¿Por qué la fascia ilíaca infrainguinal no bloquea de forma fiable el obturador?", a: "Porque el obturador sale por el borde medial del psoas hacia la pelvis y no corre bajo la fascia ilíaca a nivel inguinal. Femoral y cutáneo femoral lateral sí lo hacen." },
          { q: "¿Qué nervios inervan la cápsula anterior de la cadera?", a: "El femoral, el obturador y el obturador accesorio. Es la base anatómica del bloqueo PENG." },
          { q: "¿Por qué el bloqueo del plexo lumbar se maneja como neuroaxial en el anticoagulado?", a: "Es profundo, no compresible, está junto a grandes vasos y puede difundir al espacio epidural." }
        ],
        refs: ["hadzic", "short", "giron", "asra5"]
      },

      /* ----------------------------- SACRO ----------------------------- */
      {
        id: "sacro",
        nombre: "Plexo sacro",
        segmentos: ["L4", "L5", "S1", "S2", "S3", "S4"],
        rango: "L4–S4",
        resumen: "El tronco lumbosacro (L4–L5) se une a las ramas ventrales S1–S4 sobre la cara anterior del piriforme. Sus ramas salen de la pelvis por el agujero ciático mayor, casi todas por debajo del piriforme. Inerva glúteo, cara posterior del muslo, todo lo que está bajo la rodilla salvo el territorio del safeno, y periné.",
        variante: "El ciático puede dividirse antes de salir de la pelvis; a veces el peroneo común atraviesa el piriforme.",
        diagrama: "sacro",
        secciones: [
          {
            titulo: "Arriba o abajo del piriforme",
            html: `
            <ul>
              <li><b>Suprapiriforme:</b> glúteo superior con los vasos glúteos superiores.</li>
              <li><b>Infrapiriforme:</b> ciático, cutáneo femoral posterior, glúteo inferior, pudendo, n. al obturador interno y n. al cuadrado femoral.</li>
            </ul>
            <p>El <b>pudendo</b> sale bajo el piriforme, rodea la espina isquiática y el ligamento sacroespinoso y vuelve a entrar al periné por el agujero ciático menor, hacia el canal de Alcock.</p>`
          },
          {
            titulo: "El ciático, de la pelvis al hueco poplíteo",
            html: `
            <p>Son dos nervios desde el origen, <b>tibial</b> (divisiones anteriores L4–S3) y <b>peroneo común</b> (divisiones posteriores L4–S2), envueltos en una <b>vaina paraneural común</b>. Desciende entre el trocánter mayor y la tuberosidad isquiática, bajo el glúteo mayor; en el muslo, entre la cabeza larga del bíceps y los semitendinoso y semimembranoso. Se separa en el vértice del hueco poplíteo, a una altura variable.</p>
            <div class="perla"><b>Cutáneo femoral posterior.</b> Cubre la cara posterior del muslo y el hueco poplíteo. Se bloquea con los abordajes proximales (parasacro, glúteo) pero se separa del ciático en el abordaje subglúteo distal y en el poplíteo: cuenta para el torniquete de muslo.</div>`
          }
        ],
        nervios: [
          { id: "gluteo-superior", nombre: "Glúteo superior", raices: ["L4", "L5", "S1"], tipo: "rama", origen: "Div. posteriores, suprapiriforme",
            motor: "Glúteo medio, glúteo menor y tensor de la fascia lata", sensitivo: "—", articular: "Cadera posterosuperior",
            clinica: "Su lesión da marcha de Trendelenburg.", eco: "Entre glúteo medio y menor, con la arteria glútea superior." },
          { id: "gluteo-inferior", nombre: "Glúteo inferior", raices: ["L5", "S1", "S2"], tipo: "rama", origen: "Div. posteriores, infrapiriforme",
            motor: "Glúteo mayor", sensitivo: "—", articular: "—", clinica: "—", eco: "—" },
          { id: "cutaneo-femoral-posterior", nombre: "Cutáneo femoral posterior", raices: ["S1", "S2", "S3"], tipo: "rama", origen: "Infrapiriforme",
            motor: "—", sensitivo: "Cara posterior del muslo, hueco poplíteo y parte del periné", articular: "—",
            clinica: "Va con el ciático en el glúteo, pero se separa más abajo: no se bloquea en el subglúteo distal ni en el poplíteo.", eco: "Pequeño, medial y superficial al ciático bajo el glúteo mayor." },
          { id: "ciatico", nombre: "Ciático", raices: ["L4", "L5", "S1", "S2", "S3"], tipo: "rama", origen: "Infrapiriforme",
            motor: "Isquiotibiales y parte del aductor mayor; a través de sus ramas, todos los músculos bajo la rodilla", sensitivo: "Pierna y pie, excepto el territorio medial del safeno", articular: "Cadera posterior, rodilla posterior, tobillo y pie",
            clinica: "En el pie y el tobillo el ciático lo hace casi todo: solo falta el safeno (tema 6). En rodilla aporta la cápsula posterior (iPACK, tema 5).", eco: "Subglúteo: oval aplanado e hiperecoico entre trocánter y tuberosidad, bajo la fascia subglútea." },
          { id: "tibial", nombre: "Tibial", raices: ["L4", "L5", "S1", "S2", "S3"], tipo: "rama", origen: "Rama del ciático (div. anteriores)",
            motor: "Gastrocnemio, sóleo, poplíteo, tibial posterior, flexores de los dedos, intrínsecos plantares", sensitivo: "Planta del pie y talón (calcáneos y plantares medial y lateral)", articular: "Rodilla posterior, tobillo, pie",
            clinica: "En el tobillo pasa posterior al maléolo medial, junto a la arteria tibial posterior (túnel tarsiano).", eco: "En el hueco poplíteo: medial, superficial a la vena y arteria poplíteas, y de mayor tamaño que el peroneo." },
          { id: "peroneo-comun", nombre: "Peroneo común", raices: ["L4", "L5", "S1", "S2"], tipo: "rama", origen: "Rama del ciático (div. posteriores)",
            motor: "Cabeza corta del bíceps; por sus ramas, peroneos (superficial) y compartimento anterior (profundo)", sensitivo: "Cara lateral de la pierna, dorso del pie (superficial) y primer espacio interdigital (profundo)", articular: "Rodilla lateral, tobillo",
            clinica: "Rodea el cuello del peroné, donde es vulnerable a compresión por posición o yesos (pie caído).", eco: "En el hueco poplíteo: lateral al tibial, siguiendo el tendón del bíceps femoral." },
          { id: "sural", nombre: "Sural", raices: ["S1", "S2"], tipo: "rama", origen: "Ramas cutáneas del tibial y del peroneo",
            motor: "—", sensitivo: "Borde lateral del tobillo y del pie", articular: "—",
            clinica: "Se bloquea en el tobillo entre el maléolo lateral y el tendón de Aquiles, junto a la vena safena menor.", eco: "Junto a la vena safena menor." },
          { id: "pudendo", nombre: "Pudendo", raices: ["S2", "S3", "S4"], tipo: "rama", origen: "Div. anteriores, infrapiriforme",
            motor: "Músculos del periné, esfínter anal externo y esfínter uretral externo", sensitivo: "Periné, genitales externos y conducto anal", articular: "—",
            clinica: "Bloqueo pudendo en obstetricia y cirugía perineal y anal.", eco: "Junto a la arteria pudenda interna, entre los ligamentos sacroespinoso y sacrotuberoso." },
          { id: "cuadrado-femoral", nombre: "N. al cuadrado femoral", raices: ["L4", "L5", "S1"], tipo: "rama", origen: "Infrapiriforme",
            motor: "Cuadrado femoral y gémino inferior", sensitivo: "—", articular: "Cápsula posterior de la cadera", clinica: "Parte de la inervación posterior de la cadera que el PENG no cubre.", eco: "—" }
        ],
        preguntas: [
          { q: "¿Por qué el bloqueo poplíteo no cubre el torniquete de muslo?", a: "Porque la cara posterior del muslo depende del cutáneo femoral posterior, que se separa del ciático en la región glútea, y el resto del muslo del femoral, obturador y cutáneo femoral lateral." },
          { q: "¿Dónde conviene inyectar en el ciático poplíteo?", a: "Bajo la vaina paraneural común, entre tibial y peroneo, cerca de su división. La instalación es más rápida que con inyección fuera de la vaina." },
          { q: "¿Qué falta al bloquear el ciático para cirugía de tobillo?", a: "El safeno (rama del femoral), que inerva la cara medial del tobillo y el borde medial del pie." }
        ],
        refs: ["hadzic", "brown"]
      }
    ],

    /* ========================= ARTICULACIONES ========================= */
    articulaciones: {
      titulo: "Inervación de las articulaciones",
      intro: "Ley de Hilton: los nervios que mueven una articulación también la inervan. Esta tabla une la anatomía con los temas quirúrgicos de la rotación.",
      filas: [
        { art: "Hombro", nervios: "Supraescapular (mayor parte de la cápsula posterosuperior), axilar, subescapulares, pectoral lateral. Piel: supraclaviculares (C4) y axilar.", bloqueos: "Interescalénico, tronco superior, supraclavicular, supraescapular + axilar", tema: 2 },
        { art: "Codo", nervios: "Musculocutáneo, radial, mediano y cubital", bloqueos: "Supraclavicular, infraclavicular, axilar", tema: 3 },
        { art: "Muñeca y mano", nervios: "Mediano (interóseo anterior), radial (interóseo posterior) y cubital", bloqueos: "Infraclavicular, axilar, bloqueos distales", tema: 3 },
        { art: "Cadera", nervios: "Anterior: femoral, obturador y obturador accesorio. Posterior: n. al cuadrado femoral, glúteo superior, ramas del ciático. Piel lateral: cutáneo femoral lateral.", bloqueos: "PENG, fascia ilíaca suprainguinal, cutáneo femoral lateral, cuadrado lumbar", tema: 4 },
        { art: "Rodilla", nervios: "Anterior: ramas del femoral y safeno (infrarrotuliana). Medial y posterior: obturador (rama posterior). Posterior: tibial y peroneo común (plexo poplíteo).", bloqueos: "Canal aductor / triángulo femoral, iPACK, geniculares", tema: 5 },
        { art: "Tobillo y pie", nervios: "Tibial, peroneo profundo, peroneo superficial y sural (ciático); cara medial: safeno (femoral)", bloqueos: "Ciático poplíteo + safeno, bloqueo de tobillo", tema: 6 }
      ],
      refs: ["hadzic", "short"]
    },

    /* ======================= ECOGRAFÍA (ESQUEMAS) ======================
       Coordenadas en un lienzo de 320 x 220 (x: izquierda→derecha,
       y: superficie→profundidad). Tipos: musculo, fascia, hueso, pleura,
       arteria, vena, nervio, vaina, difusion, aguja. "rot" en grados.     */
    eco: {
      interescalenico: {
        prof: 3,
        titulo: "Interescalénico · transversal a nivel de C6",
        sonda: "Lineal de alta frecuencia, transversal sobre el borde lateral del ECM a nivel del cricoides",
        ejes: ["Medial", "Lateral"],
        claves: "Las raíces C5, C6 y C7 se ven como círculos hipoecoicos alineados entre escaleno anterior y medio: el 'semáforo'. El frénico está sobre la cara anterior del escaleno anterior. Aguja en plano de lateral a medial, atravesando el escaleno medio (cuidado con el escapular dorsal y el torácico largo).",
        el: [
          { t: "musculo", e: [118, 34, 100, 17], rot: -4, n: "ECM" },
          { t: "musculo", e: [138, 112, 24, 36], rot: 8, n: "Escaleno anterior" },
          { t: "musculo", e: [236, 116, 46, 44], rot: -8, n: "Escaleno medio" },
          { t: "fascia", p: [[100, 152], [190, 140], [305, 160]] },
          { t: "hueso", p: [[118, 182], [168, 160], [222, 184]] },
          { t: "arteria", c: [40, 100, 19] },
          { t: "vena", e: [80, 74, 19, 10] },
          { t: "nervio", c: [182, 80, 8], s: "hipo" },
          { t: "nervio", c: [184, 102, 9], s: "hipo" },
          { t: "nervio", c: [186, 126, 9], s: "hipo" },
          { t: "nervio", c: [122, 74, 3.5], s: "hipo" },
          { t: "nervio", c: [246, 96, 3], s: "hipo" },
          { t: "difusion", e: [196, 98, 14, 26] },
          { t: "aguja", a: [320, 52, 200, 96] }
        ],
        etiquetas: [
          { txt: "ECM", x: 150, y: 16, a: [150, 30] },
          { txt: "Carótida", x: 8, y: 140, a: [36, 116], an: "start" },
          { txt: "Yugular int.", x: 8, y: 60, a: [70, 68], an: "start" },
          { txt: "Frénico", x: 104, y: 94, a: [120, 74], an: "end" },
          { txt: "C5", x: 162, y: 78, a: [174, 80], an: "end" },
          { txt: "C6", x: 162, y: 104, a: [175, 103], an: "end" },
          { txt: "C7", x: 164, y: 132, a: [177, 128], an: "end" },
          { txt: "Esc. anterior", x: 96, y: 170, a: [130, 140] },
          { txt: "Esc. medio", x: 252, y: 178, a: [244, 150] },
          { txt: "Escapular dorsal / torácico largo", x: 314, y: 44, a: [246, 94], an: "end" },
          { txt: "Apófisis transversa", x: 168, y: 212, a: [168, 168] }
        ]
      },

      supraclavicular: {
        prof: 4,
        titulo: "Supraclavicular · fosa supraclavicular",
        sonda: "Lineal, paralela a la clavícula en la fosa supraclavicular, inclinada hacia caudal",
        ejes: ["Medial", "Lateral"],
        claves: "Arteria subclavia sobre la primera costilla; el plexo es un 'racimo de uvas' lateral y superficial a la arteria. La pleura está lateral y más profunda que la costilla. El 'corner pocket' (ángulo arteria-costilla) contiene el tronco inferior: depositar allí mejora la cobertura cubital.",
        el: [
          { t: "musculo", e: [250, 150, 70, 16], rot: 6, n: "Escaleno medio" },
          { t: "fascia", p: [[0, 22], [160, 30], [320, 20]] },
          { t: "hueso", p: [[66, 150], [126, 132], [176, 152]] },
          { t: "pleura", p: [[176, 160], [240, 170], [320, 176]] },
          { t: "arteria", c: [118, 106, 21] },
          { t: "nervio", c: [158, 80, 7], s: "hipo" },
          { t: "nervio", c: [174, 74, 7], s: "hipo" },
          { t: "nervio", c: [190, 82, 7], s: "hipo" },
          { t: "nervio", c: [166, 95, 7], s: "hipo" },
          { t: "nervio", c: [182, 98, 7], s: "hipo" },
          { t: "nervio", c: [172, 112, 6.5], s: "hipo" },
          { t: "nervio", c: [152, 122, 6], s: "hipo" },
          { t: "difusion", e: [148, 128, 12, 8] },
          { t: "aguja", a: [320, 58, 156, 124] }
        ],
        etiquetas: [
          { txt: "A. subclavia", x: 30, y: 80, a: [102, 96] },
          { txt: "Plexo ('racimo de uvas')", x: 196, y: 52, a: [180, 72] },
          { txt: "Corner pocket", x: 70, y: 186, a: [146, 130] },
          { txt: "1.ª costilla", x: 18, y: 160, a: [80, 146] },
          { txt: "Pleura", x: 270, y: 200, a: [262, 172] }
        ]
      },

      infraclavicular: {
        prof: 5,
        titulo: "Infraclavicular · parasagital, medial a la coracoides",
        sonda: "Lineal, en el plano parasagital justo medial a la apófisis coracoides",
        ejes: ["Cefálico", "Caudal"],
        claves: "Bajo los dos pectorales, los tres cordones rodean la arteria axilar: lateral (cefálico), posterior (profundo) y medial (entre arteria y vena). Una inyección única posterior a la arteria (a las 6) suele difundir a los tres.",
        el: [
          { t: "musculo", e: [160, 34, 175, 22], n: "Pectoral mayor" },
          { t: "musculo", e: [165, 84, 150, 20], rot: 3, n: "Pectoral menor" },
          { t: "fascia", p: [[0, 60], [160, 62], [320, 58]] },
          { t: "fascia", p: [[10, 106], [160, 108], [320, 104]] },
          { t: "pleura", p: [[200, 206], [260, 204], [320, 208]] },
          { t: "arteria", c: [158, 142, 17] },
          { t: "vena", e: [204, 152, 16, 11] },
          { t: "nervio", c: [134, 124, 8], s: "panal" },
          { t: "nervio", c: [158, 172, 8], s: "panal" },
          { t: "nervio", c: [182, 150, 6.5], s: "panal" },
          { t: "difusion", e: [146, 166, 13, 7] },
          { t: "aguja", a: [0, 36, 148, 164] }
        ],
        etiquetas: [
          { txt: "Pectoral mayor", x: 250, y: 18, a: [240, 30] },
          { txt: "Pectoral menor", x: 250, y: 74, a: [240, 84] },
          { txt: "A. axilar", x: 92, y: 196, a: [148, 150] },
          { txt: "V. axilar", x: 250, y: 140, a: [214, 150] },
          { txt: "Lateral", x: 74, y: 124, a: [126, 124] },
          { txt: "Posterior", x: 196, y: 196, a: [164, 176] },
          { txt: "Medial", x: 238, y: 168, a: [186, 154] }
        ]
      },

      axilar: {
        prof: 3,
        titulo: "Axilar · transversal en el pliegue axilar",
        sonda: "Lineal, perpendicular al eje del húmero en el pliegue axilar, brazo abducido 90°",
        ejes: ["Lateral (húmero)", "Medial"],
        claves: "Mediano a las 10–12, cubital a la 1–3 y radial a las 5–6 sobre el tendón conjunto. El musculocutáneo está aparte, entre bíceps y coracobraquial. Venas compresibles: presionar poco para no perderlas y evitar punción vascular.",
        el: [
          { t: "musculo", e: [64, 40, 66, 20], rot: 4, n: "Bíceps" },
          { t: "musculo", e: [82, 96, 48, 24], rot: 6, n: "Coracobraquial" },
          { t: "fascia", p: [[120, 140], [190, 126], [290, 136]] },
          { t: "hueso", p: [[0, 178], [50, 156], [104, 178]] },
          { t: "arteria", c: [176, 96, 12] },
          { t: "vena", e: [216, 80, 12, 8] },
          { t: "vena", e: [210, 116, 10, 6] },
          { t: "nervio", e: [96, 68, 11, 5], s: "panal" },
          { t: "nervio", c: [160, 78, 7], s: "panal" },
          { t: "nervio", c: [198, 92, 6.5], s: "panal" },
          { t: "nervio", c: [174, 118, 6.5], s: "panal" },
          { t: "difusion", e: [166, 122, 12, 6] },
          { t: "aguja", a: [0, 108, 164, 122] }
        ],
        etiquetas: [
          { txt: "Bíceps", x: 20, y: 16, a: [50, 32] },
          { txt: "Coracobraquial", x: 14, y: 140, a: [62, 110] },
          { txt: "Musculocutáneo", x: 100, y: 22, a: [98, 64] },
          { txt: "Mediano", x: 138, y: 50, a: [158, 72] },
          { txt: "Cubital", x: 236, y: 56, a: [202, 88] },
          { txt: "A. axilar", x: 236, y: 104, a: [188, 98] },
          { txt: "Radial", x: 176, y: 162, a: [176, 124] },
          { txt: "Tendón conjunto", x: 304, y: 156, a: [262, 134] },
          { txt: "Húmero", x: 14, y: 194, a: [50, 164] }
        ]
      },

      cervical: {
        prof: 3,
        titulo: "Plexo cervical · transversal a nivel de C4",
        sonda: "Lineal, transversal en la mitad del borde posterior del ECM",
        ejes: ["Medial", "Lateral"],
        claves: "Las ramas superficiales aparecen como pequeños puntos hipoecoicos bajo el borde posterior del ECM, entre la lámina de revestimiento y la fascia prevertebral: ese es el plano del bloqueo intermedio. Profundo a la fascia prevertebral están escalenos, elevador de la escápula y las raíces: no se avanza la aguja hasta allí.",
        el: [
          { t: "musculo", e: [116, 40, 92, 17], rot: 4, n: "ECM" },
          { t: "musculo", e: [176, 122, 34, 26], n: "Escaleno medio" },
          { t: "musculo", e: [258, 112, 48, 30], rot: -6, n: "Elevador escápula" },
          { t: "fascia", p: [[0, 18], [160, 20], [320, 16]] },
          { t: "fascia", p: [[110, 94], [210, 86], [320, 82]] },
          { t: "hueso", p: [[132, 182], [172, 168], [214, 184]] },
          { t: "arteria", c: [40, 104, 18] },
          { t: "vena", e: [78, 82, 16, 9] },
          { t: "nervio", c: [210, 64, 3.5], s: "hipo" },
          { t: "nervio", c: [219, 59, 3.5], s: "hipo" },
          { t: "nervio", c: [214, 71, 3.5], s: "hipo" },
          { t: "difusion", e: [214, 68, 16, 8] },
          { t: "aguja", a: [320, 34, 220, 66] }
        ],
        etiquetas: [
          { txt: "ECM", x: 112, y: 12, a: [112, 34] },
          { txt: "Ramas superficiales", x: 180, y: 34, a: [212, 58] },
          { txt: "Fascia prevertebral", x: 310, y: 100, a: [276, 84] },
          { txt: "Carótida", x: 12, y: 146, a: [34, 120] },
          { txt: "Escaleno medio", x: 116, y: 156, a: [170, 132] },
          { txt: "Elevador escápula", x: 304, y: 162, a: [258, 138] },
          { txt: "Apófisis transversa", x: 172, y: 210, a: [172, 174] }
        ]
      },

      lumbar: {
        prof: 9,
        titulo: "Plexo lumbar · vista en trébol (Shamrock)",
        sonda: "Curva, transversal en el flanco por encima de la cresta ilíaca, a nivel de L4",
        ejes: ["Anterior", "Posterior"],
        claves: "La apófisis transversa es el 'tallo' y tres músculos son las 'hojas': psoas (anterior), cuadrado lumbar (en la punta de la transversa) y erector de la columna (posterior). El plexo está en el tercio posterior del psoas, cerca de la transversa. Es profundo (6–8 cm) y vascularizado.",
        el: [
          { t: "musculo", e: [70, 26, 80, 7], rot: 14, n: "Oblicuos" },
          { t: "musculo", e: [76, 44, 76, 6], rot: 14, n: "" },
          { t: "musculo", e: [146, 128, 44, 40], n: "Psoas" },
          { t: "musculo", e: [222, 96, 38, 20], rot: -14, n: "Cuadrado lumbar" },
          { t: "musculo", e: [282, 154, 38, 40], n: "Erector" },
          { t: "hueso", p: [[86, 206], [140, 172], [196, 200]] },
          { t: "hueso", p: [[188, 178], [204, 152], [222, 132]] },
          { t: "nervio", e: [182, 142, 9, 6], s: "panal" },
          { t: "difusion", e: [180, 140, 13, 9] },
          { t: "aguja", a: [320, 66, 186, 138] }
        ],
        etiquetas: [
          { txt: "Psoas", x: 90, y: 112, a: [128, 120] },
          { txt: "Cuadrado lumbar", x: 196, y: 58, a: [220, 90] },
          { txt: "Erector", x: 312, y: 104, a: [284, 128] },
          { txt: "Plexo lumbar", x: 120, y: 160, a: [174, 146] },
          { txt: "Cuerpo vertebral", x: 16, y: 196, a: [112, 188] },
          { txt: "A. transversa", x: 240, y: 190, a: [210, 148] }
        ]
      },

      subgluteo: {
        prof: 6,
        titulo: "Ciático subglúteo · transversal",
        sonda: "Curva, transversal entre el trocánter mayor y la tuberosidad isquiática",
        ejes: ["Lateral (trocánter)", "Medial (tuberosidad)"],
        claves: "El ciático es un óvalo aplanado e hiperecoico bajo la fascia subglútea, entre dos referencias óseas. El cutáneo femoral posterior puede verse aparte, medial y superficial: en este nivel ya puede quedar fuera del bloqueo.",
        el: [
          { t: "musculo", e: [160, 42, 168, 30], n: "Glúteo mayor" },
          { t: "musculo", e: [160, 138, 92, 22], n: "Cuadrado femoral" },
          { t: "fascia", p: [[0, 76], [160, 86], [320, 74]] },
          { t: "hueso", p: [[0, 122], [40, 100], [84, 126]] },
          { t: "hueso", p: [[244, 128], [282, 106], [320, 120]] },
          { t: "nervio", e: [164, 98, 23, 8], s: "panal" },
          { t: "nervio", c: [208, 86, 3.5], s: "hipo" },
          { t: "difusion", e: [150, 98, 12, 7] },
          { t: "aguja", a: [0, 56, 146, 96] }
        ],
        etiquetas: [
          { txt: "Glúteo mayor", x: 230, y: 18, a: [220, 36] },
          { txt: "Ciático", x: 166, y: 128, a: [166, 104] },
          { txt: "Cut. femoral posterior", x: 214, y: 66, a: [208, 82] },
          { txt: "Trocánter mayor", x: 8, y: 160, a: [36, 108] },
          { txt: "Tuberosidad isquiática", x: 200, y: 176, a: [282, 114] }
        ]
      },

      popliteo: {
        prof: 4,
        titulo: "Ciático poplíteo · transversal sobre el pliegue",
        sonda: "Lineal, transversal en el hueco poplíteo, deslizando en sentido proximal hasta la división",
        ejes: ["Medial", "Lateral"],
        claves: "El tibial (medial, mayor) y el peroneo común (lateral) están superficiales a la vena y arteria poplíteas, dentro de una vaina paraneural común. Se inyecta entre ambos, bajo esa vaina.",
        el: [
          { t: "musculo", e: [62, 92, 56, 40], n: "Semimembranoso" },
          { t: "musculo", e: [262, 86, 56, 40], n: "Bíceps femoral" },
          { t: "hueso", p: [[92, 210], [162, 194], [232, 210]] },
          { t: "arteria", c: [160, 172, 12] },
          { t: "vena", e: [160, 148, 11, 7] },
          { t: "vaina", e: [174, 104, 38, 20] },
          { t: "nervio", e: [156, 108, 15, 10], s: "panal" },
          { t: "nervio", e: [194, 100, 11, 8], s: "panal" },
          { t: "difusion", e: [176, 106, 7, 10] },
          { t: "aguja", a: [320, 52, 178, 104] }
        ],
        etiquetas: [
          { txt: "Tibial", x: 104, y: 148, a: [146, 114] },
          { txt: "Peroneo común", x: 304, y: 140, a: [202, 104] },
          { txt: "Vaina paraneural", x: 104, y: 60, a: [150, 92] },
          { txt: "V. poplítea", x: 236, y: 164, a: [170, 150] },
          { txt: "A. poplítea", x: 236, y: 188, a: [172, 174] },
          { txt: "Fémur", x: 104, y: 210, a: [130, 200] }
        ]
      }
    },

    /* Esquemas de ecografía que aparecen en cada plexo */
    ecoPorPlexo: {
      cervical: ["cervical"],
      lumbar: ["lumbar"],
      sacro: ["subgluteo", "popliteo"]
    }
  },

  /* ------------------------------------------------------------------
     FICHAS DE BLOQUEOS (desde el Tema 2)
     Plantilla de cada ficha:
     { id, nombre, region, tema, indicaciones, cobertura, sonoanatomia,
       eco: "<id de esquema en anatomia.eco>", tecnica, volumen, complicaciones,
       evidencia, perlas, refs: [] }
     ------------------------------------------------------------------ */
  bloqueos: [],

  /* ------------------------------------------------------------------ */
  farmacos: [
    { id: "lido", nombre: "Lidocaína", presentaciones: [1, 2], maxSin: 4.5, maxCon: 7, topeSin: 300, topeCon: 500,
      inicio: "Rápido (10–20 min)", duracion: "2–3 h; 3–5 h con epinefrina" },
    { id: "bupi", nombre: "Bupivacaína", presentaciones: [0.25, 0.5, 0.75], maxSin: 2.5, maxCon: 3, topeSin: 175, topeCon: 225,
      inicio: "Lento (20–30 min)", duracion: "8–16 h" },
    { id: "levo", nombre: "Levobupivacaína", presentaciones: [0.25, 0.5, 0.75], maxSin: 2.5, maxCon: 2.5, topeSin: 150, topeCon: 150,
      inicio: "Lento (15–30 min)", duracion: "8–16 h" },
    { id: "ropi", nombre: "Ropivacaína", presentaciones: [0.2, 0.5, 0.75, 1], maxSin: 3, maxCon: 3, topeSin: 225, topeCon: 225,
      inicio: "Intermedio (15–25 min)", duracion: "6–12 h" }
  ],
  notaFarmacos: "Dosis máximas orientativas para bloqueo periférico en adulto, tomadas de la ficha técnica y textos de referencia. No son un umbral seguro: la absorción depende del sitio (intercostal > caudal > epidural > plexo braquial > ciático/femoral > subcutáneo), y cardiopatía, hepatopatía, extremos de edad y embarazo bajan el margen. La epinefrina no cambia el máximo de ropivacaína ni de levobupivacaína.",
  adyuvantes: [
    { nombre: "Epinefrina", dosis: "1:200.000 (5 mcg/mL) o 1:400.000 (2,5 mcg/mL)", nota: "Marcador de inyección intravascular y reduce el pico plasmático. Evitar en territorios de circulación terminal y con cautela en cardiópatas." },
    { nombre: "Dexametasona", dosis: "Perineural 4 mg o IV 0,1–0,2 mg/kg", nota: "Prolonga la analgesia; la vía IV logra un efecto similar. Uso perineural fuera de ficha técnica: preferir presentación sin conservantes." },
    { nombre: "Dexmedetomidina", dosis: "Perineural 0,5–1 mcg/kg", nota: "Prolonga el bloqueo; puede causar sedación, bradicardia e hipotensión. Fuera de ficha técnica." }
  ],

  /* ------------------------------------------------------------------ */
  last: {
    signos: [
      "SNC: sabor metálico, parestesia perioral, tinnitus, agitación, confusión → convulsiones → depresión del SNC",
      "Cardiovascular: hipertensión y taquicardia iniciales → bradicardia, arritmias ventriculares, hipotensión, asistolia",
      "Puede presentarse solo con signos cardiovasculares, sobre todo con bupivacaína o bajo anestesia general",
      "La aparición tardía (>15 min, o tras infusiones continuas) es frecuente: no descartar por el tiempo"
    ],
    pasos: [
      { t: "Detener la inyección y pedir ayuda", d: "Pedir el kit de LAST con la emulsión lipídica al 20 %. Considerar alertar al equipo de circulación extracorpórea." },
      { t: "Vía aérea", d: "Ventilar con O₂ al 100 %; evitar hiperventilación. Dispositivo avanzado si es necesario." },
      { t: "Controlar convulsiones", d: "Benzodiacepinas de primera línea. Evitar dosis altas de propofol, sobre todo si hay inestabilidad hemodinámica." },
      { t: "Emulsión lipídica al 20 %", d: "Dosis según el peso (ver cálculo). Administrar temprano ante toxicidad grave, sin esperar al paro." },
      { t: "Si hay paro cardíaco", d: "RCP de alta calidad. Epinefrina en dosis reducidas (≤1 mcg/kg). Evitar vasopresina, bloqueadores de canales de calcio, betabloqueadores y otros anestésicos locales. La reanimación puede ser prolongada." },
      { t: "Monitorizar", d: "Al menos 4–6 h tras un evento cardiovascular; al menos 2 h si los síntomas fueron solo neurológicos y breves." }
    ],
    prevencion: [
      "Usar la menor dosis eficaz y ecografía (reduce el riesgo de LAST)",
      "Inyección fraccionada de 3–5 mL con aspiración, observando 15–30 s entre fracciones",
      "Marcador intravascular: epinefrina 10–15 mcg; positivo si la FC sube ≥10 lpm o la PAS ≥15 mmHg",
      "Más riesgo: extremos de edad, baja masa muscular, cardiopatía (FEVI baja, trastornos de conducción), hepatopatía, embarazo, acidosis",
      "El propofol no es un sustituto de la emulsión lipídica (su concentración lipídica es insuficiente)"
    ]
  },

  /* ------------------------------------------------------------------ */
  anticoag: {
    nota: "Intervalos para bloqueo neuroaxial y bloqueos profundos o no compresibles (plexo lumbar, paravertebral, cervical profundo, infraclavicular). En bloqueos superficiales y compresibles la decisión es individual según el sitio y el riesgo de sangrado. Los intervalos de anticoagulantes orales directos (DOAC) incorporan los cambios de la 5.ª edición de ASRA (2025); el resto corresponde a los intervalos establecidos en ediciones previas: contrastar con el texto completo y el protocolo institucional.",
    grupos: [
      { grupo: "Antiagregantes", filas: [
        { f: "Ácido acetilsalicílico, AINE (monoterapia)", antes: "Sin restricción", despues: "Sin restricción", nota: "El riesgo aumenta si se combinan con otros antitrombóticos." },
        { f: "Clopidogrel", antes: "5–7 días", despues: "Tras retirar el catéter; si hay dosis de carga, ≥6 h después", nota: "El catéter puede mantenerse 1–2 días si no se da dosis de carga." },
        { f: "Prasugrel", antes: "7–10 días", despues: "≥6 h tras retirar el catéter", nota: "No mantener catéteres." },
        { f: "Ticagrelor", antes: "5–7 días", despues: "≥6 h tras retirar el catéter", nota: "No mantener catéteres." },
        { f: "Cilostazol", antes: "2 días", despues: "≥6 h tras retirar el catéter", nota: "" }
      ]},
      { grupo: "Heparinas", filas: [
        { f: "HNF SC dosis baja (5.000 UI c/8–12 h)", antes: "4–6 h", despues: "≥1 h tras punción o retiro", nota: "Recuento de plaquetas si lleva >4 días." },
        { f: "HNF SC dosis alta (7.500–10.000 UI c/12 h, ≤20.000 UI/día)", antes: "12 h + TTPa normal", despues: "≥1 h", nota: "" },
        { f: "HNF SC terapéutica (>20.000 UI/día)", antes: "24 h + TTPa normal", despues: "≥1 h", nota: "" },
        { f: "HNF IV", antes: "4–6 h + TTPa normal", despues: "≥1 h", nota: "" },
        { f: "HBPM dosis baja (enoxaparina 40 mg/día)", antes: "12 h", despues: "≥12 h tras la punción; ≥4 h tras retirar el catéter", nota: "El catéter se retira ≥12 h tras la última dosis." },
        { f: "HBPM dosis alta (enoxaparina 1 mg/kg c/12 h o 1,5 mg/kg/día)", antes: "24 h", despues: "≥24 h tras la punción; ≥4 h tras retirar el catéter", nota: "Con ClCr <30 mL/min se acumula: prolongar intervalos." }
      ]},
      { grupo: "Anticoagulantes orales", filas: [
        { f: "Warfarina", antes: "5 días + INR normal", despues: "Según el plan quirúrgico", nota: "Retirar el catéter con INR <1,5." },
        { f: "Apixabán dosis alta (≥5 mg c/12 h, o 2,5 mg c/12 h por peso/función renal)", antes: "72 h", despues: "≥6 h tras la punción o el retiro", nota: "5.ª ed.", nueva: true },
        { f: "Apixabán dosis baja (2,5 mg c/12 h profiláctico)", antes: "36 h", despues: "≥6 h", nota: "5.ª ed.", nueva: true },
        { f: "Rivaroxabán dosis alta (15–20 mg/día)", antes: "72 h", despues: "≥6 h", nota: "5.ª ed.", nueva: true },
        { f: "Rivaroxabán dosis baja (10 mg/día)", antes: "24 h (30 h si ClCr 15–30 mL/min)", despues: "≥6 h", nota: "5.ª ed.", nueva: true },
        { f: "Edoxabán (30–60 mg/día)", antes: "72 h", despues: "≥6 h", nota: "Sin recomendación para dosis baja.", nueva: true },
        { f: "Dabigatrán", antes: "ClCr ≥80: 72 h · 50–79: 96 h · 30–49: 120 h · <30: no recomendado", despues: "≥6 h", nota: "" },
        { f: "Niveles de anti-Xa (apixabán, rivaroxabán, edoxabán)", antes: "Nivel <30 ng/mL o anti-Xa ≤0,1 UI/mL permite el bloqueo", despues: "—", nota: "Alternativa guiada por laboratorio de la 5.ª ed.", nueva: true }
      ]}
    ]
  },

  /* ------------------------------------------------------------------ */
  referencias: {
    hadzic: "Carrera A, Lopez AM, Sala-Blanch X, Kapur E, Hasanbegovic I, Hadzic A. Functional regional anesthesia anatomy. En: Hadzic A, ed. Hadzic's Textbook of Regional Anesthesia and Acute Pain Management. 2nd ed. McGraw-Hill; 2017: cap. 3.",
    brown: "Brown DL, ed. Atlas of Regional Anesthesia. 6th ed. Philadelphia: Elsevier; 2020.",
    gadsden: "Gadsden JC, Choi JJ, Lin E, Robinson A. Opening injection pressure consistently detects needle–nerve contact during ultrasound-guided interscalene brachial plexus block. Anesthesiology. 2014;120:1246–53.",
    urmey: "Urmey WF, Talts KH, Sharrock NE. One hundred percent incidence of hemidiaphragmatic paresis associated with interscalene brachial plexus anesthesia as diagnosed by ultrasonography. Anesth Analg. 1991;72:498–503.",
    short: "Short AJ, Barnett JJG, Gofeld M, et al. Anatomic study of innervation of the anterior hip capsule: implication for image-guided intervention. Reg Anesth Pain Med. 2018;43:186–92.",
    giron: "Girón-Arango L, Peng PWH, Chin KJ, Brull R, Perlas A. Pericapsular nerve group (PENG) block for hip fracture. Reg Anesth Pain Med. 2018;43:859–63.",
    last2020: "Neal JM, Neal EJ, Weinberg GL. American Society of Regional Anesthesia and Pain Medicine Local Anesthetic Systemic Toxicity checklist: 2020 version. Reg Anesth Pain Med. 2021;46:81–2.",
    asra5: "Kopp SL, Vandermeulen E, McBane RD, Perlas A, Leffert L, Horlocker T. Regional anesthesia in the patient receiving antithrombotic or thrombolytic therapy: American Society of Regional Anesthesia and Pain Medicine evidence-based guidelines (fifth edition). Reg Anesth Pain Med. 2025. doi:10.1136/rapm-2024-105766.",
    esaic: "Kietaibl S, Ferrandis R, Godier A, et al. Regional anaesthesia in patients on antithrombotic drugs: joint ESAIC/ESRA guidelines. Eur J Anaesthesiol. 2022;39:100–32."
  }
};
