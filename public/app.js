const moods = [
  {
    id: 'neutral', emoji: '🧠', label: 'Neutro profesional', desc: 'Consultor calmado',
    cuePrefix: 'Di esto con calma y control',
    toneModifier: 'Habla pausado, voz firme, cero prisa. Proyecta criterio.',
    phrasing: { warmth: 'neutral', punch: 'medio', flirt: false }
  },
  {
    id: 'friendly', emoji: '😄', label: 'Amable / sonrisa', desc: 'Cercano y ligero',
    cuePrefix: 'Di esto sonriendo',
    toneModifier: 'Sonríe de verdad al hablar. Ritmo medio y energía agradable.',
    phrasing: { warmth: 'alta', punch: 'medio', flirt: false }
  },
  {
    id: 'dominant', emoji: '🦅', label: 'Dominante elegante', desc: 'Más liderazgo',
    cuePrefix: 'Habla con autoridad elegante',
    toneModifier: 'Menos palabras, más certeza. Pausas cortas y mirada al frente.',
    phrasing: { warmth: 'baja', punch: 'alto', flirt: false }
  },
  {
    id: 'playful', emoji: '😏', label: 'Juguetón', desc: 'Más chispa',
    cuePrefix: 'Hora de coquetear (ligero, profesional)',
    toneModifier: 'Tono con picardía suave. Nunca invadir. Usa humor micro.',
    phrasing: { warmth: 'alta', punch: 'medio', flirt: true }
  },
  {
    id: 'urgent', emoji: '⚠️', label: 'Urgencia controlada', desc: 'Apretar sin sonar agresivo',
    cuePrefix: 'Marca urgencia sin presión',
    toneModifier: 'Sube la energía 15%. Enfatiza costo de no actuar.',
    phrasing: { warmth: 'media', punch: 'alto', flirt: false }
  },
  {
    id: 'rescue', emoji: '🛟', label: 'Rescate', desc: 'Cliente tenso / defensivo',
    cuePrefix: 'Baja tensión y recupera control',
    toneModifier: 'Valida, corta elegante, redirige. Ritmo más lento.',
    phrasing: { warmth: 'alta', punch: 'bajo', flirt: false }
  }
];

