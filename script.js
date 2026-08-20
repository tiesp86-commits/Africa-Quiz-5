// ==========================================
// 🌍 QUIZ AFRICA
// ==========================================

const levels = {
    1: [
        {
            q: "Qual è la capitale del Ghana?",
            a: ["Accra", "Dakar", "Nairobi", "Lagos"],
            c: "Accra",
            e: "Accra è la capitale del Ghana."
        },
        {
            q: "Qual è la capitale del Kenya?",
            a: ["Nairobi", "Kampala", "Dodoma", "Maputo"],
            c: "Nairobi",
            e: "Nairobi è la capitale del Kenya."
        },
        {
            q: "Qual è la capitale del Senegal?",
            a: ["Dakar", "Bamako", "Conakry", "Lomé"],
            c: "Dakar",
            e: "Dakar è la capitale del Senegal."
        },
        {
            q: "Qual è la capitale dell'Egitto?",
            a: ["Il Cairo", "Alessandria", "Khartoum", "Tripoli"],
            c: "Il Cairo",
            e: "Il Cairo è la capitale dell'Egitto."
        },
        {
            q: "Qual è la capitale del Marocco?",
            a: ["Rabat", "Casablanca", "Marrakech", "Fes"],
            c: "Rabat",
            e: "Rabat è la capitale del Marocco."
        },
        {
            q: "Quale lingua è molto diffusa nell'Africa orientale?",
            a: ["Swahili", "Wolof", "Yoruba", "Hausa"],
            c: "Swahili",
            e: "Lo swahili è molto diffuso nell'Africa orientale."
        },
        {
            q: "Qual è il più grande deserto caldo dell'Africa?",
            a: ["Sahara", "Kalahari", "Namib", "Danakil"],
            c: "Sahara",
            e: "Il Sahara occupa una grande parte del Nord Africa."
        },
        {
            q: "Quale grande fiume attraversa l'Egitto?",
            a: ["Nilo", "Niger", "Congo", "Zambesi"],
            c: "Nilo",
            e: "Il Nilo attraversa l'Egitto."
        },
        {
            q: "Quale animale è chiamato spesso re della savana?",
            a: ["Leone", "Elefante", "Giraffa", "Zebra"],
            c: "Leone",
            e: "Il leone è uno dei simboli più conosciuti della fauna africana."
        },
        {
            q: "Qual è il più grande animale terrestre?",
            a: ["Elefante africano", "Rinoceronte", "Giraffa", "Ippopotamo"],
            c: "Elefante africano",
            e: "L'elefante africano è il più grande animale terrestre vivente."
        },
        {
            q: "Quale antica civiltà costruì le piramidi di Giza?",
            a: ["Antico Egitto", "Impero Mali", "Regno Zulu", "Impero Songhai"],
            c: "Antico Egitto",
            e: "Le piramidi di Giza furono costruite nell'antico Egitto."
        },
        {
            q: "Mansa Musa è stato sovrano di quale impero?",
            a: ["Mali", "Ghana", "Zulu", "Songhai"],
            c: "Mali",
            e: "Mansa Musa fu uno dei più famosi sovrani dell'Impero del Mali."
        },
        {
            q: "Quale strumento tradizionale africano ha molte corde?",
            a: ["Kora", "Djembe", "Balafon", "Tamburo"],
            c: "Kora",
            e: "La kora è uno strumento a corde dell'Africa occidentale."
        },
        {
            q: "Il djembe è principalmente quale tipo di strumento?",
            a: ["Tamburo", "Flauto", "Arpa", "Chitarra"],
            c: "Tamburo",
            e: "Il djembe è un famoso tamburo dell'Africa occidentale."
        },
        {
            q: "Come vengono chiamati alcuni narratori tradizionali dell'Africa occidentale?",
            a: ["Griot", "Samurai", "Vichinghi", "Cavalieri"],
            c: "Griot",
            e: "I griot trasmettono storie e conoscenze attraverso la tradizione orale."
        },
        {
            q: "Il Kilimangiaro si trova in quale paese?",
            a: ["Tanzania", "Kenya", "Uganda", "Etiopia"],
            c: "Tanzania",
            e: "Il Kilimangiaro si trova nel nord della Tanzania."
        },
        {
            q: "L'injera è particolarmente associata alla cucina di quale paese?",
            a: ["Etiopia", "Marocco", "Nigeria", "Senegal"],
            c: "Etiopia",
            e: "L'injera è un alimento tradizionale della cucina etiope."
        },
        {
            q: "Il kente è un tessuto tradizionale associato soprattutto a quale paese?",
            a: ["Ghana", "Tunisia", "Namibia", "Madagascar"],
            c: "Ghana",
            e: "Il kente è un tessuto tradizionale molto conosciuto in Ghana."
        },
        {
            q: "Quale oceano si trova a est dell'Africa?",
            a: ["Oceano Indiano", "Oceano Atlantico", "Oceano Pacifico", "Oceano Artico"],
            c: "Oceano Indiano",
            e: "L'Oceano Indiano bagna la costa orientale dell'Africa."
        },
        {
            q: "Qual è la capitale dell'Etiopia?",
            a: ["Addis Abeba", "Asmara", "Mogadiscio", "Khartoum"],
            c: "Addis Abeba",
            e: "Addis Abeba è la capitale dell'Etiopia."
        }
    ],

    2: [
        {
            q: "Quale grande lago si trova tra Tanzania, Uganda e Kenya?",
            a: ["Lago Vittoria", "Lago Ciad", "Lago Volta", "Lago Turkana"],
            c: "Lago Vittoria",
            e: "Il Lago Vittoria è uno dei grandi laghi dell'Africa orientale."
        },
        {
            q: "Quale grande fiume attraversa l'Africa centrale?",
            a: ["Congo", "Nilo", "Niger", "Orange"],
            c: "Congo",
            e: "Il fiume Congo attraversa una vasta parte dell'Africa centrale."
        },
        {
            q: "Il thieboudienne è particolarmente associato a quale paese?",
            a: ["Senegal", "Etiopia", "Sudafrica", "Marocco"],
            c: "Senegal",
            e: "È un famoso piatto senegalese a base di riso e pesce."
        },
        {
            q: "Il bobotie è associato soprattutto a quale paese?",
            a: ["Sudafrica", "Ghana", "Kenya", "Tunisia"],
            c: "Sudafrica",
            e: "Il bobotie è un piatto tradizionale della cucina sudafricana."
        },
        {
            q: "Quale lingua è molto diffusa in Nigeria e nell'Africa occidentale?",
            a: ["Hausa", "Swahili", "Zulu", "Wolof"],
            c: "Hausa",
            e: "L'hausa è una delle principali lingue dell'Africa occidentale."
        },
        {
            q: "Lo yoruba è principalmente associato a quale area?",
            a: ["Africa occidentale", "Africa australe", "Nord Africa", "Africa orientale"],
            c: "Africa occidentale",
            e: "Lo yoruba è parlato soprattutto in Nigeria, Benin e Togo."
        },
        {
            q: "L'afrobeats è particolarmente associato alla scena musicale di quale paese?",
            a: ["Nigeria", "Etiopia", "Marocco", "Botswana"],
            c: "Nigeria",
            e: "La Nigeria è uno dei principali centri dell'afrobeats."
        },
        {
            q: "Quale città fu uno storico centro di sapere e commercio nell'Africa occidentale?",
            a: ["Timbuctù", "Mombasa", "Durban", "Lusaka"],
            c: "Timbuctù",
            e: "Timbuctù fu un importante centro commerciale e culturale."
        },
        {
            q: "Shaka Zulu è ricordato soprattutto come leader di quale popolo?",
            a: ["Zulu", "Ashanti", "Hausa", "Tuareg"],
            c: "Zulu",
            e: "Shaka Zulu fu un importante leader del popolo Zulu."
        },
        {
            q: "Quale catena montuosa attraversa il Marocco e altri paesi del Nord Africa?",
            a: ["Atlante", "Drakensberg", "Ruwenzori", "Kilimangiaro"],
            c: "Atlante",
            e: "Le montagne dell'Atlante si estendono nel Nord Africa."
        },
        {
            q: "Quale grande mammifero africano passa molto tempo in acqua?",
            a: ["Ippopotamo", "Ghepardo", "Gorilla", "Giraffa"],
            c: "Ippopotamo",
            e: "L'ippopotamo vive vicino a fiumi e laghi."
        },
        {
            q: "In quale ambiente vive principalmente il gorilla di montagna?",
            a: ["Foreste montane", "Deserti", "Savane aride", "Mangrovie"],
            c: "Foreste montane",
            e: "Il gorilla di montagna vive nelle foreste montane."
        },
        {
            q: "Le maschere tradizionali africane sono spesso utilizzate in quali contesti?",
            a: ["Cerimonie e rituali", "Sport", "Navigazione", "Cucina"],
            c: "Cerimonie e rituali",
            e: "In molte società africane le maschere hanno funzioni culturali e rituali."
        },
        {
            q: "Quale lingua è una delle principali lingue dell'Etiopia?",
            a: ["Amarico", "Wolof", "Yoruba", "Lingala"],
            c: "Amarico",
            e: "L'amarico è una delle principali lingue dell'Etiopia."
        },
        {
            q: "Zanzibar appartiene a quale paese?",
            a: ["Tanzania", "Ghana", "Senegal", "Namibia"],
            c: "Tanzania",
            e: "Zanzibar appartiene alla Tanzania."
        },
        {
            q: "Quale impero dell'Africa occidentale divenne molto potente nel XV e XVI secolo?",
            a: ["Impero Songhai", "Impero Zulu", "Regno del Kongo", "Impero Etiopico"],
            c: "Impero Songhai",
            e: "L'Impero Songhai fu una grande potenza dell'Africa occidentale."
        },
        {
            q: "Quale famoso sovrano è associato all'Impero del Mali?",
            a: ["Mansa Musa", "Shaka Zulu", "Menelik II", "Sundiata Keita"],
            c: "Mansa Musa",
            e: "Mansa Musa fu uno dei sovrani più famosi del Mali."
        },
        {
            q: "Quale strumento a corde è tradizionale dell'Africa occidentale?",
            a: ["Kora", "Djembe", "Ngoma", "Udu"],
            c: "Kora",
            e: "La kora è uno strumento a corde tradizionale dell'Africa occidentale."
        },
        {
            q: "Qual è il ruolo tradizionale di un griot?",
            a: ["Custode della memoria e narratore", "Guerriero", "Navigatore", "Cuoco"],
            c: "Custode della memoria e narratore",
            e: "I griot trasmettono storie, genealogie, musica e conoscenze."
        },
        {
            q: "Quale città africana è famosa per le sue biblioteche e università storiche?",
            a: ["Timbuctù", "Lagos", "Nairobi", "Luanda"],
            c: "Timbuctù",
            e: "Timbuctù fu un importante centro di studi e cultura."
        }
    ],

    3: [
        {
            q: "Quale città fu la capitale dell'Impero Songhai?",
            a: ["Gao", "Dakar", "Kano", "Mogadiscio"],
            c: "Gao",
            e: "Gao fu la capitale dell'Impero Songhai."
        },
        {
            q: "Quale sovrano è considerato il fondatore dell'Impero del Mali?",
            a: ["Sundiata Keita", "Mansa Musa", "Askia Muhammad", "Shaka Zulu"],
            c: "Sundiata Keita",
            e: "Sundiata Keita fondò l'Impero del Mali."
        },
        {
            q: "Quale antica città del Nord Africa fu una grande potenza mediterranea?",
            a: ["Cartagine", "Timbuctù", "Gao", "Benin City"],
            c: "Cartagine",
            e: "Cartagine fu una grande potenza del Mediterraneo antico."
        },
        {
            q: "Quale fiume è generalmente considerato il più lungo dell'Africa?",
            a: ["Nilo", "Congo", "Niger", "Zambesi"],
            c: "Nilo",
            e: "Il Nilo attraversa diversi paesi africani."
        },
        {
            q: "Le Cascate Vittoria si trovano sul fiume...",
            a: ["Zambesi", "Congo", "Nilo", "Niger"],
            c: "Zambesi",
            e: "Le Cascate Vittoria si trovano sul fiume Zambesi."
        },
        {
            q: "Quale lingua utilizza una scrittura derivata dall'antico sistema Ge'ez?",
            a: ["Amarico", "Swahili", "Wolof", "Yoruba"],
            c: "Amarico",
            e: "L'amarico utilizza una scrittura derivata dal sistema Ge'ez."
        },
        {
            q: "Il lingala è particolarmente diffuso in quale area?",
            a: ["Bacino del Congo", "Corno d'Africa", "Maghreb", "Africa australe"],
            c: "Bacino del Congo",
            e: "Il lingala è molto diffuso nella regione del Congo."
        },
        {
            q: "Il Regno del Benin era situato principalmente nell'area dell'attuale...",
            a: ["Nigeria", "Etiopia", "Marocco", "Tanzania"],
            c: "Nigeria",
            e: "Il Regno del Benin era situato nell'attuale Nigeria."
        },
        {
            q: "I famosi Bronzi del Benin sono principalmente realizzati in quale materiale?",
            a: ["Bronzo", "Marmo", "Vetro", "Argento"],
            c: "Bronzo",
            e: "I Bronzi del Benin comprendono numerose sculture in leghe di rame."
        },
        {
            q: "Quale grande regno dell'Africa occidentale era famoso per il commercio dell'oro?",
            a: ["Impero del Ghana", "Regno Zulu", "Impero Etiopico", "Regno del Kongo"],
            c: "Impero del Ghana",
            e: "L'antico Impero del Ghana prosperò anche grazie al commercio dell'oro."
        },
        {
            q: "Quale paese è completamente circondato dal Sudafrica?",
            a: ["Lesotho", "Eswatini", "Botswana", "Namibia"],
            c: "Lesotho",
            e: "Il Lesotho è completamente circondato dal Sudafrica."
        },
        {
            q: "Cabinda appartiene a quale paese?",
            a: ["Angola", "Gabon", "Congo", "Namibia"],
            c: "Angola",
            e: "Cabinda è un'exclave dell'Angola."
        },
        {
            q: "Il maafe è una preparazione diffusa nell'Africa occidentale a base soprattutto di...",
            a: ["Arachidi", "Cocco", "Patate", "Olive"],
            c: "Arachidi",
            e: "Il maafe è uno stufato con una salsa a base di arachidi."
        },
        {
            q: "Il bunny chow è associato soprattutto a quale paese?",
            a: ["Sudafrica", "Egitto", "Ghana", "Senegal"],
            c: "Sudafrica",
            e: "Il bunny chow è un piatto sudafricano originario di Durban."
        },
        {
            q: "Fela Kuti è considerato uno dei principali pionieri di quale genere?",
            a: ["Afrobeat", "Highlife", "Soukous", "Mbalax"],
            c: "Afrobeat",
            e: "Fela Kuti è considerato uno dei principali pionieri dell'afrobeat."
        },
        {
            q: "La musica mbalax è particolarmente associata a quale paese?",
            a: ["Senegal", "Kenya", "Marocco", "Sudafrica"],
            c: "Senegal",
            e: "Il mbalax è un genere musicale particolarmente associato al Senegal."
        },
        {
            q: "In molte tradizioni africane, le maschere rituali possono rappresentare...",
            a: ["Spiriti e antenati", "Solo animali domestici", "Solo strumenti musicali", "Solo sovrani"],
            c: "Spiriti e antenati",
            e: "In diverse tradizioni le maschere possono avere significati spirituali e rituali."
        },
        {
            q: "Quale grande foresta tropicale si trova principalmente nel bacino del Congo?",
            a: ["Foresta del Congo", "Foresta del Sahara", "Foresta del Kalahari", "Foresta del Namib"],
            c: "Foresta del Congo",
            e: "La foresta del bacino del Congo è una delle grandi foreste tropicali del pianeta."
        },
        {
            q: "Qual è la capitale dell'Etiopia?",
            a: ["Addis Abeba", "Asmara", "Mogadiscio", "Khartoum"],
            c: "Addis Abeba",
            e: "Addis Abeba è la capitale dell'Etiopia."
        },
        {
            q: "Dove si trova la sede principale dell'Unione Africana?",
            a: ["Addis Abeba", "Nairobi", "Accra", "Dakar"],
            c: "Addis Abeba",
            e: "La sede principale dell'Unione Africana si trova ad Addis Abeba."
        }
    ]
};


