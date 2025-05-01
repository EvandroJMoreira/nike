let body = document.querySelector("body");
let tenis = document.querySelector(".img-tenis");

function mudarVisual(cor, img) {
    tenis.classList.add("troca-efeito")

    body.style.backgroundColor = cor;
    
    body.style.transition = "background-color 0.5s ease-in-out";

    setTimeout(() => {
        tenis.src = img;
        tenis.classList.remove("troca-efeito")
    }, 200);
}