const stages = [
  {
    id: 'apertura',
    title: 'Apertura',
    goal: 'Entrar sin parecer vendedor y ganar 5–10 segundos de atención.',
    checklist: [
      'Pide permiso rápido (“una consulta rápida”)',
      'No menciones precio ni “vendo bots”',
      'Usa contexto de negocio / oportunidad',
      'Haz una micro-pregunta fácil de responder'
    ],
    objections: [
      { title: '“Estoy ocupado”', answer: '“Perfecto, solo una pregunta de 10 segundos y te dejo.”' },
      { title: '“¿De qué se trata?”', answer: '“Es una observación rápida sobre captación por WhatsApp en clínicas.”' }
    ],
    arguments: {
      anzuelo: [
        {
          title: 'Apertura consultiva clásica',
          intensity: 'segura',
          script: 'Hola, una consulta rápida.\nEstoy analizando algo interesante en clínicas de la zona.\nLas que responden WhatsApp más rápido están capturando más pacientes.\n¿A ustedes les escriben mucho por WhatsApp?',
          note: 'Ideal para primera llamada. Suena a análisis, no a venta.'
        },
        {
          title: 'Apertura con oportunidad',
          intensity: 'oportunidad',
          script: 'Hola, te llamo por una oportunidad de mejora comercial muy puntual.\nEstoy viendo un patrón en negocios que atienden por WhatsApp.\n¿Quién ve contigo el tema de pacientes y atención?',
          note: 'Buena si quieres mencionar “negocio” desde el segundo 1.'
        }
      ],
      datos: [
        {
          title: 'Dato + micro pregunta',
          intensity: 'autoridad',
          script: 'Hoy la mayoría de pacientes consulta por WhatsApp antes de decidir.\nLa pregunta clave es: ¿se les responde rápido o se enfrían algunos chats?',
          note: 'Úsalo si percibes perfil más racional.'
        }
      ],
      relato: [
        {
          title: 'Mini historia de enganche',
          intensity: 'conexión',
          script: 'Hablé con una clínica hace poco y pensaban que atendían bien WhatsApp.\nCuando revisaron, vieron huecos de 10–15 minutos.\nAhí se dieron cuenta del dinero que se escapaba.\n¿Les pasa algo parecido a ratos?',
          note: 'Más potente con tono amable / juguetón.'
        }
      ]
    },
    coach: {
      cue: 'Di esto sonriendo 😄',
      microScript: '“No te quito tiempo, es una observación rápida sobre cómo algunas clínicas están captando más pacientes por WhatsApp.”',
      toneNote: 'Tu objetivo NO es vender aquí; solo ganar curiosidad y permiso para seguir.',
      advanceSignals: ['Te responde una pregunta', 'No corta la llamada', 'Te dice quién ve el tema'],
      dontDo: ['No digas “vendo bots”', 'No des precio', 'No hables más de 20 segundos seguidos']
    }
  },
  {
    id: 'autoridad',
    title: 'Identificación de autoridad',
    goal: 'Descubrir si hablas con el decisor o con alguien que puede derivarte.',
    checklist: [
      'Pregunta por función, no por jerarquía (“quién gestiona...”)',
      'Si no es el jefe, no vendas',
      'Pide derivación con motivo breve y claro',
      'Mantén tono operativo'
    ],
    objections: [
      { title: 'Gatekeeper defensivo', answer: '“Solo necesito hacerle una consulta de 20 segundos sobre WhatsApp y captación.”' },
      { title: '“Él no está”', answer: '“Perfecto, ¿en qué horario lo ubico mejor?”' }
    ],
    arguments: {
      anzuelo: [
        {
          title: 'Filtro de autoridad neutro',
          intensity: 'base',
          script: '¿Estoy hablando con la persona que gestiona el tema de pacientes o marketing?',
          note: 'Neutro y elegante; evita “¿eres el dueño?”.'
        },
        {
          title: 'Filtro orientado a oportunidad',
          intensity: 'negocio',
          script: '¿Quién ve ahí las decisiones de atención por WhatsApp y oportunidades de pacientes nuevos?',
          note: 'Conecta con negocio desde el filtro mismo.'
        }
      ],
      redireccion: [
        {
          title: 'Si preguntan “para qué”',
          intensity: 'control',
          script: 'Porque estoy detectando un patrón de pérdida de pacientes por tiempos de respuesta en WhatsApp, y quería validar si aplica con ustedes.',
          note: 'No suena comercial directo.'
        }
      ]
    },
    coach: {
      cue: 'Habla con precisión, sin ansiedad 🎯',
      microScript: '“No es una venta rápida; es una validación sobre atención por WhatsApp para ver si tiene sentido hablar con la persona correcta.”',
      toneNote: 'Tu meta aquí es acceso, no persuasión profunda.',
      advanceSignals: ['Te pasan con alguien', 'Te dan nombre/horario', 'Te dicen “yo veo eso”'],
      dontDo: ['No insistas con el gatekeeper', 'No expliques todo el producto', 'No suenes desesperado']
    }
  },
  {
    id: 'oportunidad',
    title: 'Marco de oportunidad',
    goal: 'Posicionar la llamada como análisis de negocio y crecimiento, no como venta de software.',
    checklist: [
      'Habla de captación, agenda o pacientes',
      'Nombra un patrón de mercado',
      'Mantén una observación concreta',
      'Prepara la transición al diagnóstico'
    ],
    objections: [
      { title: '“Ya tenemos WhatsApp”', answer: '“Perfecto, justo no hablo de tenerlo, sino de cómo se monetiza mejor.”' },
      { title: '“Eso ya lo vemos”', answer: '“Buenísimo. Entonces te será fácil validar si esta oportunidad aplica o no.”' }
    ],
    arguments: {
      datos: [
        {
          title: 'Marco racional de oportunidad',
          intensity: 'consultivo',
          script: 'Estoy analizando cómo varios negocios están dejando dinero en la mesa por tiempos de respuesta en WhatsApp.\nNo por falta de demanda, sino por velocidad y seguimiento.',
          note: 'Excelente para perfiles administradores / dueños analíticos.'
        }
      ],
      relato: [
        {
          title: 'Marco con historia breve',
          intensity: 'persuasivo',
          script: 'Una clínica con buen flujo pensaba que su problema era publicidad.\nAl revisar, el cuello de botella real era WhatsApp: llegaban chats, pero se enfriaban.\nAhí apareció una oportunidad de ingresos sin gastar más en anuncios.',
          note: 'Te posiciona como consultor que descubre “fugas”.'
        }
      ],
      personalizacion: [
        {
          title: 'Marco personalizado (héroe ligero)',
          intensity: 'alto valor',
          script: 'Antes de llamar revisé rápido cómo están atendiendo y por eso te marco: creo que aquí hay una mejora comercial muy concreta que sí valdría explorar.',
          note: 'Úsalo si quieres elevar percepción de esfuerzo percibido.'
        }
      ]
    },
    coach: {
      cue: 'Véndele visión, no herramienta 🚀',
      microScript: '“No te hablo de software; te hablo de una fuga de pacientes que muchas clínicas no ven.”',
      toneNote: 'Sube ligeramente la energía. Debes sonar como alguien que detecta oportunidades.',
      advanceSignals: ['Te pregunta “¿cómo así?”', 'Te deja explicar más', 'Reconoce que a veces se enfrían chats'],
      dontDo: ['No te vayas a demo técnica', 'No nombres 20 funciones', 'No uses jerga innecesaria']
    }
  },
  {
    id: 'diagnostico',
    title: 'Diagnóstico',
    goal: 'Hacer que el cliente describa su realidad y se autoevalúe.',
    checklist: [
      'Haz preguntas cortas (abiertas + cerradas)',
      'Escucha y rescata 2–3 ideas clave',
      'Confirma con parafraseo',
      'Busca dolor: demora, seguimiento, horario, pérdida'
    ],
    objections: [
      { title: '“Depende”', answer: '“Totalmente. ¿En horas de mayor carga qué suele pasar?”' },
      { title: '“Respondemos bien”', answer: '“Buenísimo. ¿En consulta también mantienen ese tiempo?”' }
    ],
    arguments: {
      sondeo: [
        {
          title: 'Pregunta base',
          intensity: 'simple',
          script: '¿A ustedes les escriben bastante por WhatsApp durante el día?',
          note: 'Abre el diagnóstico sin fricción.'
        },
        {
          title: 'Pregunta de cuello de botella',
          intensity: 'quirúrgica',
          script: 'Cuando están atendiendo y entra un mensaje preguntando precio o cita, ¿quién responde y cuánto suele tardar?',
          note: 'Te revela proceso + tiempo + responsable.'
        }
      ],
      rescate: [
        {
          title: 'Rescate de datos (eco consultivo)',
          intensity: 'escucha activa',
          script: 'Entonces, si entendí bien: llegan mensajes, a veces se responden tarde cuando están ocupados, y algunos pacientes ya no contestan después. ¿Va por ahí?',
          note: 'Muestra dominio y genera confianza.'
        }
      ]
    },
    coach: {
      cue: 'Escucha más de lo que hablas 👂',
      microScript: '“Déjame entender tu flujo actual antes de decirte cualquier cosa.”',
      toneNote: 'Modo consultor total. Cada pregunta debe tener propósito.',
      advanceSignals: ['Te describe proceso real', 'Admite demoras', 'Menciona mensajes perdidos o horarios difíciles'],
      dontDo: ['No interrumpir demasiado pronto', 'No asumir sin confirmar', 'No convertir preguntas en interrogatorio']
    }
  },
  {
    id: 'revelacion',
    title: 'Revelación del problema invisible',
    goal: 'Hacer visible el costo de no responder rápido / no dar seguimiento.',
    checklist: [
      'Conecta lo que dijo con una fuga de pacientes',
      'Usa relato corto o comparación',
      'Haz silencio después del clímax',
      'Prepara la solución como consecuencia lógica'
    ],
    objections: [
      { title: '“No creo que se pierdan tantos”', answer: '“No siempre se nota, porque el paciente no avisa que se fue; simplemente escribe a otra clínica.”' },
      { title: '“Eso es normal”', answer: '“Exacto, y justo por ser normal se vuelve invisible y caro.”' }
    ],
    arguments: {
      relato: [
        {
          title: 'Problema invisible (historia)',
          intensity: 'alta persuasión',
          script: 'Lo que pasa en muchas clínicas es esto: sienten que el flujo está “normal”, pero cuando revisan chats descubren huecos de 10–15 minutos.\nEn ese tiempo, el paciente ya escribió a otra opción.\nNo se ve como pérdida… pero sí lo es.',
          note: 'Este bloque hace que el cliente pida solución.'
        }
      ],
      datos: [
        {
          title: 'Reencuadre con costo de oportunidad',
          intensity: 'racional',
          script: 'El problema no es solo “demorar”, sino perder conversaciones con intención de compra.\nCada chat frío es una oportunidad comercial que ya te costó conseguir.',
          note: 'Muy bueno para dueños enfocados en dinero.'
        }
      ]
    },
    coach: {
      cue: 'Aquí apretas un poco (sin atacar) 🪓',
      microScript: '“El paciente casi nunca dice ‘me fui con otra clínica’; simplemente desaparece.”',
      toneNote: 'Puedes usar urgencia controlada si el cliente está muy racional y frío.',
      advanceSignals: ['Dice “sí, puede pasar”', 'Pregunta cómo se evita', 'Te pide ejemplo o solución'],
      dontDo: ['No culpes al cliente', 'No dramatices de más', 'No hables largo después del clímax (deja silencio)']
    }
  },
  {
    id: 'solucion',
    title: 'Propuesta / Solución',
    goal: 'Presentar el sistema como la respuesta natural al problema detectado.',
    checklist: [
      'Habla de “sistema”, no “bot” al inicio',
      'Conecta funciones con dolor real del cliente',
      'Mantén explicación simple: responde, filtra, agenda, sigue',
      'Usa frases de implementación (se instala directo...)'
    ],
    objections: [
      { title: '“¿Es complicado?”', answer: '“No, se instala directo sobre su flujo de WhatsApp y se configura con sus respuestas.”' },
      { title: '“No quiero algo robótico”', answer: '“Justamente se personaliza con su tono y solo automatiza lo repetitivo.”' }
    ],
    arguments: {
      solucion: [
        {
          title: 'Presentación simple de sistema',
          intensity: 'clara',
          script: 'Lo que estoy instalando es un sistema inteligente para WhatsApp que responde al instante las consultas iniciales, filtra intención, y ayuda a que no se enfríen los chats cuando el equipo está ocupado.',
          note: 'Descripción base; muy funcional.'
        },
        {
          title: 'Solución conectada al diagnóstico',
          intensity: 'personalizada',
          script: 'Como me comentas que cuando están en consulta se acumulan mensajes, aquí encaja perfecto: el sistema cubre esa primera respuesta y mantiene vivo al paciente hasta que el equipo retoma.',
          note: 'Haz referencia textual a lo que dijo el cliente.'
        }
      ],
      personalizacion: [
        {
          title: 'Héroe personal (versión ligera)',
          intensity: 'cierre de valor',
          script: 'Si te interesa, yo te ayudo a dejarlo adaptado a tu forma de atender, no con mensajes genéricos. La idea es que suene a ustedes y que resuelva lo que hoy se les escapa.',
          note: 'Sube percepción de acompañamiento.'
        }
      ]
    },
    coach: {
      cue: 'Ahora sí: muestra solución con claridad 🧩',
      microScript: '“No reemplaza al equipo; cubre huecos de respuesta y seguimiento para que no se enfríen pacientes.”',
      toneNote: 'Tu enfoque es alivio + control. Cero tecnicismo innecesario.',
      advanceSignals: ['Pregunta cómo funciona', 'Pregunta si usa su WhatsApp', 'Pregunta tiempos de instalación'],
      dontDo: ['No te pongas demasiado técnico', 'No listar funciones sin contexto', 'No hablar de precio aún si no pidió']
    }
  },
  {
    id: 'cierre',
    title: 'Cierre / Siguiente paso',
    goal: 'Conseguir micro compromiso: demo, prueba o llamada corta de seguimiento.',
    checklist: [
      'Pide una acción simple, no un compromiso gigante',
      'Precio después de valor y encaje',
      'Si pregunta precio, reencuadra a retorno',
      'Cierra con opción concreta (ver demo / agendar)'
    ],
    objections: [
      { title: '“¿Cuánto cuesta?”', answer: '“Te lo digo: son 180 dólares, y normalmente se recupera con 1 paciente captado.”' },
      { title: '“Déjame pensarlo”', answer: '“Perfecto. ¿Te parece si te muestro 10 minutos cómo quedaría en su caso y lo evalúas con base real?”' }
    ],
    arguments: {
      cierre: [
        {
          title: 'Micro cierre a demo',
          intensity: 'seguro',
          script: '¿Te gustaría verlo funcionando con un ejemplo real de respuestas para tu clínica?\nEn 10 minutos ves si te suma o no.',
          note: 'Baja fricción. No exige compra inmediata.'
        },
        {
          title: 'Cierre con precio + retorno',
          intensity: 'precio',
          script: 'Cuesta 180 dólares.\nY te lo digo así de directo: si evita que se te vaya 1 paciente bueno por demora, normalmente ya se pagó solo.',
          note: 'Dilo después de haber creado contexto de pérdida.'
        }
      ],
      personalizacion: [
        {
          title: 'Cierre con esfuerzo percibido',
          intensity: 'héroe',
          script: 'Si quieres, te preparo una versión de ejemplo con tus tipos de consulta más comunes para que lo veas aterrizado, no en teoría.',
          note: 'Muy potente para cerrar siguiente paso.'
        }
      ],
      redireccion: [
        {
          title: 'Si se va al “no me interesa” final',
          intensity: 'recuperación',
          script: 'Totalmente válido. Antes de cortar, déjame dejarte una sola idea: el problema no es tener WhatsApp, es cuánto dinero se te enfría ahí. Si quieres, lo validamos 10 minutos y listo.',
          note: 'Último intento elegante.'
        }
      ]
    },
    coach: {
      cue: 'Cierra con seguridad, no con ansiedad 🤝',
      microScript: '“Mi objetivo ahora no es venderte por teléfono; es que veas si aplica o no en tu negocio.”',
      toneNote: 'Seguridad tranquila. El cierre fuerte suena simple, no desesperado.',
      advanceSignals: ['Acepta demo', 'Pide hora', 'Hace preguntas concretas de implementación'],
      dontDo: ['No perseguir si ya dijo no tres veces', 'No bajar precio sin necesidad', 'No cerrar sin siguiente paso claro']
    }
  }
];