// ==========================================
// 🎮 STATO DEL GIOCO
// ==========================================

let currentLevel = 1;
let questions = [];
let questionIndex = 0;
let score = 0;
let lives = 5;
let timeLeft = 60;
let timer = null;
let answered = false;


// ==========================================
// 🔎 ELEMENTI HTML
// ==========================================

const menu = document.getElementById("menu");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const startButton = document.getElementById("startButton");
const level2Button = document.getElementById("level2Button");
const level3Button = document.getElementById("level3Button");
const againButton = document.getElementById("againButton");
const nextButton = document.getElementById("nextButton");

const livesElement = document.getElementById("lives");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const timerProgress = document.getElementById("timerProgress");

const questionNumberElement = document.getElementById("questionNumber");
const levelElement = document.getElementById("level");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

const explanationElement = document.getElementById("explanation");
const resultMessageElement = document.getElementById("resultMessage");
const explanationTextElement = document.getElementById("explanationText");

const resultTextElement = document.getElementById("resultText");
const finalScoreElement = document.getElementById("finalScore");


// ==========================================
// 🔀 MESCOLA
// ==========================================

function shuffle(array) {

    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}


// ==========================================
// ▶️ AVVIA LIVELLO
// ==========================================

function startLevel(level) {

    clearInterval(timer);

    currentLevel = level;

    questions = shuffle(levels[level]);

    questionIndex = 0;

    score = 0;

    lives = 5;

    menu.classList.add("hidden");
    result.classList.add("hidden");
    quiz.classList.remove("hidden");

    scoreElement.textContent = score;
    livesElement.textContent = lives;

    showQuestion();
}


