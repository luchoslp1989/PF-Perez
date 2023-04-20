const formulario = document.getElementById('registro');

const formLogin = document.getElementById('login');

let usuarios = []

// recupero usuarios de localStorage cada vez que se reinicia el script para mantener mi array actualizado
recuperoUsuariosDeLocal();


const registroUsuario = () => {

    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lastname').value;
    const email = document.getElementById('emailRegistro').value;
    const pass = document.getElementById('passwordRegistro').value;

    const emailRegistrado = usuarios.some( usuario => usuario.email === email)

    if(emailRegistrado){
        pintarMensaje()
        return
    }

    const usuario = new Usuario(nombre, apellido, email, pass)

    usuarios.push(usuario)

    let usuariosJson = JSON.stringify(usuarios)

    localStorage.setItem('usuarios', usuariosJson);
};

const loginUsuario = () => {
    
};

formulario.addEventListener('submit',(e) => {
    e.preventDefault()

    registroUsuario()
})

formLogin.addEventListener('submit',(e) => {
    e.preventDefault()

    loginUsuario()

})

function recuperoUsuariosDeLocal() {
    if(localStorage.length > 0){
    let usuariosRec = localStorage.getItem('usuarios');

    usuariosRec = JSON.parse(usuariosRec);
    for (const usuario of usuariosRec) {
        usuarios.push(usuario)
    }
    }
}

function existeMensaje(container) {
    const miDiv = document.querySelector("#emailRegistrado #miDiv")
    if (miDiv) {
      container.removeChild(miDiv)
    }
  }

const pintarMensaje = (nombre) => {
    const container = document.querySelector('#emailRegistrado')

    existeMensaje(container)

    const div = document.createElement('div')
        div.id = "miDiv"
        div.innerHTML = `<div class="text-danger"> Esta email ya se encuentra registrado  </div>`
    container.appendChild(div)

};