const state = {
  currentMoodId: 'neutral',
  stageIndex: 0,
  currentTab: null
};

const els = {
  moodButtons: document.getElementById('moodButtons'),
  currentMoodPill: document.getElementById('currentMoodPill'),
  stageTitle: document.getElementById('stageTitle'),
  stageGoal: document.getElementById('stageGoal'),
  stageCounter: document.getElementById('stageCounter'),
  progressFill: document.getElementById('progressFill'),
  checklist: document.getElementById('checklist'),
  objectionsList: document.getElementById('objectionsList'),
  argumentTabs: document.getElementById('argumentTabs'),
  argumentCards: document.getElementById('argumentCards'),
  coachCue: document.getElementById('coachCue'),
  microScript: document.getElementById('microScript'),
  toneNote: document.getElementById('toneNote'),
  advanceSignals: document.getElementById('advanceSignals'),
  dontDo: document.getElementById('dontDo'),
  nextStageLabel: document.getElementById('nextStageLabel'),
  nextStageBtn: document.getElementById('nextStageBtn'),
  prevStageBtn: document.getElementById('prevStageBtn'),
  resetBtn: document.getElementById('resetBtn')
};

function getCurrentMood() {
  return moods.find(m => m.id === state.currentMoodId) || moods[0];
}

function getCurrentStage() {
  return stages[state.stageIndex];
}

