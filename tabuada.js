const frm = document.querySelector("form")
const resp1 = document.getElementById("inDiv1")
const resp2 = document.getElementById("inDiv2")
const resp3 = document.getElementById("inDiv3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero1 = Number(frm.inNumero1.value)
    const numero2 = Number(frm.inNumero2.value)
    const numero3 = Number(frm.inNumero3.value)


    function calcularTabuada(numero) {
        let resultado = ""
        for (let i = 1; i <= 10; i++) {
            resultado += numero + " x " + i + " = " + (numero * i) + "\n"
        }
        return resultado
    }

    resp1.innerText = calcularTabuada(numero1)
    resp2.innerText = calcularTabuada(numero2)
    resp3.innerText = calcularTabuada(numero3)

})
/*
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero1 = Number(frm.inNumero1.value)
    let resultado1 = ""
    for (let i = 1; i <= 10; i++) {
        resultado1 = resultado1 + numero1  + "x" + i + " = " + (numero1 * i) + "\n"
    }
    resp1.innerText = resultado1
    })
    
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero2 = Number(frm.inNumero2.value)
    let resultado2 = ""
    for (let i = 1; i <= 10; i++) {
        resultado2 = resultado2 + numero2  + "x" + i + " = " + (numero2 * i) + "\n"
    }
    resp2.innerText = resultado2
    })

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero3 = Number(frm.inNumero3.value)
    let resultado3 = ""
    for (let i = 1; i <= 10; i++) {
        resultado3 = resultado3 + numero3  + "x" + i + " = " + (numero3 * i) + "\n"
    }
    resp3.innerText = resultado3
    })
*/

/*

(e){
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let resultado = ""
    for (let i = 1; i <= 10; i++) {
        resultado += numero  + "x" + i + " = " + (munero * i) + "\n"
    }
    resp.innerText = resultado
}
*/