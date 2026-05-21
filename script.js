const diagnosticProfiles = {
  child: {
    label: "dziecka",
    base: "krótkie misje głosowe, obrazowe skojarzenia i powtórki bez presji",
  },
  teen: {
    label: "ucznia",
    base: "szkolne cele, szybka korekta luk i zadania zgodne z rytmem semestru",
  },
  student: {
    label: "studenta",
    base: "praktyczne scenariusze, notatki, prezentacje i słownictwo akademickie",
  },
  adult: {
    label: "osoby dorosłej",
    base: "krótka, intensywna ścieżka z natychmiastowym użyciem języka",
  },
  senior: {
    label: "seniora",
    base: "spokojne tempo, jasne instrukcje i utrwalanie przez rozmowę",
  },
  company: {
    label: "zespołu firmowego",
    base: "role-play, język spotkań i mierzalne cele komunikacyjne",
  },
};

const goals = {
  business: {
    title: "Conversation sprint z korektą po każdej odpowiedzi",
    focus: "rozmowy biznesowe, argumentacja i pewność reakcji",
    label: "Rozmowy biznesowe",
    method: "Task-Based + Deliberate Practice",
    path: ["Diagnoza", "Role-play", "Voice feedback", "Powtórka"],
  },
  exam: {
    title: "Plan egzaminacyjny z mapą luk i krótkimi testami",
    focus: "zadania egzaminacyjne, precyzja i kontrola typowych błędów",
    label: "Egzamin",
    method: "Active Recall + Interleaving",
    path: ["Test poziomu", "Mapa luk", "Ćwiczenia", "Mini egzamin"],
  },
  travel: {
    title: "Praktyczna ścieżka sytuacyjna do podróży",
    focus: "reakcje w hotelu, restauracji, transporcie i sytuacjach awaryjnych",
    label: "Podróże",
    method: "Comprehensible Input + Shadowing",
    path: ["Frazy", "Dialog", "Wymowa", "Symulacja"],
  },
  school: {
    title: "Ścieżka szkolna z powtórką materiału i testem",
    focus: "bieżące tematy, słownictwo z lekcji i przygotowanie do sprawdzianu",
    label: "Szkoła",
    method: "Spaced Repetition + Active Recall",
    path: ["Lekcja", "Luki", "Powtórka", "Kartkówka"],
  },
  relocation: {
    title: "Język relokacji: formalności, praca i codzienność",
    focus: "rozmowy urzędowe, mieszkanie, praca i praktyczne słownictwo",
    label: "Relokacja",
    method: "Task-Based Learning + Input",
    path: ["Priorytety", "Scenariusze", "Voice", "Checklista"],
  },
};

const blockers = {
  speaking: "spontaniczne odpowiedzi i płynność mówienia",
  grammar: "automatyzacja gramatyki w prawdziwych zdaniach",
  listening: "rozumienie naturalnego tempa i akcentów",
  motivation: "utrzymanie rytmu bez sztucznej presji",
  vocabulary: "słownictwo aktywne, którego użytkownik faktycznie używa",
};

const blockerNames = {
  speaking: "Mówienie",
  grammar: "Gramatyka",
  listening: "Słuchanie",
  motivation: "Motywacja",
  vocabulary: "Słownictwo",
};

const profileNames = {
  child: "Dziecko",
  teen: "Uczeń",
  student: "Student",
  adult: "Dorosły",
  senior: "Senior",
  company: "Firma",
};

const pathNotes = {
  Diagnoza: "Sygnał startowy",
  "Role-play": "Praktyka celu",
  "Voice feedback": "Korekta mowy",
  Powtórka: "Retencja",
  "Test poziomu": "Punkt odniesienia",
  "Mapa luk": "Priorytety",
  Ćwiczenia: "Celowana praktyka",
  "Mini egzamin": "Kontrola stresu",
  Frazy: "Słowa w kontekście",
  Dialog: "Naturalna reakcja",
  Wymowa: "Rytm i intonacja",
  Symulacja: "Realna sytuacja",
  Lekcja: "Materiał szkolny",
  Luki: "Błędy do naprawy",
  Kartkówka: "Szybki test",
  Priorytety: "Kolejność potrzeb",
  Scenariusze: "Zadania życia",
  Voice: "Mówienie",
  Checklista: "Gotowość",
};