function renderMoodButtons() {
  els.moodButtons.innerHTML = '';
  moods.forEach(mood => {
    const btn = document.createElement('button');
    btn.className = `mood-btn ${mood.id === state.currentMoodId ? 'active' : ''}`;
    btn.innerHTML = `
      <span class="emoji">${mood.emoji}</span>
      <span class="label">${mood.label}</span>
      <span class="desc">${mood.desc}</span>
    `;
    btn.addEventListener('click', () => {
      state.currentMoodId = mood.id;
      renderMoodButtons();
      renderStage();
      flash(els.currentMoodPill);
    });
    els.moodButtons.appendChild(btn);
  });
}

function renderList(container, items) {
  container.innerHTML = '';
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    container.appendChild(li);
  });
}

function renderObjections(objections) {
  els.objectionsList.innerHTML = '';
  objections.forEach(o => {
    const div = document.createElement('div');
    div.className = 'obj-chip';
    div.innerHTML = `<div class="obj-title">${escapeHtml(o.title)}</div><div class="obj-answer">${escapeHtml(o.answer)}</div>`;
    els.objectionsList.appendChild(div);
  });
}

function renderTabs(stage) {
  const tabKeys = Object.keys(stage.arguments);
  if (!tabKeys.includes(state.currentTab)) state.currentTab = tabKeys[0];

  els.argumentTabs.innerHTML = '';
  tabKeys.forEach(tab => {
    const btn = document.createElement('button');
    btn.className = `tab-btn ${tab === state.currentTab ? 'active' : ''}`;
    btn.textContent = tabLabel(tab);
    btn.addEventListener('click', () => {
      state.currentTab = tab;
      renderTabs(stage);
      renderArgumentCards(stage);
    });
    els.argumentTabs.appendChild(btn);
  });
}

