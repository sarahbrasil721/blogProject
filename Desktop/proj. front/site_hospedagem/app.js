const root = document.documentElement;
const btn = document.getElementById("btnTema");
const ano = document.getElementById("ano")

ano.textContent = new Date().getFullYear()

btn.addEventListener("click", () => {
    const escuro = root.getAttribute("data-tema") === 'escuro'

    if (escuro) {
        root.removeAttribute("data-tema")
    } else {
        root.setAttribute("data-tema", "escuro")
    }
})