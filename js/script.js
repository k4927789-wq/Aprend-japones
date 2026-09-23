// DATOS COMPLETOS DE HIRAGANA
const hiraganaData = [
    { jp: 'あ', r: 'a' }, { jp: 'い', r: 'i' }, { jp: 'う', r: 'u' }, { jp: 'え', r: 'e' }, { jp: 'お', r: 'o' },
    { jp: 'か', r: 'ka' }, { jp: 'き', r: 'ki' }, { jp: 'く', r: 'ku' }, { jp: 'け', r: 'ke' }, { jp: 'こ', r: 'ko' },
    { jp: 'さ', r: 'sa' }, { jp: 'し', r: 'shi' }, { jp: 'す', r: 'su' }, { jp: 'せ', r: 'se' }, { jp: 'そ', r: 'so' },
    { jp: 'た', r: 'ta' }, { jp: 'ち', r: 'chi' }, { jp: 'つ', r: 'tsu' }, { jp: 'て', r: 'te' }, { jp: 'と', r: 'to' },
    { jp: 'な', r: 'na' }, { jp: 'に', r: 'ni' }, { jp: 'ぬ', r: 'nu' }, { jp: 'ね', r: 'ne' }, { jp: 'の', r: 'no' },
    { jp: 'は', r: 'ha' }, { jp: 'ひ', r: 'hi' }, { jp: 'ふ', r: 'fu' }, { jp: 'へ', r: 'he' }, { jp: 'ほ', r: 'ho' },
    { jp: 'ま', r: 'ma' }, { jp: 'み', r: 'mi' }, { jp: 'む', r: 'mu' }, { jp: 'め', r: 'me' }, { jp: 'も', r: 'mo' },
    { jp: 'や', r: 'ya' }, { jp: 'ゆ', r: 'yu' }, { jp: 'よ', r: 'yo' },
    { jp: 'ら', r: 'ra' }, { jp: 'り', r: 'ri' }, { jp: 'る', r: 'ru' }, { jp: 'れ', r: 're' }, { jp: 'ろ', r: 'ro' },
    { jp: 'わ', r: 'wa' }, { jp: 'を', r: 'wo' }, { jp: 'ん', r: 'n' }
];

// DATOS COMPLETOS DE KATAKANA
const katakanaData = [
    { jp: 'ア', r: 'a' }, { jp: 'イ', r: 'i' }, { jp: 'ウ', r: 'u' }, { jp: 'エ', r: 'e' }, { jp: 'オ', r: 'o' },
    { jp: 'カ', r: 'ka' }, { jp: 'キ', r: 'ki' }, { jp: 'ク', r: 'ku' }, { jp: 'ケ', r: 'ke' }, { jp: 'コ', r: 'ko' },
    { jp: 'サ', r: 'sa' }, { jp: 'シ', r: 'shi' }, { jp: 'ス', r: 'su' }, { jp: 'セ', r: 'se' }, { jp: 'ソ', r: 'so' },
    { jp: 'タ', r: 'ta' }, { jp: 'チ', r: 'chi' }, { jp: 'ツ', r: 'tsu' }, { jp: 'テ', r: 'te' }, { jp: 'ト', r: 'to' },
    { jp: 'ナ', r: 'na' }, { jp: 'ニ', r: 'ni' }, { jp: 'ヌ', r: 'nu' }, { jp: 'ネ', r: 'ne' }, { jp: 'ノ', r: 'no' },
    { jp: 'ハ', r: 'ha' }, { jp: 'ヒ', r: 'hi' }, { jp: 'フ', r: 'fu' }, { jp: 'ヘ', r: 'he' }, { jp: 'ホ', r: 'ho' },
    { jp: 'マ', r: 'ma' }, { jp: 'ミ', r: 'mi' }, { jp: 'ム', r: 'mu' }, { jp: 'メ', r: 'me' }, { jp: 'モ', r: 'mo' },
    { jp: 'ヤ', r: 'ya' }, { jp: 'ユ', r: 'yu' }, { jp: 'ヨ', r: 'yo' },
    { jp: 'ラ', r: 'ra' }, { jp: 'リ', r: 'ri' }, { jp: 'ル', r: 'ru' }, { jp: 'レ', r: 're' }, { jp: 'ロ', r: 'ro' },
    { jp: 'ワ', r: 'wa' }, { jp: 'ヲ', r: 'wo' }, { jp: 'ン', r: 'n' }
];

