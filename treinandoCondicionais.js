// Treinando condicionais - Encontre o seu mundo:
let partiuNarnia = true;
let digoryEPolly = false;
let irmaosNarnia = false;
let vouNada = true;
let hogwarts = false;
let hobbits = false;
let twoBreakfasts = false;
let lucas = true;
let cadePapai = true;

if (partiuNarnia && digoryEPolly) {
    console.log("Nárnia existe!");
} else if (partiuNarnia === digoryEPolly || irmaosNarnia) {
    console.log("Certamente alguém andou por Nárnia");
} else if (vouNada && hogwarts) {
    console.log("Na verdade eu recebi minha carta, partiu Hogwarts!");
} else if (partiuNarnia === twoBreakfasts || hobbits) {
    console.log("OMG, você é um Hobbit!");
} else if (partiuNarnia === cadePapai && lucas) {
    console.log("Universo errado, seu pai está em Star Wars");
} else {
    console.log("Sério? De que mundo você é?");
}