const blockerSignals = {
  speaking: { voice: "High", recall: "2 luki", readiness: 68, method: "Shadowing + Deliberate Practice" },
  grammar: { voice: "Medium", recall: "3 luki", readiness: 78, method: "Active Recall + Error-Based Learning" },
  listening: { voice: "High", recall: "2 luki", readiness: 64, method: "Comprehensible Input + Shadowing" },
  motivation: { voice: "Low", recall: "rytm", readiness: 82, method: "Spaced Repetition + krótkie cele" },
  vocabulary: { voice: "Medium", recall: "4 luki", readiness: 76, method: "Active Recall + Spaced Repetition" },
};

const profiles = {
  child: {
    segment: "Segment: dziecko 8-12",
    title: "Szkoła podstawowa bez jednej ścieżki dla wszystkich",
    text: "Talmo może wspierać dzieci krótkimi misjami, głosem, obrazem i powtórkami po błędach. Rodzic oraz nauczyciel widzą, z czym uczeń realnie ma problem.",
    kpiOne: "12 min",
    kpiTwo: "safe mode",
  },
  teen: {
    segment: "Segment: szkoła średnia i liceum",
    title: "Sprawdziany, matura i przełamanie mówienia",
    text: "AI łączy program szkolny z diagnozą luk. Licealista widzi, co poprawić przed testem, maturą i realną rozmową, zamiast powtarzać cały dział od początku.",
    kpiOne: "matura path",
    kpiTwo: "gap map",
  },
  student: {
    segment: "Segment: student",
    title: "Język do studiów, prezentacji i pierwszej pracy",
    text: "Ścieżka wzmacnia praktyczne konteksty: prezentację, mobilność, Erasmus, staż, rozmowę kwalifikacyjną i pracę w międzynarodowym środowisku.",
    kpiOne: "B2 path",
    kpiTwo: "career use",
  },
  adult: {
    segment: "Segment: dorosły profesjonalista",
    title: "Mniej lekcji, więcej realnych rozmów",
    text: "Produkt skupia się na sytuacjach, które użytkownik naprawdę spotka: call z klientem, status, negocjacja, wyjaśnienie decyzji.",
    kpiOne: "25 min",
    kpiTwo: "business",
  },
  senior: {
    segment: "Segment: senior",
    title: "Spokojne tempo, czytelność i nauka bez stresu",
    text: "Ścieżka redukuje chaos interfejsu, powtarza kluczowe zwroty i prowadzi przez rozmowę z wyraźnym feedbackiem. Nauka może wspierać samodzielność i kontakt z rodziną.",
    kpiOne: "calm UX",
    kpiTwo: "low stress",
  },
  company: {
    segment: "Segment: firma",
    title: "Język zespołów mierzony przez cele",
    text: "Panel firmowy może śledzić progres zespołów bez wchodzenia w prywatne dane ucznia: frekwencję, retencję i gotowość do rozmów.",
    kpiOne: "B2B",
    kpiTwo: "team data",
  },
  school: {
    segment: "Segment: szkoła, uczelnia lub lektor",
    title: "AI jako warstwa wsparcia edukacji formalnej",
    text: "Placówka może używać Talmo jako diagnostyki, pracy domowej, powtórek, raportów luk i wsparcia nauczyciela przed kolejnymi zajęciami.",
    kpiOne: "LMS-ready",
    kpiTwo: "teacher aid",
  },
};