function buildMoodAdjustedScript(text, mood) {
  let prefix = '';
  if (mood.id === 'friendly') prefix = '🙂 ';
  if (mood.id === 'dominant') prefix = '🎯 ';
  if (mood.id === 'playful') prefix = '😉 ';
  if (mood.id === 'urgent') prefix = '⚡ ';
  if (mood.id === 'rescue') prefix = '🫱🏻‍🫲🏽 ';

  let adjusted = text;
  if (mood.id === 'playful') {
    adjusted = adjusted.replace('consulta rápida', 'consulta rapidita');
  }
  if (mood.id === 'dominant') {
    adjusted = adjusted.replace(/\n/g, '\n').replace('Estoy', 'Mira, estoy');
  }
  if (mood.id === 'rescue') {
    adjusted = adjusted.replace('Lo que pasa', 'Tranquilo, lo que suele pasar');
  }
  return `${prefix}${adjusted}`;
}

function renderArgumentCards(stage) {
  const mood = getCurrentMood();
  const cards = stage.arguments[state.currentTab] || [];
  els.argumentCards.innerHTML = '';

  cards.forEach((card, idx) => {
    const div = document.createElement('div');
    div.className = 'argument-card';
    const adjustedScript = buildMoodAdjustedScript(card.script, mood);

    div.innerHTML = `
      <div class="arg-top">
        <h4>${escapeHtml(card.title)}</h4>
        <span class="tag">${escapeHtml(card.intensity)}</span>
      </div>
      <div class="script-box">${escapeHtml(adjustedScript)}</div>
      <div class="arg-note">${escapeHtml(card.note || '')}</div>
      <div class="arg-actions">
        <button class="small-btn" data-copy="${idx}">Copiar guion</button>
        <button class="small-btn" data-coach="${idx}">Usar como micro-guion</button>
      </div>
    `;

    const [copyBtn, coachBtn] = div.querySelectorAll('.small-btn');
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(adjustedScript);
        copyBtn.textContent = '✅ Copiado';
        setTimeout(() => (copyBtn.textContent = 'Copiar guion'), 1200);
      } catch {
        copyBtn.textContent = 'No se pudo copiar';
        setTimeout(() => (copyBtn.textContent = 'Copiar guion'), 1200);
      }
    });
    coachBtn.addEventListener('click', () => {
      els.microScript.textContent = adjustedScript;
      flash(els.microScript.closest('.coach-block'));
    });

    els.argumentCards.appendChild(div);
  });
}