// ==========================================
// ❓ MOSTRA DOMANDA
// ==========================================

function showQuestion() {

    clearInterval(timer);

    answered = false;

    const question = questions[questionIndex];

    questionNumberElement.textContent = questionIndex + 1;

    levelElement.textContent =
        "🌍 Livello " + currentLevel;

    questionElement.textContent = question.q;

    explanationElement.classList.add("hidden");

    nextButton.classList.add("hidden");

    answersElement.innerHTML = "";

    const mixedAnswers = shuffle(question.a);

    mixedAnswers.forEach(answer => {

        const button = document.createElement("button");

        button.className = "answer";

        button.textContent = answer;

        button.addEventListener("click", () => {
            checkAnswer(answer, question);
        });

        answersElement.appendChild(button);
    });

    startTimer();
}


// ==========================================
// ⏱️ TIMER
// ==========================================

function startTimer() {

    clearInterval(timer);

    timeLeft = 60;

    timerElement.textContent = timeLeft;

    timerProgress.style.width = "100%";
    timerProgress.style.background = "#22c55e";

    timer = setInterval(() => {

        timeLeft--;

        timerElement.textContent = timeLeft;

        const percentage = (timeLeft / 60) * 100;

        timerProgress.style.width =
            percentage + "%";

        if (timeLeft <= 30) {
            timerProgress.style.background = "#f59e0b";
        }

        if (timeLeft <= 10) {
            timerProgress.style.background = "#ef4444";
        }

        if (timeLeft <= 0) {

            clearInterval(timer);

            if (!answered) {
                timeOut();
            }
        }

    }, 1000);
}