const chatModes = {
  calm: {
    label: "AI tutor: spokojny",
    reply:
      "Zacznijmy bez presji. Powiedz: “Our offer is more expensive because it includes...”, a potem dodamy jeden konkretny argument.",
    feedback: "Priorytet: płynność i pewność, nie perfekcyjna gramatyka w pierwszej odpowiedzi.",
  },
  business: {
    label: "AI tutor: biznesowy",
    reply:
      "Użyj struktury: value, proof, next step. “The price reflects dedicated support, faster implementation and lower operational risk.”",
    feedback: "Priorytet: argumentacja, precyzja i język, który brzmi naturalnie na spotkaniu.",
  },
  exam: {
    label: "AI tutor: egzaminacyjny",
    reply:
      "Odpowiedz pełnym zdaniem i dodaj uzasadnienie. Zwrócę uwagę na spójnik, czas oraz zakres słownictwa.",
    feedback: "Priorytet: kryteria oceniania, kontrola błędów i pełna struktura wypowiedzi.",
  },
  review: {
    label: "AI tutor: szybka powtórka",
    reply:
      "Trzy frazy do zapamiętania: “the price reflects”, “what you get in return”, “lower long-term cost”. Teraz jedno zdanie na głos.",
    feedback: "Priorytet: krótka pętla pamięciowa i aktywne użycie zwrotów z poprzednich błędów.",
  },
};

const subjects = {
  language: {
    glyph: "Aa",
    label: "Talmo Languages",
    title: "Mówienie, rozumienie i retencja w jednym planie.",
    copy: "Użytkownik ćwiczy realne sytuacje językowe, a system łączy voice practice, błędy i powtórki.",
    weakness: "spontaniczne odpowiedzi",
    method: "Shadowing + Active Recall",
    exercise: "role-play z korektą głosu",
    feedback: "płynność, intonacja, czas reakcji",
  },
  math: {
    glyph: "∑",
    label: "Talmo Math",
    title: "Najpierw luka pojęciowa, potem zadanie.",
    copy: "Silnik wykrywa, czy problemem jest wzór, intuicja, kolejność działań czy stres przy zadaniu.",
    weakness: "ułamki i proporcje",
    method: "Worked Examples + Active Recall",
    exercise: "wizualne zadanie krok po kroku",
    feedback: "gdzie uczeń zgubił logikę",
  },
  code: {
    glyph: "</>",
    label: "Talmo Code",
    title: "Nauka programowania przez debugowanie.",
    copy: "Zamiast biernego kursu uczeń naprawia małe fragmenty kodu i dostaje feedback na decyzje.",
    weakness: "pętle i warunki",
    method: "Deliberate Practice + Interleaving",
    exercise: "mini debug task",
    feedback: "błąd logiczny, składnia, test case",
  },
  geo: {
    glyph: "⌖",
    label: "Talmo Geography",
    title: "Mapa pojęć zamiast pamięciówki.",
    copy: "Talmo może łączyć quizy, skojarzenia przestrzenne i zależności przyczynowo-skutkowe.",
    weakness: "regiony i zależności",
    method: "Dual Coding + Retrieval Practice",
    exercise: "quiz mapowy z uzasadnieniem",
    feedback: "pojęcie, lokalizacja, zależność",
  },
  exam: {
    glyph: "90",
    label: "Talmo Exam Prep",
    title: "Ścieżka egzaminacyjna z kontrolą luk.",
    copy: "System miesza typy zadań, mierzy stabilność odpowiedzi i wraca do tematów przed zapomnieniem.",
    weakness: "presja czasu",
    method: "Interleaving + Spaced Repetition",
    exercise: "mini arkusz adaptacyjny",
    feedback: "czas, pewność, typ błędu",
  },
};

const formatNumber = new Intl.NumberFormat("pl-PL");
const formatCurrency = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
  maximumFractionDigits: 0,
});

const qs = (selector) => document.querySelector(selector);
const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function readSelection(inputId) {
  return qs(`#${inputId}`).value.split(",").filter(Boolean);
}

function joinLabels(labels, limit = 3) {
  const visible = labels.slice(0, limit);
  const extra = labels.length - visible.length;
  return extra > 0 ? `${visible.join(" + ")} +${extra}` : visible.join(" + ");
}

function uniqueItems(items) {
  return Array.from(new Set(items.filter(Boolean)));
}

function getVoiceNeed(signals) {
  if (signals.some((signal) => signal.voice === "High")) return "High";
  if (signals.some((signal) => signal.voice === "Medium")) return "Medium";
  return "Low";
}

