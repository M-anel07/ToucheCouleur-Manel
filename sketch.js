let mots = ["Rouge", "Marron", "Violet", "Vert", "Orange", "Beige", "Rose", "Bleu", "Jaune", "Cyan", "Noir", "Blanc"];
let palettes = ["#37579b", "#ad0101", "#800080", "#008000", "#ff0000", "#7f7f08", "#6d1524", "#156d1c", "#5a1593", "#7c3e00" ];
let score = 0;

let lesX = [];
let lesY = [];
let couleurAttribuee = [];

function setup() {
    createCanvas(600, 600);
    textSize(20);
    textAlign(CENTER, CENTER);
    nouveauTour();
}

function draw() {
    background(220);
    fill(0);
    text("Objectif : Appuyer sur le mot rouge - Score : " + score,  width / 2, 30);

    for (let i = 0; i < 9; i++) {
        fill(couleurAttribuee[i]);
        text(mots[i], lesX[i], lesY[i]);
    }
}

function nouveauTour() {
    lesX = [];
    lesY = [];
    couleurAttribuee = [];

    //Diviser la frame en une grille de 3x3

    let cases = [
        {x: random(120, 180), y: random(80, 120)},
        {x: random(270, 330), y: random(80, 120)},
        {x: random(420, 480), y: random(80, 120)},
        {x: random(120, 180), y: random(180, 220)},
        {x: random(270, 330), y: random(180, 220)},
        {x: random(420, 480), y: random(180, 220)},
        {x: random(120, 180), y: random(280, 320)},
        {x: random(270, 330), y: random(280, 320)},
        {x: random(420, 480), y: random(280, 320)}
    ];

    shuffle(cases, true); // Mélanger les cases pour une distribution aléatoire

    //On fait les positions aléatoires des mots

    for (let i = 0; i < 9; i++) {
        lesX.push(cases[i].x);
        lesY.push(cases[i].y);

        let couleurHasard = random(palettes);
        couleurAttribuee.push(couleurHasard);
    }
}

function mousePressed() {
    //On calcule la distance entre la souris et le mot "ROUGE"
    // (lesX[0] et lesY[0] sont les coordonnées de "ROUGE" car c'est le premier de ta liste)
    let d = dist(mouseX, mouseY, lesX[0], lesY[0]);

    //Si la distance est inférieure à 40 pixels (la zone du mot)
    if (d < 50) { 
        score++;
        nouveauTour();
    } else {
        alert("Raté recommence!");
        score = 0; // Réinitialiser le score
        nouveauTour(); 
    }
}