function renderCoach(stage, mood) {
  els.coachCue.textContent = `${mood.cuePrefix} · ${stage.coach.cue.replace(/^[^a-zA-ZÁÉÍÓÚáéíóú]+\s*/, '')}`;
  els.microScript.textContent = buildMoodAdjustedScript(stage.coach.microScript, mood);
  els.toneNote.textContent = `${stage.coach.toneNote} ${mood.toneModifier}`;
  renderList(els.advanceSignals, stage.coach.advanceSignals);
  renderList(els.dontDo, stage.coach.dontDo);
}

function renderStage() {
  const stage = getCurrentStage();
  const mood = getCurrentMood();

  els.currentMoodPill.textContent = `Mood: ${mood.label}`;
  els.stageTitle.textContent = stage.title;
  els.stageGoal.textContent = stage.goal;
  els.stageCounter.textContent = `${state.stageIndex + 1} / ${stages.length}`;
  els.progressFill.style.width = `${((state.stageIndex + 1) / stages.length) * 100}%`;

  renderList(els.checklist, stage.checklist);
  renderObjections(stage.objections);
  renderTabs(stage);
  renderArgumentCards(stage);
  renderCoach(stage, mood);

  const nextStage = stages[state.stageIndex + 1];
  els.nextStageLabel.textContent = nextStage ? nextStage.title : 'Fin del flujo';
  els.nextStageBtn.disabled = !nextStage;
  els.nextStageBtn.style.opacity = nextStage ? '1' : '.5';
  els.prevStageBtn.disabled = state.stageIndex === 0;
  els.prevStageBtn.style.opacity = state.stageIndex === 0 ? '.5' : '1';
}

function flash(el) {
  if (!el) return;
  el.classList.remove('flash');
  void el.offsetWidth;
  el.classList.add('flash');
}

function tabLabel(key) {
  const map = {
    anzuelo: 'Anzuelo',
    datos: 'Datos exactos',
    relato: 'Relato persuasivo',
    redireccion: 'Redirección',
    personalizacion: 'Personalización',
    sondeo: 'Sondeo',
    rescate: 'Rescate',
    solucion: 'Solución',
    cierre: 'Cierre'
  };
  return map[key] || key;
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

els.nextStageBtn.addEventListener('click', () => {
  if (state.stageIndex < stages.length - 1) {
    state.stageIndex += 1;
    state.currentTab = null;
    renderStage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

els.prevStageBtn.addEventListener('click', () => {
  if (state.stageIndex > 0) {
    state.stageIndex -= 1;
    state.currentTab = null;
    renderStage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

els.resetBtn.addEventListener('click', () => {
  state.stageIndex = 0;
  state.currentMoodId = 'neutral';
  state.currentTab = null;
  renderMoodButtons();
  renderStage();
});

renderMoodButtons();
renderStage();
