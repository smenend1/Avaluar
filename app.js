(() => {
  'use strict';

  const STORAGE_KEY = 'lomloe_pwa_multigroup_v1';
  const LANG_KEY = 'lomloe_pwa_lang_v1';
  const SCALE_VALUES = { NA: 0.5, AS: 1.5, AN: 2.45, AE: 3.5 };
  const SCALE_ORDER = ['NA', 'AS', 'AN', 'AE'];
  const DEFAULT_SCORE = 'NA';
  const CDN_URLS = [
    'https://cdn.tailwindcss.com',
    'https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'
  ];

  const i18n = {
    ca: {
      appTitle: 'Quadern LOMLOE',
      appSubtitle: 'Avaluació competencial amb grups, activitats i exportació editable.',
      install: 'Instal·lar',
      installHelpTitle: 'Instal·lació de la PWA',
      installHelp: 'Si el navegador no mostra la finestra automàtica, obre el menú del navegador i tria Afegeix a pantalla d’inici o Instal·la app. A iPhone/iPad cal usar Safari i el botó de compartir.',
      activeGroup: 'Grup actiu',
      menuGroups: 'Grups',
      menuStudents: 'Alumnat',
      menuActivities: 'Activitats',
      menuCalculation: 'Càlcul',
      menuEvaluation: 'Avaluació',
      menuExport: 'Exportar',
      menuMaintenance: 'Manteniment',
      summaryTitle: 'Resum',
      studentsShort: 'Alumnes',
      activitiesShort: 'Activitats',
      modeShort: 'Mode',
      weightShort: 'Pes',
      saved: 'Desat automàticament',
      groupsTitle: '1. Grups i matèries',
      groupsHelp: 'Crea un quadern per a cada grup, matèria o classe.',
      createGroupTitle: 'Crear grup',
      createGroupHelp: 'Exemple: 2n ESO A - Matemàtiques.',
      groupNamePlaceholder: 'Nom del grup',
      createGroup: 'Crear grup',
      renameGroupTitle: 'Canviar nom',
      renameGroupHelp: 'Modifica el nom del grup actual.',
      newGroupNamePlaceholder: 'Nou nom',
      renameGroup: 'Canviar nom',
      duplicateGroupTitle: 'Duplicar',
      duplicateGroupHelp: 'Copia alumnat, activitats, pesos i notes.',
      duplicateGroup: 'Duplicar grup actual',
      studentsTitle: '2. Alumnat',
      studentsHelp: 'Importa un CSV o afegeix alumnes manualment.',
      csvTitle: 'Importar CSV',
      csvHelp: 'Detecta columnes com Nom, Alumno, Student o Name.',
      loadCsv: 'Importar alumnat',
      manualStudentTitle: 'Afegir manualment',
      manualStudentHelp: 'Afegeix un alumne al grup actual.',
      studentNamePlaceholder: 'Nom i cognoms',
      studentListTitle: "Llistat d'alumnes",
      activitiesTitle: '3. Activitats',
      activitiesHelp: 'Crea tantes activitats com necessitis. Pots crear-ne 20 de cop si una matèria ho requereix.',
      addActivityTitle: 'Afegir activitat',
      addActivityHelp: 'Afegeix una activitat individual.',
      activityNamePlaceholder: 'Nom activitat',
      activityWeightPlaceholder: 'Pes %',
      addActivity: 'Afegir activitat',
      bulkActivityTitle: 'Crear diverses',
      bulkActivityHelp: 'Crea 5, 10, 20 o les que calgui.',
      bulkCreate: 'Crear activitats',
      activityTipTitle: 'Consell',
      activityTipHelp: 'Amb mitjana aritmètica totes les activitats compten igual. Amb ponderada, els pesos es poden prorratejar si no sumen 100%.',
      activityListTitle: "Llistat d'activitats",
      editActivityName: "Editar nom de l'activitat",
      calculationTitle: '4. Càlcul',
      calculationHelp: 'Tria com es calcula la nota final del grup actual.',
      weightedTitle: 'Mitjana ponderada amb pesos',
      weightedHelp: 'Cada activitat té un pes. Si no suma 100%, es prorrateja automàticament.',
      arithmeticTitle: 'Mitjana aritmètica simple',
      arithmeticHelp: "Totes les activitats compten igual. Els camps de pes s'amaguen.",
      lomloeScaleTitle: 'Escala LOMLOE utilitzada',
      thresholdHelp: 'Resultat final: AE si ≥ 3,00; AN si ≥ 2,00; AS si ≥ 1,10; NA si < 1,10.',
      evaluationTitle: '5. Avaluació',
      evaluationHelp: 'Selecciona NA, AS, AN o AE. La mitjana i el resultat final es recalculen al moment.',
      seeResults: 'Veure resultats',
      editActivitiesFast: 'Editar activitats',
      emptyTitle: 'Encara no hi ha prou dades',
      emptyHelp: 'Crea o importa alumnat i afegeix alguna activitat per començar a avaluar.',
      exportTitle: '6. Exportar',
      exportHelp: "Exporta un Excel editable semblant a l'app, amb desplegables i fórmules.",
      exportCurrentTitle: 'Exportar grup actual',
      exportCurrentHelp: 'Crea un full Excel del grup actual amb selectors NA/AS/AN/AE i fórmules dinàmiques.',
      exportCurrent: 'Exportar grup actual',
      exportAllTitle: 'Exportar tots els grups',
      exportAllHelp: 'Crea un llibre Excel amb un full per cada grup i un full de llegenda.',
      exportAll: 'Exportar tots els grups',
      sheetsNoteTitle: 'Nota sobre Google Sheets:',
      sheetsNote: "l'arxiu .xlsx es pot importar a Google Sheets. Les fórmules i desplegables simples solen conservar-se, però alguns estils avançats poden variar segons la conversió.",
      maintenanceTitle: '7. Manteniment',
      maintenanceHelp: 'Esborra dades amb confirmació per evitar conflictes entre grups.',
      deleteCurrentGroupTitle: 'Esborrar grup actual',
      deleteCurrentGroupHelp: 'Elimina només el grup seleccionat.',
      deleteCurrentGroup: 'Esborrar grup actual',
      resetAppTitle: "Reiniciar tota l'app",
      resetAppHelp: 'Elimina tots els grups, alumnat, activitats i notes.',
      resetApp: 'Reiniciar app',
      defaultGroupName: 'Grup inicial',
      weightedMode: 'Ponderada',
      arithmeticMode: 'Aritmètica',
      weightsOk: 'Els pesos sumen 100%.',
      weightsWarning: 'Els pesos sumen {total}%. El càlcul es prorrateja automàticament.',
      weightsEmpty: 'Sense activitats amb pes configurat.',
      tableStudent: 'Alumne/a',
      tableAverage: 'Mitjana',
      tableFinal: 'Final',
      delete: 'Eliminar',
      editWeight: 'Editar pes',
      noStudents: 'Encara no hi ha alumnes en aquest grup.',
      noActivities: 'Encara no hi ha activitats en aquest grup.',
      missingGroup: 'Escriu un nom de grup.',
      missingStudent: "Escriu el nom de l'alumne/a.",
      missingActivity: "Escriu el nom de l'activitat.",
      duplicateStudent: 'Aquest alumne/a ja existeix en el grup actual.',
      confirmDeleteStudent: 'Vols eliminar aquest alumne/a?',
      confirmDeleteActivity: 'Vols eliminar aquesta activitat?',
      confirmDeleteGroup: 'Segur que vols esborrar el grup actual?',
      confirmResetApp: "Segur que vols reiniciar tota l'app? S'esborraran tots els grups.",
      cantDeleteOnlyGroup: "No pots eliminar l'únic grup. Pots reiniciar-lo des de manteniment.",
      csvNoNames: 'No s’han pogut detectar noms al CSV.',
      csvImported: 'Alumnat importat correctament.',
      exportMissingLib: 'No s’han carregat les llibreries Excel. Obre la PWA amb connexió una vegada i torna-ho a provar.',
      exportNoData: 'No hi ha dades per exportar.',
      idHeader: 'ID',
      nameHeader: 'Nom',
      numericalMeanHeader: 'Mitjana numèrica',
      finalCriteriaHeader: 'Criteri final',
      weightsRow: 'Pesos',
      modeRow: 'Mode',
      legendSheet: 'Llegenda',
      activityAuto: 'Activitat',
      copySuffix: 'còpia'
    },
    es: {
      appTitle: 'Cuaderno LOMLOE',
      appSubtitle: 'Evaluación competencial con grupos, actividades y exportación editable.',
      install: 'Instalar',
      installHelpTitle: 'Instalación de la PWA',
      installHelp: 'Si el navegador no muestra la ventana automática, abre el menú del navegador y elige Añadir a pantalla de inicio o Instalar app. En iPhone/iPad hay que usar Safari y el botón de compartir.',
      activeGroup: 'Grupo activo',
      menuGroups: 'Grupos',
      menuStudents: 'Alumnado',
      menuActivities: 'Actividades',
      menuCalculation: 'Cálculo',
      menuEvaluation: 'Evaluación',
      menuExport: 'Exportar',
      menuMaintenance: 'Mantenimiento',
      summaryTitle: 'Resumen',
      studentsShort: 'Alumnos',
      activitiesShort: 'Actividades',
      modeShort: 'Modo',
      weightShort: 'Peso',
      saved: 'Guardado automáticamente',
      groupsTitle: '1. Grupos y materias',
      groupsHelp: 'Crea un cuaderno para cada grupo, materia o clase.',
      createGroupTitle: 'Crear grupo',
      createGroupHelp: 'Ejemplo: 2º ESO A - Matemáticas.',
      groupNamePlaceholder: 'Nombre del grupo',
      createGroup: 'Crear grupo',
      renameGroupTitle: 'Cambiar nombre',
      renameGroupHelp: 'Modifica el nombre del grupo actual.',
      newGroupNamePlaceholder: 'Nuevo nombre',
      renameGroup: 'Cambiar nombre',
      duplicateGroupTitle: 'Duplicar',
      duplicateGroupHelp: 'Copia alumnado, actividades, pesos y notas.',
      duplicateGroup: 'Duplicar grupo actual',
      studentsTitle: '2. Alumnado',
      studentsHelp: 'Importa un CSV o añade alumnos manualmente.',
      csvTitle: 'Importar CSV',
      csvHelp: 'Detecta columnas como Nom, Alumno, Student o Name.',
      loadCsv: 'Importar alumnado',
      manualStudentTitle: 'Añadir manualmente',
      manualStudentHelp: 'Añade un alumno al grupo actual.',
      studentNamePlaceholder: 'Nombre y apellidos',
      studentListTitle: 'Listado de alumnos',
      activitiesTitle: '3. Actividades',
      activitiesHelp: 'Crea tantas actividades como necesites. Puedes crear 20 de golpe si una materia lo requiere.',
      addActivityTitle: 'Añadir actividad',
      addActivityHelp: 'Añade una actividad individual.',
      activityNamePlaceholder: 'Nombre actividad',
      activityWeightPlaceholder: 'Peso %',
      addActivity: 'Añadir actividad',
      bulkActivityTitle: 'Crear varias',
      bulkActivityHelp: 'Crea 5, 10, 20 o las que necesites.',
      bulkCreate: 'Crear actividades',
      activityTipTitle: 'Consejo',
      activityTipHelp: 'Con media aritmética todas las actividades cuentan igual. Con ponderada, los pesos se prorratean si no suman 100%.',
      activityListTitle: 'Listado de actividades',
      editActivityName: 'Editar nombre de la actividad',
      calculationTitle: '4. Cálculo',
      calculationHelp: 'Elige cómo se calcula la nota final del grupo actual.',
      weightedTitle: 'Media ponderada con pesos',
      weightedHelp: 'Cada actividad tiene un peso. Si no suma 100%, se prorratea automáticamente.',
      arithmeticTitle: 'Media aritmética simple',
      arithmeticHelp: 'Todas las actividades cuentan igual. Los campos de peso se ocultan.',
      lomloeScaleTitle: 'Escala LOMLOE utilizada',
      thresholdHelp: 'Resultado final: AE si ≥ 3,00; AN si ≥ 2,00; AS si ≥ 1,10; NA si < 1,10.',
      evaluationTitle: '5. Evaluación',
      evaluationHelp: 'Selecciona NA, AS, AN o AE. La media y el resultado final se recalculan al momento.',
      seeResults: 'Ver resultados',
      editActivitiesFast: 'Editar actividades',
      emptyTitle: 'Todavía no hay suficientes datos',
      emptyHelp: 'Crea o importa alumnado y añade alguna actividad para empezar a evaluar.',
      exportTitle: '6. Exportar',
      exportHelp: 'Exporta un Excel editable parecido a la app, con desplegables y fórmulas.',
      exportCurrentTitle: 'Exportar grupo actual',
      exportCurrentHelp: 'Crea una hoja Excel del grupo actual con selectores NA/AS/AN/AE y fórmulas dinámicas.',
      exportCurrent: 'Exportar grupo actual',
      exportAllTitle: 'Exportar todos los grupos',
      exportAllHelp: 'Crea un libro Excel con una hoja por cada grupo y una hoja de leyenda.',
      exportAll: 'Exportar todos los grupos',
      sheetsNoteTitle: 'Nota sobre Google Sheets:',
      sheetsNote: 'el archivo .xlsx se puede importar a Google Sheets. Las fórmulas y desplegables simples suelen conservarse, pero algunos estilos avanzados pueden variar según la conversión.',
      maintenanceTitle: '7. Mantenimiento',
      maintenanceHelp: 'Borra datos con confirmación para evitar conflictos entre grupos.',
      deleteCurrentGroupTitle: 'Borrar grupo actual',
      deleteCurrentGroupHelp: 'Elimina solo el grupo seleccionado.',
      deleteCurrentGroup: 'Borrar grupo actual',
      resetAppTitle: 'Reiniciar toda la app',
      resetAppHelp: 'Elimina todos los grupos, alumnado, actividades y notas.',
      resetApp: 'Reiniciar app',
      defaultGroupName: 'Grupo inicial',
      weightedMode: 'Ponderada',
      arithmeticMode: 'Aritmética',
      weightsOk: 'Los pesos suman 100%.',
      weightsWarning: 'Los pesos suman {total}%. El cálculo se prorratea automáticamente.',
      weightsEmpty: 'Sin actividades con peso configurado.',
      tableStudent: 'Alumno/a',
      tableAverage: 'Media',
      tableFinal: 'Final',
      delete: 'Eliminar',
      editWeight: 'Editar peso',
      noStudents: 'Todavía no hay alumnos en este grupo.',
      noActivities: 'Todavía no hay actividades en este grupo.',
      missingGroup: 'Escribe un nombre de grupo.',
      missingStudent: 'Escribe el nombre del alumno/a.',
      missingActivity: 'Escribe el nombre de la actividad.',
      duplicateStudent: 'Este alumno/a ya existe en el grupo actual.',
      confirmDeleteStudent: '¿Quieres eliminar este alumno/a?',
      confirmDeleteActivity: '¿Quieres eliminar esta actividad?',
      confirmDeleteGroup: '¿Seguro que quieres borrar el grupo actual?',
      confirmResetApp: '¿Seguro que quieres reiniciar toda la app? Se borrarán todos los grupos.',
      cantDeleteOnlyGroup: 'No puedes eliminar el único grupo. Puedes reiniciarlo desde mantenimiento.',
      csvNoNames: 'No se han podido detectar nombres en el CSV.',
      csvImported: 'Alumnado importado correctamente.',
      exportMissingLib: 'No se han cargado las librerías Excel. Abre la PWA con conexión una vez y vuelve a intentarlo.',
      exportNoData: 'No hay datos para exportar.',
      idHeader: 'ID',
      nameHeader: 'Nombre',
      numericalMeanHeader: 'Media numérica',
      finalCriteriaHeader: 'Criterio final',
      weightsRow: 'Pesos',
      modeRow: 'Modo',
      legendSheet: 'Leyenda',
      activityAuto: 'Actividad',
      copySuffix: 'copia'
    }
  };

  let lang = localStorage.getItem(LANG_KEY) || 'ca';
  if (!i18n[lang]) lang = 'ca';

  let state = defaultState();
  let deferredInstallPrompt = null;
  let saveTimer = null;

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));

  const els = {
    groupSelect: $('#groupSelect'),
    langCa: $('#langCa'),
    langEs: $('#langEs'),
    installBtn: $('#installBtn'),
    metricStudents: $('#metricStudents'),
    metricActivities: $('#metricActivities'),
    metricMode: $('#metricMode'),
    metricWeight: $('#metricWeight'),
    saveStatus: $('#saveStatus'),
    newGroupName: $('#newGroupName'),
    createGroupBtn: $('#createGroupBtn'),
    renameGroupName: $('#renameGroupName'),
    renameGroupBtn: $('#renameGroupBtn'),
    duplicateGroupBtn: $('#duplicateGroupBtn'),
    csvInput: $('#csvInput'),
    loadCsvBtn: $('#loadCsvBtn'),
    manualStudentInput: $('#manualStudentInput'),
    addStudentBtn: $('#addStudentBtn'),
    studentList: $('#studentList'),
    activityNameInput: $('#activityNameInput'),
    activityWeightInput: $('#activityWeightInput'),
    addActivityBtn: $('#addActivityBtn'),
    bulkActivityCount: $('#bulkActivityCount'),
    bulkActivityBtn: $('#bulkActivityBtn'),
    activityList: $('#activityList'),
    weightAlert: $('#weightAlert'),
    emptyState: $('#emptyState'),
    tableWrap: $('#tableWrap'),
    matrixHead: $('#matrixHead'),
    matrixBody: $('#matrixBody'),
    scrollResultsBtn: $('#scrollResultsBtn'),
    editActivitiesFromEvalBtn: $('#editActivitiesFromEvalBtn'),
    exportCurrentBtn: $('#exportCurrentBtn'),
    exportAllBtn: $('#exportAllBtn'),
    deleteGroupBtn: $('#deleteGroupBtn'),
    resetAppBtn: $('#resetAppBtn')
  };

  function defaultState() {
    const groupId = uid('grp');
    return {
      activeGroupId: groupId,
      groups: [{ id: groupId, name: 'Grup inicial', mode: 'weighted', students: [], activities: [], scores: {} }]
    };
  }

  function t(key, vars = {}) {
    let value = (i18n[lang] && i18n[lang][key]) || i18n.ca[key] || key;
    Object.entries(vars).forEach(([k, v]) => { value = value.replaceAll(`{${k}}`, String(v)); });
    return value;
  }

  function uid(prefix) {
    const random = crypto && crypto.getRandomValues
      ? Array.from(crypto.getRandomValues(new Uint32Array(2))).map(n => n.toString(36)).join('')
      : Math.random().toString(36).slice(2);
    return `${prefix}_${Date.now().toString(36)}_${random}`;
  }

  function escapeHTML(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function escapeStr(value) {
    return String(value ?? '')
      .replaceAll('\\', '\\\\')
      .replaceAll("'", "\\'")
      .replaceAll('"', '\\"')
      .replaceAll('\n', '\\n')
      .replaceAll('\r', '\\r');
  }

  function safeBase64(value) {
    return btoa(unescape(encodeURIComponent(String(value)))).replaceAll('=', '').replaceAll('+', '-').replaceAll('/', '_');
  }

  function normalizeText(value) {
    return String(value ?? '').replace(/\s+/g, ' ').trim();
  }

  function cleanNumber(value, fallback = 0) {
    const n = Number(String(value ?? '').replace(',', '.'));
    return Number.isFinite(n) ? n : fallback;
  }

  function round2(n) {
    return Math.round((Number(n) + Number.EPSILON) * 100) / 100;
  }

  function activeGroup() {
    let group = state.groups.find(g => g.id === state.activeGroupId);
    if (!group) {
      group = state.groups[0] || defaultState().groups[0];
      state.activeGroupId = group.id;
    }
    return group;
  }

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        state.groups[0].name = t('defaultGroupName');
        return;
      }
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.groups) || !parsed.groups.length) return;
      state = parsed;
      sanitizeState();
    } catch (error) {
      console.error('Cannot load state:', error);
    }
  }

  function sanitizeState() {
    if (!Array.isArray(state.groups) || !state.groups.length) state = defaultState();

    state.groups = state.groups.map(group => ({
      id: String(group.id || uid('grp')),
      name: normalizeText(group.name) || t('defaultGroupName'),
      mode: group.mode === 'arithmetic' ? 'arithmetic' : 'weighted',
      students: Array.isArray(group.students) ? group.students : [],
      activities: Array.isArray(group.activities) ? group.activities : [],
      scores: group.scores && typeof group.scores === 'object' ? group.scores : {}
    }));

    state.groups.forEach(group => {
      group.students = group.students
        .filter(s => s && normalizeText(s.name))
        .map(s => ({ id: String(s.id || uid('stu')), name: normalizeText(s.name) }));

      group.activities = group.activities
        .filter(a => a && normalizeText(a.name))
        .map(a => ({ id: String(a.id || uid('act')), name: normalizeText(a.name), weight: Math.max(0, cleanNumber(a.weight, 1)) }));

      reconcileGroup(group);
    });

    if (!state.groups.some(g => g.id === state.activeGroupId)) state.activeGroupId = state.groups[0].id;
  }

  function reconcileGroup(group) {
    const studentIds = new Set(group.students.map(s => s.id));
    const activityIds = new Set(group.activities.map(a => a.id));

    group.students.forEach(student => {
      if (!group.scores[student.id] || typeof group.scores[student.id] !== 'object') group.scores[student.id] = {};
      group.activities.forEach(activity => {
        if (!SCALE_ORDER.includes(group.scores[student.id][activity.id])) group.scores[student.id][activity.id] = DEFAULT_SCORE;
      });
    });

    Object.keys(group.scores).forEach(studentId => {
      if (!studentIds.has(studentId)) {
        delete group.scores[studentId];
        return;
      }
      Object.keys(group.scores[studentId]).forEach(activityId => {
        if (!activityIds.has(activityId)) delete group.scores[studentId][activityId];
      });
    });
  }

  function saveState() {
    sanitizeState();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    clearTimeout(saveTimer);
    els.saveStatus.textContent = t('saved');
    saveTimer = setTimeout(() => { els.saveStatus.textContent = t('saved'); }, 600);
  }

  function saveAndRender() {
    saveState();
    render();
  }

  function setLanguage(nextLang) {
    if (!i18n[nextLang]) return;
    lang = nextLang;
    localStorage.setItem(LANG_KEY, lang);
    applyI18n();
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    document.title = t('appTitle');

    $$('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });

    els.langCa.className = lang === 'ca'
      ? 'rounded-xl bg-teal-700 px-3 py-2 text-sm font-black text-white transition'
      : 'rounded-xl px-3 py-2 text-sm font-black text-slate-600 transition hover:bg-slate-100';
    els.langEs.className = lang === 'es'
      ? 'rounded-xl bg-teal-700 px-3 py-2 text-sm font-black text-white transition'
      : 'rounded-xl px-3 py-2 text-sm font-black text-slate-600 transition hover:bg-slate-100';

    render();
  }

  function totalWeight(group) {
    return group.activities.reduce((sum, activity) => sum + Math.max(0, cleanNumber(activity.weight, 0)), 0);
  }

  function calculateAverage(group, studentId) {
    if (!group.activities.length) return 0;

    if (group.mode === 'arithmetic') {
      return group.activities.reduce((sum, activity) => {
        const literal = group.scores[studentId]?.[activity.id] || DEFAULT_SCORE;
        return sum + SCALE_VALUES[literal];
      }, 0) / group.activities.length;
    }

    const tw = totalWeight(group);
    if (tw <= 0) {
      return group.activities.reduce((sum, activity) => {
        const literal = group.scores[studentId]?.[activity.id] || DEFAULT_SCORE;
        return sum + SCALE_VALUES[literal];
      }, 0) / group.activities.length;
    }

    return group.activities.reduce((sum, activity) => {
      const literal = group.scores[studentId]?.[activity.id] || DEFAULT_SCORE;
      return sum + SCALE_VALUES[literal] * Math.max(0, cleanNumber(activity.weight, 0));
    }, 0) / tw;
  }

  function valueToLiteral(avg) {
    if (avg >= 3) return 'AE';
    if (avg >= 2) return 'AN';
    if (avg >= 1.1) return 'AS';
    return 'NA';
  }

  function badgeClass(literal) {
    return { NA: 'badge-na', AS: 'badge-as', AN: 'badge-an', AE: 'badge-ae' }[literal] || 'badge-na';
  }

  function cellClass(literal) {
    return { NA: 'cell-na', AS: 'cell-as', AN: 'cell-an', AE: 'cell-ae' }[literal] || 'cell-na';
  }

  function render() {
    sanitizeState();
    const group = activeGroup();
    reconcileGroup(group);

    renderGroupSelect(group);
    renderMetrics(group);
    renderModeControls(group);
    renderWeightAlert(group);
    renderStudents(group);
    renderActivities(group);
    renderMatrix(group);
  }

  function renderGroupSelect(group) {
    els.groupSelect.innerHTML = state.groups.map(g => `<option value="${escapeHTML(g.id)}" ${g.id === group.id ? 'selected' : ''}>${escapeHTML(g.name)}</option>`).join('');
    els.renameGroupName.value = group.name;
  }

  function renderMetrics(group) {
    els.metricStudents.textContent = String(group.students.length);
    els.metricActivities.textContent = String(group.activities.length);
    els.metricMode.textContent = group.mode === 'weighted' ? t('weightedMode') : t('arithmeticMode');
    els.metricWeight.textContent = group.mode === 'weighted' ? `${round2(totalWeight(group))}%` : '1/N';
  }

  function renderModeControls(group) {
    $$('input[name="calcMode"]').forEach(input => { input.checked = input.value === group.mode; });
    els.activityWeightInput.classList.toggle('hidden', group.mode !== 'weighted');
  }

  function renderWeightAlert(group) {
    if (group.mode !== 'weighted') {
      els.weightAlert.className = 'mt-3 rounded-2xl bg-slate-100 px-3 py-2 text-xs font-black text-slate-700';
      els.weightAlert.textContent = '1/N';
      return;
    }

    const tw = round2(totalWeight(group));
    if (!group.activities.length) {
      els.weightAlert.className = 'mt-3 rounded-2xl bg-slate-100 px-3 py-2 text-xs font-black text-slate-700';
      els.weightAlert.textContent = t('weightsEmpty');
    } else if (Math.abs(tw - 100) < 0.001) {
      els.weightAlert.className = 'mt-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-black text-emerald-800';
      els.weightAlert.textContent = t('weightsOk');
    } else {
      els.weightAlert.className = 'mt-3 rounded-2xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-black text-amber-800';
      els.weightAlert.textContent = t('weightsWarning', { total: tw });
    }
  }

  function renderStudents(group) {
    if (!group.students.length) {
      els.studentList.innerHTML = `<p class="p-4 text-sm text-slate-500">${escapeHTML(t('noStudents'))}</p>`;
      return;
    }

    els.studentList.innerHTML = group.students.map((student, index) => `
      <div class="flex items-center justify-between gap-3 px-4 py-3">
        <div class="min-w-0">
          <p class="truncate font-black text-slate-950">${escapeHTML(student.name)}</p>
          <p class="text-xs text-slate-500">${index + 1} · ${escapeHTML(student.id)}</p>
        </div>
        <button class="rounded-xl bg-red-50 px-3 py-2 text-xs font-black text-red-700 hover:bg-red-100" data-delete-student="${escapeHTML(student.id)}">${escapeHTML(t('delete'))}</button>
      </div>
    `).join('');
  }

  function renderActivities(group) {
    if (!group.activities.length) {
      els.activityList.innerHTML = `<p class="p-4 text-sm text-slate-500">${escapeHTML(t('noActivities'))}</p>`;
      return;
    }

    els.activityList.innerHTML = group.activities.map((activity, index) => {
      const weightInput = group.mode === 'weighted'
        ? `<input type="number" min="0" step="0.01" value="${escapeHTML(activity.weight)}" data-activity-weight="${escapeHTML(activity.id)}" class="w-24 rounded-xl border border-slate-200 px-2 py-2 text-center text-sm font-black outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100" title="${escapeHTML(t('editWeight'))}" /> <span class="text-sm font-black text-slate-500">%</span>`
        : `<span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-black text-slate-600">1/N</span>`;

      return `
        <div class="flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div class="min-w-0 flex-1">
            <label class="mb-1 block text-[11px] font-black uppercase tracking-wide text-slate-500">${index + 1}</label>
            <input
              type="text"
              value="${escapeHTML(activity.name)}"
              data-activity-name="${escapeHTML(activity.id)}"
              class="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-black text-slate-950 outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100"
              title="${escapeHTML(t('editActivityName'))}"
              aria-label="${escapeHTML(t('editActivityName'))}"
            />
            <p class="mt-1 text-xs text-slate-500">${escapeHTML(activity.id)}</p>
          </div>
          <div class="flex items-center gap-2">
            ${weightInput}
            <button class="rounded-xl bg-red-50 px-3 py-2 text-xs font-black text-red-700 hover:bg-red-100" data-delete-activity="${escapeHTML(activity.id)}">${escapeHTML(t('delete'))}</button>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderMatrix(group) {
    const hasData = group.students.length > 0 && group.activities.length > 0;
    els.emptyState.classList.toggle('hidden', hasData);
    els.tableWrap.classList.toggle('hidden', !hasData);

    if (!hasData) {
      els.matrixHead.innerHTML = '';
      els.matrixBody.innerHTML = '';
      return;
    }

    const activityHeaders = group.activities.map((activity, index) => {
      const weightLine = group.mode === 'weighted'
        ? `<div class="mt-1 text-[11px] font-black text-slate-500">${round2(activity.weight)}%</div>`
        : `<div class="mt-1 text-[11px] font-black text-slate-500">1/N</div>`;
      return `<th class="min-w-[136px] border-b border-r border-slate-200 bg-slate-50 px-2 py-3 text-center align-top">
        <label class="mb-1 block text-[10px] font-black uppercase tracking-wide text-slate-500">${index + 1}</label>
        <input type="text" value="${escapeHTML(activity.name)}" data-activity-name-table="${escapeHTML(activity.id)}" class="w-full rounded-xl border border-slate-200 bg-white px-2 py-2 text-center text-xs font-black text-slate-700 outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100" title="${escapeHTML(t('editActivityName'))}" aria-label="${escapeHTML(t('editActivityName'))}" />
        ${weightLine}
      </th>`;
    }).join('');

    els.matrixHead.innerHTML = `
      <tr>
        <th class="sticky-student min-w-[230px] border-b border-r border-slate-200 bg-slate-100 px-4 py-3 text-left text-xs font-black uppercase tracking-wide text-slate-700">${escapeHTML(t('tableStudent'))}</th>
        ${activityHeaders}
        <th class="min-w-[130px] border-b border-r border-slate-200 bg-slate-100 px-4 py-3 text-center text-xs font-black uppercase tracking-wide text-slate-700">${escapeHTML(t('tableAverage'))}</th>
        <th class="sticky-result min-w-[120px] border-b border-slate-200 bg-slate-100 px-4 py-3 text-center text-xs font-black uppercase tracking-wide text-slate-700">${escapeHTML(t('tableFinal'))}</th>
      </tr>
    `;

    els.matrixBody.innerHTML = group.students.map(student => {
      const avg = round2(calculateAverage(group, student.id));
      const finalLiteral = valueToLiteral(avg);
      const cells = group.activities.map(activity => {
        const value = group.scores[student.id]?.[activity.id] || DEFAULT_SCORE;
        const cellId = `score_${safeBase64(student.id)}_${safeBase64(activity.id)}`;
        return `<td class="border-b border-r border-slate-200 bg-white px-3 py-3 text-center">
          <select id="${cellId}" data-score-student="${escapeHTML(student.id)}" data-score-activity="${escapeHTML(activity.id)}" class="score-select ${cellClass(value)} w-24 rounded-2xl border border-slate-200 px-3 py-2 text-center text-sm font-black outline-none focus:border-teal-600 focus:ring-4 focus:ring-teal-100">
            ${SCALE_ORDER.map(scale => `<option value="${scale}" ${value === scale ? 'selected' : ''}>${scale}</option>`).join('')}
          </select>
        </td>`;
      }).join('');

      return `<tr>
        <td class="sticky-student border-b border-r border-slate-200 bg-white px-4 py-3">
          <p class="truncate font-black text-slate-950" title="${escapeHTML(student.name)}">${escapeHTML(student.name)}</p>
        </td>
        ${cells}
        <td class="border-b border-r border-slate-200 bg-white px-4 py-3 text-center"><span class="font-mono text-base font-black text-slate-950">${avg.toFixed(2)}</span></td>
        <td class="sticky-result border-b border-slate-200 bg-white px-4 py-3 text-center"><span class="${badgeClass(finalLiteral)} inline-flex min-w-16 justify-center rounded-full border px-3 py-1.5 text-sm font-black">${finalLiteral}</span></td>
      </tr>`;
    }).join('');
  }

  function createGroup() {
    const name = normalizeText(els.newGroupName.value);
    if (!name) return alert(t('missingGroup'));
    const id = uid('grp');
    state.groups.push({ id, name, mode: 'weighted', students: [], activities: [], scores: {} });
    state.activeGroupId = id;
    els.newGroupName.value = '';
    saveAndRender();
    showPanel('studentsPanel');
  }

  function renameGroup() {
    const group = activeGroup();
    const name = normalizeText(els.renameGroupName.value);
    if (!name) return alert(t('missingGroup'));
    group.name = name;
    saveAndRender();
  }

  function duplicateGroup() {
    const group = activeGroup();
    const copy = JSON.parse(JSON.stringify(group));
    const idMapStudents = new Map();
    const idMapActivities = new Map();
    copy.id = uid('grp');
    copy.name = `${group.name} (${t('copySuffix')})`;
    copy.students = group.students.map(s => {
      const id = uid('stu');
      idMapStudents.set(s.id, id);
      return { id, name: s.name };
    });
    copy.activities = group.activities.map(a => {
      const id = uid('act');
      idMapActivities.set(a.id, id);
      return { id, name: a.name, weight: a.weight };
    });
    copy.scores = {};
    group.students.forEach(oldStudent => {
      const newStudentId = idMapStudents.get(oldStudent.id);
      copy.scores[newStudentId] = {};
      group.activities.forEach(oldActivity => {
        copy.scores[newStudentId][idMapActivities.get(oldActivity.id)] = group.scores[oldStudent.id]?.[oldActivity.id] || DEFAULT_SCORE;
      });
    });
    state.groups.push(copy);
    state.activeGroupId = copy.id;
    saveAndRender();
  }

  function addStudent(name) {
    const group = activeGroup();
    const clean = normalizeText(name);
    if (!clean) return alert(t('missingStudent'));
    const exists = group.students.some(s => s.name.toLocaleLowerCase() === clean.toLocaleLowerCase());
    if (exists) return alert(t('duplicateStudent'));
    const student = { id: uid('stu'), name: clean };
    group.students.push(student);
    group.scores[student.id] = {};
    group.activities.forEach(activity => { group.scores[student.id][activity.id] = DEFAULT_SCORE; });
    els.manualStudentInput.value = '';
    saveAndRender();
  }

  function deleteStudent(studentId) {
    if (!confirm(t('confirmDeleteStudent'))) return;
    const group = activeGroup();
    group.students = group.students.filter(s => s.id !== studentId);
    delete group.scores[studentId];
    saveAndRender();
  }

  function addActivity(name, weight) {
    const group = activeGroup();
    const clean = normalizeText(name);
    if (!clean) return alert(t('missingActivity'));
    const activity = { id: uid('act'), name: clean, weight: group.mode === 'weighted' ? Math.max(0, cleanNumber(weight, 0)) : 1 };
    group.activities.push(activity);
    group.students.forEach(student => {
      if (!group.scores[student.id]) group.scores[student.id] = {};
      group.scores[student.id][activity.id] = DEFAULT_SCORE;
    });
    els.activityNameInput.value = '';
    els.activityWeightInput.value = '';
    saveAndRender();
  }

  function bulkCreateActivities() {
    const group = activeGroup();
    const count = Math.max(1, Math.min(80, Math.floor(cleanNumber(els.bulkActivityCount.value, 20))));
    const start = group.activities.length + 1;
    for (let i = 0; i < count; i++) {
      const activity = { id: uid('act'), name: `${t('activityAuto')} ${start + i}`, weight: group.mode === 'weighted' ? round2(100 / count) : 1 };
      group.activities.push(activity);
      group.students.forEach(student => {
        if (!group.scores[student.id]) group.scores[student.id] = {};
        group.scores[student.id][activity.id] = DEFAULT_SCORE;
      });
    }
    saveAndRender();
  }

  function deleteActivity(activityId) {
    if (!confirm(t('confirmDeleteActivity'))) return;
    const group = activeGroup();
    group.activities = group.activities.filter(a => a.id !== activityId);
    Object.keys(group.scores).forEach(studentId => { delete group.scores[studentId][activityId]; });
    saveAndRender();
  }

  function parseCsv(text) {
    const rows = [];
    let row = [];
    let field = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const next = text[i + 1];
      if (char === '"' && inQuotes && next === '"') { field += '"'; i++; continue; }
      if (char === '"') { inQuotes = !inQuotes; continue; }
      if ((char === ',' || char === ';' || char === '\t') && !inQuotes) { row.push(field.trim()); field = ''; continue; }
      if ((char === '\n' || char === '\r') && !inQuotes) {
        if (char === '\r' && next === '\n') i++;
        row.push(field.trim());
        if (row.some(cell => cell !== '')) rows.push(row);
        row = [];
        field = '';
        continue;
      }
      field += char;
    }
    row.push(field.trim());
    if (row.some(cell => cell !== '')) rows.push(row);
    return rows;
  }

  function detectNameColumn(headers) {
    const patterns = ['nom', 'nombre', 'alumne', 'alumno', 'alumna', 'student', 'name', 'cognoms', 'apellidos'];
    const normalized = headers.map(h => String(h ?? '').toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
    for (let i = 0; i < normalized.length; i++) {
      if (patterns.some(p => normalized[i].includes(p))) return i;
    }
    return -1;
  }

  function importCsv(text) {
    const group = activeGroup();
    const rows = parseCsv(text);
    if (!rows.length) return alert(t('csvNoNames'));
    let nameIndex = detectNameColumn(rows[0]);
    let dataRows = rows;
    if (nameIndex >= 0) dataRows = rows.slice(1);
    else nameIndex = 0;

    const seen = new Set(group.students.map(s => s.name.toLocaleLowerCase()));
    let added = 0;
    dataRows.forEach(row => {
      const name = normalizeText(row[nameIndex]);
      if (!name) return;
      const key = name.toLocaleLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      const student = { id: uid('stu'), name };
      group.students.push(student);
      group.scores[student.id] = {};
      group.activities.forEach(activity => { group.scores[student.id][activity.id] = DEFAULT_SCORE; });
      added++;
    });
    if (!added) return alert(t('csvNoNames'));
    saveAndRender();
    alert(t('csvImported'));
  }

  function setMode(mode) {
    const group = activeGroup();
    group.mode = mode === 'arithmetic' ? 'arithmetic' : 'weighted';
    group.activities.forEach(a => { if (!Number.isFinite(cleanNumber(a.weight, NaN))) a.weight = 1; });
    saveAndRender();
  }

  function showPanel(panelId) {
    $$('.panel-card').forEach(panel => panel.classList.toggle('hidden', panel.id !== panelId));
    $$('.menu-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.panel === panelId));
  }

  function deleteGroup() {
    if (state.groups.length <= 1) return alert(t('cantDeleteOnlyGroup'));
    if (!confirm(t('confirmDeleteGroup'))) return;
    const groupId = state.activeGroupId;
    state.groups = state.groups.filter(g => g.id !== groupId);
    state.activeGroupId = state.groups[0].id;
    saveAndRender();
  }

  function resetApp() {
    if (!confirm(t('confirmResetApp'))) return;
    state = defaultState();
    state.groups[0].name = t('defaultGroupName');
    saveAndRender();
    showPanel('groupsPanel');
  }

  function excelCol(n) {
    let s = '';
    while (n > 0) {
      const m = (n - 1) % 26;
      s = String.fromCharCode(65 + m) + s;
      n = Math.floor((n - 1) / 26);
    }
    return s;
  }

  function sheetSafeName(name, used) {
    let base = normalizeText(name).replace(/[\\/?*\[\]:]/g, ' ').slice(0, 28) || 'Grup';
    let finalName = base;
    let i = 2;
    while (used.has(finalName)) {
      finalName = `${base.slice(0, 25)} ${i}`;
      i++;
    }
    used.add(finalName);
    return finalName;
  }

  function literalFormula(cellRef) {
    return `IF(${cellRef}="NA",0.5,IF(${cellRef}="AS",1.5,IF(${cellRef}="AN",2.45,IF(${cellRef}="AE",3.5,0))))`;
  }

  function meanFormula(group, row, firstScoreCol, lastScoreCol) {
    if (!group.activities.length) return '0';
    if (group.mode === 'arithmetic') {
      const terms = [];
      for (let c = firstScoreCol; c <= lastScoreCol; c++) terms.push(literalFormula(`${excelCol(c)}${row}`));
      return `SUM(${terms.join(',')})/${group.activities.length}`;
    }

    const totalWeight = group.activities.reduce((sum, activity) => sum + Math.max(0, cleanNumber(activity.weight, 0)), 0);
    if (totalWeight <= 0) {
      const terms = [];
      for (let c = firstScoreCol; c <= lastScoreCol; c++) terms.push(literalFormula(`${excelCol(c)}${row}`));
      return `SUM(${terms.join(',')})/${group.activities.length}`;
    }

    const weightedTerms = [];
    for (let i = 0; i < group.activities.length; i++) {
      const c = firstScoreCol + i;
      const weight = Math.max(0, cleanNumber(group.activities[i].weight, 0));
      weightedTerms.push(`(${literalFormula(`${excelCol(c)}${row}`)}*${weight})`);
    }
    return `SUM(${weightedTerms.join(',')})/${totalWeight}`;
  }

  function createWorksheetForGroup(group) {
    reconcileGroup(group);

    const headers = [t('nameHeader'), ...group.activities.map(a => a.name), t('numericalMeanHeader'), t('finalCriteriaHeader')];
    const aoa = [headers];

    group.students.forEach(student => {
      aoa.push([
        student.name,
        ...group.activities.map(activity => group.scores[student.id]?.[activity.id] || DEFAULT_SCORE),
        null,
        null
      ]);
    });

    aoa.push([]);
    aoa.push([t('modeRow'), group.mode === 'weighted' ? t('weightedMode') : t('arithmeticMode')]);
    aoa.push([t('weightsRow'), ...group.activities.map(a => group.mode === 'weighted' ? Math.max(0, cleanNumber(a.weight, 0)) : 1)]);
    aoa.push([t('idHeader'), ...group.students.map(s => s.id)]);

    const ws = XLSX.utils.aoa_to_sheet(aoa);
    const firstScoreCol = 2;
    const lastScoreCol = firstScoreCol + group.activities.length - 1;
    const meanCol = firstScoreCol + group.activities.length;
    const finalCol = meanCol + 1;

    for (let r = 2; r <= group.students.length + 1; r++) {
      const student = group.students[r - 2];
      const meanCell = `${excelCol(meanCol)}${r}`;
      const finalCell = `${excelCol(finalCol)}${r}`;
      const currentMean = round2(calculateAverage(group, student.id));
      const currentFinal = literalFromAverage(currentMean);
      ws[meanCell] = { t: 'n', f: meanFormula(group, r, firstScoreCol, lastScoreCol), v: currentMean, z: '0.00' };
      ws[finalCell] = { t: 's', f: `IF(${meanCell}>=3,"AE",IF(${meanCell}>=2,"AN",IF(${meanCell}>=1.1,"AS","NA")))`, v: currentFinal };
    }

    const range = XLSX.utils.decode_range(ws['!ref']);
    for (let C = range.s.c; C <= Math.min(range.e.c, finalCol - 1); C++) {
      const addr = XLSX.utils.encode_cell({ r: 0, c: C });
      if (ws[addr]) ws[addr].s = headerStyle();
    }

    ws['!cols'] = [
      { wch: 30 },
      ...group.activities.map(a => ({ wch: Math.max(12, Math.min(24, a.name.length + 3)) })),
      { wch: 16 },
      { wch: 14 }
    ];

    ws['!autofilter'] = { ref: `A1:${excelCol(finalCol)}${Math.max(1, group.students.length + 1)}` };
    ws.__validationSqref = group.activities.length && group.students.length ? `${excelCol(firstScoreCol)}2:${excelCol(lastScoreCol)}${group.students.length + 1}` : '';
    return ws;
  }

  function headerStyle() {
    return {
      font: { bold: true, color: { rgb: 'FFFFFF' } },
      fill: { fgColor: { rgb: '0F766E' } },
      alignment: { horizontal: 'center', vertical: 'center', wrapText: true }
    };
  }

  function createLegendWorksheet() {
    const data = [
      [t('lomloeScaleTitle')],
      ['NA', 0.5],
      ['AS', 1.5],
      ['AN', 2.45],
      ['AE', 3.5],
      [],
      ['AE', '>= 3.00'],
      ['AN', '>= 2.00 i < 3.00'],
      ['AS', '>= 1.10 i < 2.00'],
      ['NA', '< 1.10']
    ];
    const ws = XLSX.utils.aoa_to_sheet(data);
    ws['!cols'] = [{ wch: 20 }, { wch: 24 }];
    return ws;
  }

  async function patchWorkbookValidations(buffer, sheetValidations) {
    if (!window.JSZip || !sheetValidations.length) return buffer;
    const zip = await JSZip.loadAsync(buffer);
    for (const item of sheetValidations) {
      const path = `xl/worksheets/sheet${item.sheetIndex}.xml`;
      const file = zip.file(path);
      if (!file || !item.sqref) continue;
      let xml = await file.async('string');
      const validationXml = `<dataValidations count="1"><dataValidation type="list" allowBlank="0" showErrorMessage="1" showInputMessage="1" sqref="${item.sqref}"><formula1>"NA,AS,AN,AE"</formula1></dataValidation></dataValidations>`;
      xml = xml.replace(/<dataValidations[\s\S]*?<\/dataValidations>/g, '');
      xml = xml.replace(/<sheetViews[\s\S]*?<\/sheetViews>/g, '<sheetViews><sheetView workbookViewId="0" topLeftCell="A1"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews>');
      if (!xml.includes('<sheetViews>')) xml = xml.replace(/<sheetFormatPr/, '<sheetViews><sheetView workbookViewId="0" topLeftCell="A1"><selection activeCell="A1" sqref="A1"/></sheetView></sheetViews><sheetFormatPr');
      xml = xml.includes('</sheetData>') ? xml.replace('</sheetData>', `</sheetData>${validationXml}`) : xml.replace('</worksheet>', `${validationXml}</worksheet>`);
      zip.file(path, xml);
    }
    return await zip.generateAsync({ type: 'arraybuffer' });
  }

  async function exportWorkbook(groupsToExport, filenamePrefix) {
    if (!window.XLSX || !window.JSZip) return alert(t('exportMissingLib'));
    if (!groupsToExport.length || groupsToExport.every(g => !g.students.length && !g.activities.length)) return alert(t('exportNoData'));

    const wb = XLSX.utils.book_new();
    const usedNames = new Set();
    const validations = [];

    groupsToExport.forEach((group, index) => {
      const ws = createWorksheetForGroup(group);
      const sheetName = sheetSafeName(group.name, usedNames);
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
      validations.push({ sheetIndex: index + 1, sqref: ws.__validationSqref });
    });

    XLSX.utils.book_append_sheet(wb, createLegendWorksheet(), sheetSafeName(t('legendSheet'), usedNames));

    const raw = XLSX.write(wb, { bookType: 'xlsx', type: 'array', cellStyles: true });
    const patched = await patchWorkbookValidations(raw, validations);
    const blob = new Blob([patched], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const date = new Date().toISOString().slice(0, 10);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filenamePrefix}_${date}.xlsx`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  function attachEvents() {
    $$('.menu-btn').forEach(btn => btn.addEventListener('click', () => showPanel(btn.dataset.panel)));
    els.langCa.addEventListener('click', () => setLanguage('ca'));
    els.langEs.addEventListener('click', () => setLanguage('es'));
    els.groupSelect.addEventListener('change', () => { state.activeGroupId = els.groupSelect.value; saveAndRender(); });
    els.createGroupBtn.addEventListener('click', createGroup);
    els.renameGroupBtn.addEventListener('click', renameGroup);
    els.duplicateGroupBtn.addEventListener('click', duplicateGroup);
    els.loadCsvBtn.addEventListener('click', () => els.csvInput.click());
    els.csvInput.addEventListener('change', async e => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      importCsv(await file.text());
      e.target.value = '';
    });
    els.addStudentBtn.addEventListener('click', () => addStudent(els.manualStudentInput.value));
    els.manualStudentInput.addEventListener('keydown', e => { if (e.key === 'Enter') addStudent(els.manualStudentInput.value); });
    els.addActivityBtn.addEventListener('click', () => addActivity(els.activityNameInput.value, els.activityWeightInput.value));
    els.bulkActivityBtn.addEventListener('click', bulkCreateActivities);
    $$('input[name="calcMode"]').forEach(input => input.addEventListener('change', () => setMode(input.value)));
    if (els.editActivitiesFromEvalBtn) els.editActivitiesFromEvalBtn.addEventListener('click', () => showPanel('activitiesPanel'));

    els.scrollResultsBtn.addEventListener('click', () => { els.tableWrap.scrollLeft = els.tableWrap.scrollWidth; });
    els.exportCurrentBtn.addEventListener('click', () => exportWorkbook([activeGroup()], 'quadern_lomloe_grup'));
    els.exportAllBtn.addEventListener('click', () => exportWorkbook(state.groups, 'quaderns_lomloe_tots_grups'));
    els.deleteGroupBtn.addEventListener('click', deleteGroup);
    els.resetAppBtn.addEventListener('click', resetApp);

    document.addEventListener('click', e => {
      const studentBtn = e.target.closest('[data-delete-student]');
      if (studentBtn) return deleteStudent(studentBtn.dataset.deleteStudent);
      const activityBtn = e.target.closest('[data-delete-activity]');
      if (activityBtn) return deleteActivity(activityBtn.dataset.deleteActivity);
    });

    document.addEventListener('input', e => {
      const nameInput = e.target.closest('[data-activity-name], [data-activity-name-table]');
      if (nameInput) {
        const group = activeGroup();
        const activityId = nameInput.dataset.activityName || nameInput.dataset.activityNameTable;
        const activity = group.activities.find(a => a.id === activityId);
        if (!activity) return;
        activity.name = normalizeName(nameInput.value) || nameInput.value;
        saveState();
        renderMatrix(group);
        return;
      }

      const weightInput = e.target.closest('[data-activity-weight]');
      if (!weightInput) return;
      const group = activeGroup();
      const activity = group.activities.find(a => a.id === weightInput.dataset.activityWeight);
      if (!activity) return;
      activity.weight = Math.max(0, cleanNumber(weightInput.value, 0));
      saveState();
      renderWeightAlert(group);
      renderMetrics(group);
      renderMatrix(group);
    });

    document.addEventListener('change', e => {
      const scoreSelect = e.target.closest('[data-score-student][data-score-activity]');
      if (!scoreSelect) return;
      const group = activeGroup();
      const studentId = scoreSelect.dataset.scoreStudent;
      const activityId = scoreSelect.dataset.scoreActivity;
      if (!group.scores[studentId]) group.scores[studentId] = {};
      if (SCALE_ORDER.includes(scoreSelect.value)) group.scores[studentId][activityId] = scoreSelect.value;
      saveAndRender();
    });

    window.addEventListener('beforeinstallprompt', e => {
      e.preventDefault();
      deferredInstallPrompt = e;
      els.installBtn.classList.remove('hidden');
    });

    els.installBtn.addEventListener('click', async () => {
      if (deferredInstallPrompt) {
        deferredInstallPrompt.prompt();
        await deferredInstallPrompt.userChoice;
        deferredInstallPrompt = null;
        return;
      }
      alert(`${t('installHelpTitle')}

${t('installHelp')}`);
    });
  }

  async function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) return;
    try {
      await navigator.serviceWorker.register('sw.js');
    } catch (error) {
      console.warn('Service worker registration failed:', error);
    }
  }

  function init() {
    loadState();
    attachEvents();
    applyI18n();
    registerServiceWorker();
    window.LOMLOE = { getState: () => JSON.parse(JSON.stringify(state)), escapeStr, safeBase64, exportWorkbook };
  }

  init();
})();
