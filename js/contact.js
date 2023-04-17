const formulario = document.getElementById('form')

const nombre = document.getElementById('name')
const telefono = document.getElementById('phone')
const email = document.getElementById('email')
const mensaje = document.getElementById('message')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    pintarMensaje(nombre.value)

    guardarSolicitud(nombre.value,telefono.value,email.value,mensaje.value)

})

// si ya existe un div creado anteriormente, lo elimmino del dom
function existeMensaje(container) {
    const miDiv = document.querySelector("#containerMensaje #miDiv")
    if (miDiv) {
      container.removeChild(miDiv)
    }
  }

  //pintaMensaje en el dom
const pintarMensaje = (nombre) => {
    const container = document.querySelector('#containerMensaje')

    
    existeMensaje(container)

    const div = document.createElement('div')
        div.className = 'card w-100 h-100'
        div.id = 'miDiv'
        div.innerHTML = `
                <div class="card-body">
                    <p class="mx-3 card-text">Hola ${nombre}. Gracias por tu mensaje. Responderemos a la brevedad. Si queres comunicarte directamente con la administracion, hace click en el siguiente boton.</p>
                    <div class="d-flex justify-content-end">
                        <a href="https://api.whatsapp.com/send?phone=541159429901" target="_blank" class="btn btnWap btn-success me-3">Escribinos por Whatsapp</a>
                    </div>
                </div>
        `
    container.appendChild(div)

};

const contactos = []

// Instancia un objeto Contacto, lo pushea en un array y lo guarda en el localStorage
const guardarSolicitud = (nombre,telefono,email,mensaje) => {
    const contacto = new Contacto(nombre,telefono,email,mensaje)

    contactos.push(contacto);

    let contactosJson = JSON.stringify(contactos);

    localStorage.setItem('contactos', contactosJson)


};

// recuperar las solicitudes de localStorage y retorna un array de objetos de tipo Contacto
const recuperarSolicitud = () => {
    const contactosJson = localStorage.getItem('contactos')

    const contactosParse = JSON.parse(contactosJson)

    return contactosParse
};