function getRecallLabel(signals) {
  const numericGaps = signals
    .map((signal) => Number.parseInt(signal.recall, 10))
    .filter((value) => Number.isFinite(value));

  if (numericGaps.length) {
    const total = numericGaps.reduce((sum, value) => sum + value, 0);
    if (total === 1) return "1 luka";
    if ([2, 3, 4].includes(total)) return `${total} luki`;
    return `${total} luk`;
  }

  return uniqueItems(signals.map((signal) => signal.recall)).join(" + ");
}

function buildCombinedPath(selectedGoals, selectedSignals) {
  const methodSteps = selectedSignals
    .map((signal) => {
      if (signal.voice === "High") return "Voice feedback";
      if (signal.recall.includes("luki")) return "Mapa luk";
      return "Powtórka";
    });
  const coreGoalSteps = selectedGoals.map((goal) => goal.path[1] || goal.path[0]);

  return uniqueItems(["Diagnoza", ...coreGoalSteps, ...methodSteps, "Powtórka"]).slice(0, 4);
}

function buildMethodLabel(selectedSignals, selectedGoals) {
  const blockerMethods = selectedSignals.map((signal) => signal.method);
  const goalMethods = selectedGoals.map((goal) => goal.method);
  return uniqueItems([...blockerMethods, ...goalMethods].flatMap((method) => method.split(" + ")))
    .slice(0, 3)
    .join(" + ");
}

function updateDiagnostic(event) {
  if (event) event.preventDefault();

  const profile = diagnosticProfiles[qs("#ageGroup").value];
  const profileKey = qs("#ageGroup").value;
  const level = qs("#level").value.toUpperCase();
  const goalKeys = readSelection("goal");
  const blockerKeys = readSelection("blocker");
  const selectedGoals = goalKeys.map((key) => goals[key]);
  const selectedSignals = blockerKeys.map((key) => blockerSignals[key]);
  const goal = selectedGoals[0];
  const goalLabels = selectedGoals.map((item) => item.label);
  const blockerLabels = blockerKeys.map((key) => blockers[key]);
  const blockerShortLabel = joinLabels(blockerKeys.map((key) => blockerNames[key]), 3);
  const goalLabel = joinLabels(goalLabels);
  const blockerLabel = joinLabels(blockerLabels, 2);
  const voiceNeed = getVoiceNeed(selectedSignals);
  const recallLabel = getRecallLabel(selectedSignals);
  const methodLabel = buildMethodLabel(selectedSignals, selectedGoals);
  const learningPath = buildCombinedPath(selectedGoals, selectedSignals);
  const minutes = Number(qs("#dailyTime").value);
  const confidence = Math.min(96, 70 + Math.round(minutes / 4) + (level.includes("B") ? 8 : 4) + goalKeys.length);
  const momentum = Math.min(96, 56 + Math.round(minutes / 2) + (goalKeys.includes("business") ? 4 : 0) + blockerKeys.length);
  const intensity = minutes >= 45 ? "Intensywne" : minutes >= 25 ? "Skupione" : "Lekkie";
  const intensityScore = minutes >= 45 ? 88 : minutes >= 25 ? 66 : 42;
  const voiceNeedScore = { High: 84, Medium: 62, Low: 38 }[voiceNeed] || 62;
  const averageReadiness = Math.round(
    selectedSignals.reduce((sum, item) => sum + item.readiness, 0) / selectedSignals.length,
  );
  const voiceReadiness = Math.min(94, averageReadiness + (level.includes("B") ? 6 : 0) + (minutes >= 30 ? 4 : 0));

  qs("#timeOutput").textContent = minutes;
  qs("#confidenceScore").textContent = `${confidence}% fit`;
  qs("#diagnosticSummary").textContent = `${profileNames[profileKey]} · ${level} · ${goalLabel}`;
  qs("#demoIntensity").textContent = intensity;
  qs("#voiceNeed").textContent = voiceNeed;
  qs("#momentumScore").textContent = `${momentum}%`;
  qs("#intensityMeter").style.setProperty("--signal", `${intensityScore}%`);
  qs("#voiceNeedMeter").style.setProperty("--signal", `${voiceNeedScore}%`);
  qs("#momentumMeter").style.setProperty("--signal", `${momentum}%`);
  qs("#demoProfileLabel").textContent = `${profileNames[profileKey]} · ${level}`;
  qs("#demoGoalLabel").textContent = goalLabel;
  qs("#demoSessionTime").textContent = `${minutes} min`;
  qs("#pathDuration").textContent = `${minutes} min`;
  qs("#recommendationTitle").textContent =
    goalKeys.length > 1 ? `Plan hybrydowy: ${goalLabel}` : goal.title;
  qs("#recommendationCopy").textContent = `Dla ${profile.label} na poziomie ${level} najlepszy start to ${profile.base}. Priorytety: ${selectedGoals.map((item) => item.focus).join("; ")}. Najbliższa korekta powinna objąć: ${blockerLabel}.`;
  qs("#learningPath").innerHTML = learningPath
    .map(
      (step, index) => `<span class="path-step">
        <i>${String(index + 1).padStart(2, "0")}</i>
        <strong>${step}</strong>
        <small>${pathNotes[step] || "Następny krok"}</small>
      </span>`,
    )
    .join("");
  qs("#methodLabel").textContent = methodLabel;
  qs("#methodPreview").textContent = methodLabel;
  qs("#voiceReadiness").textContent = `${voiceReadiness}%`;
  qs("#voiceMeter").style.width = `${voiceReadiness}%`;
  qs("#recallLabel").textContent = recallLabel;
  qs("#weaknessAlert").innerHTML = `<strong>Słabe punkty:</strong> ${blockerShortLabel}. Plan dnia: ${minutes} minut w pętli diagnoza, praktyka i powtórka.`;

  ["ageGroup", "level", "goal", "blocker"].forEach(syncChoiceButtons);
  syncTimePresets(minutes);
}

