
let personas = JSON.parse(localStorage.getItem('personas-tp8')) || [
    {
        nombre: "George",
        celular: 12345678
    }, {
        nombre: "profe",
        celular: 87654321
    },
    {
        nombre: "matias",
        celular: 3333333
    }
]

const lista = document.getElementById('lista')
let formPersonas = document.getElementById('formulario')
mostrarPersonas()

formPersonas = addEventListener('submit',agregarPersona)

//funciones
function mostrarPersonas() {
    lista.innerHTML = ""
    personas.forEach((persona) => {
        const puntito = document.createElement('li')
        const contenido = `nombre: ${persona.nombre} celular: ${persona.celular}`
        puntito.innerHTML = contenido
        lista.appendChild(puntito)
    })
}

function agregarPersona(e) {
    e.preventDefault();
    let nombre = document.getElementById('nombre')
    let celular = document.getElementById('celular')
    let persona = {
        nombre : nombre.value,
        celular :celular.value
    }
    personas.push(persona)
    localStorage.setItem('personas-tp8', JSON.stringify(personas))
    mostrarPersonas()
}