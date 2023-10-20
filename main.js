const grandeImage = document.querySelector(".bigImage")
const un = document.querySelector(".un")
const deux = document.querySelector(".deux")
const trois = document.querySelector(".trois")

const avant = document.querySelector(".last")
const apres = document.querySelector(".next")

let liste_image = ["img1", 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8']
let a = 0
let b = 1
let c = 2
let d = 3
grandeImage.classList.add(liste_image[a])
un.classList.add(liste_image[b])
deux.classList.add(liste_image[c])
trois.classList.add(liste_image[d])
console.log(a, b, c, d)

function verifierafter(elt) {

    if (elt === liste_image.length - 1) {
        return 0
    } else {
        return elt + 1
    }
}

function verifierbefore(elt) {

    if (elt === 0) {
        return liste_image.length-1
    } else {
        return elt - 1
    }
}
function before() {
    grandeImage.classList.remove(liste_image[a])
    un.classList.remove(liste_image[b])
    deux.classList.remove(liste_image[c])
    trois.classList.remove(liste_image[d])
    a = verifierbefore(a)
    b = verifierbefore(b)
    c = verifierbefore(c)
    d = verifierbefore(d)
    console.log(a, b, c, d)
    grandeImage.classList.add(liste_image[a])
    un.classList.add(liste_image[b])
    deux.classList.add(liste_image[c])
    trois.classList.add(liste_image[d])
}

function after() {
    grandeImage.classList.remove(liste_image[a])
    a = verifierafter(a)
    grandeImage.classList.add(liste_image[a])

    un.classList.remove(liste_image[b])
    b = verifierafter(b)
    un.classList.add(liste_image[b])

    deux.classList.remove(liste_image[c])
    c = verifierafter(c)
    deux.classList.add(liste_image[c])

    trois.classList.remove(liste_image[d])
    d = verifierafter(d)
    trois.classList.add(liste_image[d])







}

avant.addEventListener('click', before)
apres.addEventListener('click', after)