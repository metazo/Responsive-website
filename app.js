// On charge les informations utiles
const statut = document.querySelector("h2")
let jeuActif = true
let joueurActif = "X"
let etatJeu = ["", "", "", "", "", "", "", "", ""]

// On définit les conditions de victoire
const conditionsVictoire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// Messages
const gagne = () => `Le joueur ${joueurActif} a gagné`
const egalite = () => "Egalité"
const tourJoueur = () => `C'est au tour du joueur ${joueurActif}`

// On affiche quel joueur commence
statut.innerHTML = tourJoueur()

// On met en place les écouteurs d'évènements
document.querySelectorAll(".case").forEach(cell => cell.addEventListener("click", gestionClicCase))
document.querySelector("#recommencer").addEventListener("click", recommencer)

/**
 * Cette fonction gère le clic sur les cases du jeu
 */
function gestionClicCase(){
    // On récupère l'index de la case cliquée
    const indexCase = parseInt(this.dataset.index)
    
    // On vérifie si la case est déjà remplie ou le jeu terminé
    if(etatJeu[indexCase] !== "" || !jeuActif){
        return
    }

    // On écrit le symbole du joueur dans le tableau etatJeu et la case
    etatJeu[indexCase] = joueurActif
    this.innerHTML = joueurActif

    // On vérifie si le joueur a gagné
    verifGagne() 
}