function syncChoiceButtons(inputId) {
  const input = qs(`#${inputId}`);
  const group = qs(`.choice-group[data-input="${inputId}"]`);
  if (!input || !group) return;

  const selectedValues = input.value.split(",").filter(Boolean);
  qsa("button", group).forEach((button) => {
    const isSelected = selectedValues.includes(button.dataset.value);
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function syncTimePresets(minutes) {
  qsa(".time-presets button").forEach((button) => {
    const isSelected = Number(button.dataset.time) === minutes;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function updateProfile(profileKey) {
  const profile = profiles[profileKey];
  qs("#profileSegment").textContent = profile.segment;
  qs("#profileTitle").textContent = profile.title;
  qs("#profileText").textContent = profile.text;
  qs("#profileKpiOne").textContent = profile.kpiOne;
  qs("#profileKpiTwo").textContent = profile.kpiTwo;

  qsa(".profile-tab").forEach((tab) => {
    const isActive = tab.dataset.profile === profileKey;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function updateChat(modeKey) {
  const mode = chatModes[modeKey];
  qs("#chatModeLabel").textContent = mode.label;
  qs("#chatReply").textContent = mode.reply;
  qs("#chatFeedback").textContent = mode.feedback;

  qsa(".mode-tab").forEach((tab) => {
    const isActive = tab.dataset.mode === modeKey;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
}

function handleAnswer(button) {
  const isCorrect = button.dataset.correct === "true";

  qsa(".answer-btn").forEach((answer) => {
    answer.classList.remove("is-selected", "is-correct", "is-wrong");
  });

  button.classList.add("is-selected", isCorrect ? "is-correct" : "is-wrong");

  if (isCorrect) {
    qs("#testFeedback").textContent =
      "Dobrze. AI oznacza Past Continuous jako stabilny element i przechodzi do krótkiego ćwiczenia mówienia.";
    return;
  }

  qs("#testFeedback").textContent =
    "Błąd jest sygnałem, nie porażką. AI doda 7-minutową powtórkę Past Continuous i poprosi o dwa zdania głosowe w podobnym kontekście.";
}

function updateCalculator() {
  const users = Number(qs("#usersRange").value);
  const conversion = Number(qs("#conversionRange").value);
  const arpu = Number(qs("#arpuRange").value);
  const churn = Number(qs("#churnRange").value);
  const aiCost = Number(qs("#aiCostRange").value);
  const paidUsers = users * (conversion / 100);
  const mrr = paidUsers * arpu;
  const arr = mrr * 12;
  const totalAiCost = users * aiCost;
  const margin = mrr > 0 ? ((mrr - totalAiCost) / mrr) * 100 : 0;

  qs("#usersOut").textContent = formatNumber.format(users);
  qs("#conversionOut").textContent = conversion.toString().replace(".", ",");
  qs("#arpuOut").textContent = formatNumber.format(arpu);
  qs("#churnOut").textContent = churn.toString().replace(".", ",");
  qs("#aiCostOut").textContent = aiCost.toString().replace(".", ",");
  qs("#mrrValue").textContent = formatCurrency.format(mrr);
  qs("#arrValue").textContent = formatCurrency.format(arr);
  qs("#aiCostValue").textContent = formatCurrency.format(totalAiCost);
  qs("#marginValue").textContent = `${Math.round(margin)}%`;

  const marginNode = qs("#marginValue");
  marginNode.style.color = margin >= 35 ? "#d8f3b0" : margin >= 0 ? "#fff8ed" : "#f6a44d";
}

function updateSubject(subjectKey) {
  const subject = subjects[subjectKey];
  qs("#subjectGlyph").textContent = subject.glyph;
  qs("#subjectLabel").textContent = subject.label;
  qs("#subjectTitle").textContent = subject.title;
  qs("#subjectCopy").textContent = subject.copy;
  qs("#subjectWeakness").textContent = subject.weakness;
  qs("#subjectMethod").textContent = subject.method;
  qs("#subjectExercise").textContent = subject.exercise;
  qs("#subjectFeedback").textContent = subject.feedback;

  qsa(".subject-tab").forEach((tab) => {
    const isActive = tab.dataset.subject === subjectKey;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

function initReveal() {
  const elements = qsa(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  elements.forEach((element) => observer.observe(element));
}

function init() {
  qs("#diagnosticForm").addEventListener("submit", updateDiagnostic);
  ["#dailyTime"].forEach((selector) => {
    qs(selector).addEventListener("input", updateDiagnostic);
  });

  qsa(".choice-group button").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".choice-group");
      const input = qs(`#${group.dataset.input}`);
      const isMultiple = group.dataset.multiple === "true";

      if (isMultiple) {
        const selectedValues = input.value.split(",").filter(Boolean);
        const value = button.dataset.value;
        const isSelected = selectedValues.includes(value);
        const nextValues = isSelected
          ? selectedValues.filter((item) => item !== value)
          : [...selectedValues, value];

        input.value = nextValues.length ? nextValues.join(",") : value;
      } else {
        input.value = button.dataset.value;
      }

      updateDiagnostic();
    });
  });

  qsa(".time-presets button").forEach((button) => {
    button.addEventListener("click", () => {
      qs("#dailyTime").value = button.dataset.time;
      updateDiagnostic();
    });
  });

  qsa(".profile-tab").forEach((tab) => {
    tab.addEventListener("click", () => updateProfile(tab.dataset.profile));
  });

  qsa(".mode-tab").forEach((tab) => {
    tab.addEventListener("click", () => updateChat(tab.dataset.mode));
  });

  qsa(".answer-btn").forEach((button) => {
    button.addEventListener("click", () => handleAnswer(button));
  });

  qsa(".subject-tab").forEach((tab) => {
    tab.addEventListener("click", () => updateSubject(tab.dataset.subject));
  });

  ["#usersRange", "#conversionRange", "#arpuRange", "#churnRange", "#aiCostRange"].forEach((selector) => {
    qs(selector).addEventListener("input", updateCalculator);
  });

  updateDiagnostic();
  updateSubject("language");
  updateCalculator();
  initReveal();
}

document.addEventListener("DOMContentLoaded", init);
