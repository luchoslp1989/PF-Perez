const formulario = document.getElementById('form')

const nombre = document.getElementById('name')
const telefono = document.getElementById('phone')
const email = document.getElementById('email')
const mensaje = document.getElementById('message')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    pintarMensaje(nombre.value)
})

const pintarMensaje = (nombre) => {
    const container = document.querySelector('#containerMensaje')
    const div = document.createElement('div')
        div.className = 'card w-100 h-100'
        div.innerHTML = `
                <div class="card-body">
                <p class="card-text">Hola ${nombre}.
                Gracias por tu mensaje. Responderemos a la brevedad.
                Si queres comunicarte directamente con la administracion,
                hace click en el siguiente boton.</p>
                <a href="https://api.whatsapp.com/send?phone=541159429901" target="_blank" class="btn btn-primary">Enviar mensaje directo</a>
                </div>
        `
    container.appendChild(div)
};