

function generateNumber() {
    const resultSort  = document.querySelector("div").value

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    const resultadoDiv = document.getElementById("numeroSorteado");
    resultadoDiv.textContent = result;

}