// ==========================================
// 🧠 RISPOSTA
// ==========================================

function checkAnswer(answer, question) {

    if (answered) return;

    answered = true;

    clearInterval(timer);

    const buttons =
        document.querySelectorAll(".answer");

    buttons.forEach(button => {

        button.disabled = true;

        if (button.textContent === question.c) {
            button.classList.add("correct");
        }
    });

    if (answer === question.c) {

        score += 10;

        scoreElement.textContent = score;

        resultMessageElement.textContent =
            "✅ Corretto!";

    } else {

        lives--;

        livesElement.textContent = lives;

        const selected =
            [...buttons].find(
                button => button.textContent === answer
            );

        if (selected) {
            selected.classList.add("wrong");
        }

        resultMessageElement.textContent =
            "❌ Risposta sbagliata!";
    }

    explanationTextElement.textContent =
        question.e;

    explanationElement.classList.remove("hidden");

    nextButton.classList.remove("hidden");
}


// ==========================================
// ⏰ TEMPO SCADUTO
// ==========================================

function timeOut() {

    if (answered) return;

    answered = true;

    lives--;

    livesElement.textContent = lives;

    const question = questions[questionIndex];

    const buttons =
        document.querySelectorAll(".answer");

    buttons.forEach(button => {

        button.disabled = true;

        if (button.textContent === question.c) {
            button.classList.add("correct");
        }
    });

    resultMessageElement.textContent =
        "⏰ Tempo scaduto!";

    explanationTextElement.textContent =
        question.e;

    explanationElement.classList.remove("hidden");

    nextButton.classList.remove("hidden");
}


