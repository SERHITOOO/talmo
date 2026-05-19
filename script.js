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
    path: ["Diagnoza", "Role-play", "Voice feedback", "Powtórka"],
  },
  exam: {
    title: "Plan egzaminacyjny z mapą luk i krótkimi testami",
    focus: "zadania egzaminacyjne, precyzja i kontrola typowych błędów",
    path: ["Test poziomu", "Mapa luk", "Ćwiczenia", "Mini egzamin"],
  },
  travel: {
    title: "Praktyczna ścieżka sytuacyjna do podróży",
    focus: "reakcje w hotelu, restauracji, transporcie i sytuacjach awaryjnych",
    path: ["Frazy", "Dialog", "Wymowa", "Symulacja"],
  },
  school: {
    title: "Ścieżka szkolna z powtórką materiału i testem",
    focus: "bieżące tematy, słownictwo z lekcji i przygotowanie do sprawdzianu",
    path: ["Lekcja", "Luki", "Powtórka", "Kartkówka"],
  },
  relocation: {
    title: "Język relokacji: formalności, praca i codzienność",
    focus: "rozmowy urzędowe, mieszkanie, praca i praktyczne słownictwo",
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

const profiles = {
  child: {
    segment: "Segment: dziecko 8-12",
    title: "Nauka przez krótkie misje i głos",
    text: "Ścieżka ogranicza obciążenie tekstem, wzmacnia ciekawość i daje rodzicowi czytelny obraz postępu bez presji rankingów.",
    kpiOne: "12 min",
    kpiTwo: "voice-first",
  },
  teen: {
    segment: "Segment: uczeń 13-18",
    title: "Szkoła, sprawdziany i przełamanie mówienia",
    text: "AI łączy program szkolny z diagnozą luk. Uczeń widzi, co poprawić przed testem i jak użyć języka w rozmowie.",
    kpiOne: "3 bloki",
    kpiTwo: "test-ready",
  },
  student: {
    segment: "Segment: student",
    title: "Język do prezentacji, pracy i mobilności",
    text: "Ścieżka wzmacnia praktyczne konteksty: rozmowę kwalifikacyjną, prezentację, Erasmus, staż albo pracę zdalną.",
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
    title: "Spokojne tempo i wysoka czytelność",
    text: "Ścieżka redukuje chaos interfejsu, powtarza kluczowe zwroty i prowadzi przez rozmowę z wyraźnym feedbackiem.",
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
    segment: "Segment: szkoła językowa",
    title: "AI jako warstwa wsparcia lektora",
    text: "Szkoła może używać Talmo jako diagnostyki, pracy domowej, powtórek i raportów dla lektora przed zajęciami.",
    kpiOne: "teacher aid",
    kpiTwo: "hybrid",
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

const formatNumber = new Intl.NumberFormat("pl-PL");
const formatCurrency = new Intl.NumberFormat("pl-PL", {
  style: "currency",
  currency: "PLN",
  maximumFractionDigits: 0,
});

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => Array.from(document.querySelectorAll(selector));

function updateDiagnostic(event) {
  if (event) event.preventDefault();

  const profile = diagnosticProfiles[qs("#ageGroup").value];
  const level = qs("#level").value.toUpperCase();
  const goal = goals[qs("#goal").value];
  const blocker = blockers[qs("#blocker").value];
  const minutes = Number(qs("#dailyTime").value);
  const confidence = Math.min(96, 72 + Math.round(minutes / 4) + (level.includes("B") ? 8 : 4));

  qs("#timeOutput").textContent = minutes;
  qs("#confidenceScore").textContent = `${confidence}% fit`;
  qs("#recommendationTitle").textContent = goal.title;
  qs("#recommendationCopy").textContent = `Dla ${profile.label} na poziomie ${level} najlepszy start to ${profile.base}. Priorytetem są ${goal.focus}, a najbliższa korekta powinna objąć ${blocker}.`;
  qs("#learningPath").innerHTML = goal.path.map((step) => `<span>${step}</span>`).join("");
  qs("#weaknessAlert").innerHTML = `<strong>Słaby punkt:</strong> ${blocker}. Plan dnia: ${minutes} minut w pętli diagnoza, praktyka i powtórka.`;
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
  ["#ageGroup", "#level", "#goal", "#blocker", "#dailyTime"].forEach((selector) => {
    qs(selector).addEventListener("input", updateDiagnostic);
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

  ["#usersRange", "#conversionRange", "#arpuRange", "#churnRange", "#aiCostRange"].forEach((selector) => {
    qs(selector).addEventListener("input", updateCalculator);
  });

  updateDiagnostic();
  updateCalculator();
  initReveal();
}

document.addEventListener("DOMContentLoaded", init);