// VOCABULARIO
const vocabData = [
    { jp: 'パン', r: 'Pan', es: 'Pan 🥖' },
    { jp: 'ねこ', r: 'Neko', es: 'Gato' },
    { jp: 'いぬ', r: 'Inu', es: 'Perro' },
    { jp: 'みず', r: 'Mizu', es: 'Agua' },
    { jp: 'ほん', r: 'Hon', es: 'Libro' },
    { jp: 'うた', r: 'Uta', es: 'Canción' },
    { jp: 'たべもの', r: 'Tabemono', es: 'Comida' },
    { jp: 'ともだち', r: 'Tomodachi', es: 'Amigo' },
    { jp: 'せんせい', r: 'Sensei', es: 'Maestro' },
    { jp: 'がっこう', r: 'Gakkou', es: 'Escuela' },
    { jp: 'くるま', r: 'Kuruma', es: 'Auto' },
    { jp: 'さくら', r: 'Sakura', es: 'Flor de cerezo' }
];

// FRASES ÚTILES
const phrasesData = [
    { jp: 'こんにちは', r: 'Konnichiwa', es: 'Hola' },
    { jp: 'ありがとう', r: 'Arigatou', es: 'Gracias' },
    { jp: 'すみません', r: 'Sumimasen', es: 'Disculpa / Perdón' },
    { jp: 'さようなら', r: 'Sayounara', es: 'Adiós' },
    { jp: 'おはようございます', r: 'Ohayou gozaimasu', es: 'Buenos días' },
    { jp: 'おやすみなさい', r: 'Oyasuminasai', es: 'Buenas noches' },
    { jp: 'いただきます', r: 'Itadakimasu', es: 'Buen provecho' },
    { jp: 'おねがいします', r: 'Onegaishimasu', es: 'Por favor' }
];

// NAVEGACIÓN ENTRE PESTAÑAS
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));

        btn.classList.add('active');
        const tabId = btn.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');

        if (tabId === 'practica') nextQuestion();
    });
});

// GENERAR TARJETAS EN PANTALLA
function renderCards(data, containerId, hasEs = false) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="jp">${item.jp}</div>
            <div class="romaji">${item.r}</div>
            ${hasEs ? `<div class="es">${item.es}</div>` : ''}
        `;
        container.appendChild(card);
    });
}

// CARGAR DATOS EN LA PÁGINA
renderCards(hiraganaData, 'hiragana-grid');
renderCards(katakanaData, 'katakana-grid');
renderCards(vocabData, 'vocab-grid', true);
renderCards(phrasesData, 'phrases-grid', true);

// SISTEMA DE TRADUCCIÓN INTERACTIVO
async function translateText() {
    const text = document.getElementById('spanish-input').value.trim();
    const resultBox = document.getElementById('translation-result');

    if (!text) return;

    document.getElementById('res-japanese').innerText = "Cargando...";
    document.getElementById('res-romaji').innerText = "...";
    document.getElementById('res-furigana').innerText = "...";
    document.getElementById('res-meaning').innerText = "...";
    resultBox.classList.remove('hidden');

    try {
        const res = await fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=ja&dt=t&dt=rm&q=${encodeURIComponent(text)}`);
        const data = await res.json();

        const translation = data[0][0][0];
        let romaji = (data[0][1] && data[0][1][2]) ? data[0][1][2] : "No disponible";

        document.getElementById('res-japanese').innerText = translation;
        document.getElementById('res-romaji').innerText = romaji;
        document.getElementById('res-furigana').innerText = translation;
        document.getElementById('res-meaning').innerText = text;
    } catch (e) {
        document.getElementById('res-japanese').innerText = "Error en la traducción";
        document.getElementById('res-romaji').innerText = "Intenta de nuevo.";
    }
}

// SISTEMA DE QUIZ / PRÁCTICA
const quizQuestions = [
    { char: 'あ', answer: 'a', options: ['a', 'i', 'ka', 'e'] },
    { char: 'い', answer: 'i', options: ['u', 'i', 'o', 'ki'] },
    { char: 'カ', answer: 'ka', options: ['ko', 'ke', 'ka', 'a'] },
    { char: 'パン', answer: 'Pan', options: ['Agua', 'Pan', 'Gato', 'Libro'] },
    { char: 'ありがとう', answer: 'Gracias', options: ['Hola', 'Adiós', 'Gracias', 'Perdón'] },
    { char: 'さようなら', answer: 'Adiós', options: ['Hola', 'Adiós', 'Gracias', 'Por favor'] }
];

function nextQuestion() {
    const q = quizQuestions[Math.floor(Math.random() * quizQuestions.length)];
    document.getElementById('quiz-target').innerText = q.char;
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    document.getElementById('feedback').innerText = '';

    let options = [...q.options].sort(() => Math.random() - 0.5);

    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if (opt === q.answer) {
                document.getElementById('feedback').style.color = '#00ffcc';
                document.getElementById('feedback').innerText = '¡Correcto! ✨';
                setTimeout(nextQuestion, 1200);
            } else {
                document.getElementById('feedback').style.color = '#ff2a55';
                document.getElementById('feedback').innerText = 'Inténtalo de nuevo ❌';
            }
        };
        container.appendChild(btn);
    });
}
  