// ==========================================
// ➡️ PROSSIMA DOMANDA
// ==========================================

function nextQuestion() {

    if (!answered) return;

    if (lives <= 0) {

        finishGame(false);

        return;
    }

    questionIndex++;

    if (questionIndex >= 20) {

        finishGame(true);

        return;
    }

    showQuestion();
}


// ==========================================
// 🏆 FINE
// ==========================================

function finishGame(completed) {

    clearInterval(timer);

    quiz.classList.add("hidden");

    result.classList.remove("hidden");

    finalScoreElement.textContent = score;

    level2Button.classList.add("hidden");
    level3Button.classList.add("hidden");

    if (!completed) {

        resultTextElement.textContent =
            "❤️ Hai perso tutte le vite. Riprova!";

        return;
    }

    if (currentLevel === 1) {

        resultTextElement.textContent =
            "🎉 Livello 1 completato!";

        level2Button.classList.remove("hidden");

    } else if (currentLevel === 2) {

        resultTextElement.textContent =
            "🔥 Livello 2 completato!";

        level3Button.classList.remove("hidden");

    } else {

        resultTextElement.textContent =
            "🏆 Complimenti! Hai completato tutti e 3 i livelli!";
    }
}


// ==========================================
// 🔘 PULSANTI
// ==========================================

startButton.addEventListener("click", () => {
    startLevel(1);
});

level2Button.addEventListener("click", () => {
    startLevel(2);
});

level3Button.addEventListener("click", () => {
    startLevel(3);
});

againButton.addEventListener("click", () => {
    startLevel(currentLevel);
});

nextButton.addEventListener("click", nextQuestion);