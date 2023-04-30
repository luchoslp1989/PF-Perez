// capturo formularios
const formulario = document.getElementById('registro');

const formLogin = document.getElementById('login');

let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// recupero usuarios de localStorage cada vez que se reinicia el script para mantener mi array actualizado
//recuperoUsuariosDeLocal();

// registro un nuevo usuairo y lo guarda en localStorage
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

    guardarEnLocalStorage(usuario);

   
};

//recibe un usuario, lo mete al array de usuarios y lo guarda en localStorage
 function guardarEnLocalStorage(usuario) {
        usuarios.push(usuario);

        let usuariosJson = JSON.stringify(usuarios);

        localStorage.setItem('usuarios', usuariosJson);

        // borro mensaje de email registrado si se pinto antes
        const container = document.querySelector('#emailRegistrado');
        existeMensaje(container);
    }

//Pinta Bienvenida en el DOM si se logea Exitosamente 
const pintarBienvenida = ({nombre,email}) => {
    const container = document.querySelector('#bienvenidaLogin')

    const div = document.createElement('div')
        div.id = "miDiv"
        div.innerHTML = `<div class="card mb-3 d-flex align-items-stretch  container-fluid d-grid">
                            <div class="card text-success tituloMd align-self-center"> Bienvenido ${nombre}!!  </div>
                            <div class="col-md-4 d-flex justify-content-center align-self-center">
                                <img src="../img/ruta6Bienvenido.webp" class="img-fluid rounded-start" alt="Cabaña en construccion">
                            </div>
                            <div class="card text-success tituloMd align-self-center"> Email registrado: ${email}  </div>
                        <div>
        `
    container.appendChild(div)
};


const loginUsuario = () => {
    const email = document.getElementById('emailLogin').value;
    const pass = document.getElementById('passwordLogin').value;
    
    existeUsuario(email, pass);
};

formulario.addEventListener('submit',(e) => {
    e.preventDefault()

    registroUsuario()
})

formLogin.addEventListener('submit',(e) => {
    e.preventDefault()

    loginUsuario()

})

//Verifica si el usuario ya esta registrado
function existeUsuario(email, pass) {
    let encontrado = false
    for (const usuario of usuarios) {
        if (usuario.email === email && usuario.password == pass) {
            encontrado = true
            formLogin.style.display = 'none';
            formulario.style.display = 'none';
            pintarBienvenida(usuario);
            break;
        }
        
    }
    if (!encontrado){
        pintarNoEncontrado();
    }
}

// recupero, si existen, todos los usuario del localStorage
// function recuperoUsuariosDeLocal() {
//     let usuariosRec = localStorage.getItem('usuarios');
//     if(usuariosRec){
//     usuariosRec = JSON.parse(usuariosRec);
//     for (const usuario of usuariosRec) {
//         usuarios.push(usuario)
//     }
//     }
// }

// Verifica si ya existe en el dom el mensaje de email registrado, y lo elimina
function existeMensaje(container) {
    const miDiv = document.querySelector("#emailRegistrado #miDiv")
    if (miDiv) {
      container.removeChild(miDiv)
    }
  }

// pinta mensaje de email ya registrado
const pintarMensaje = (nombre) => {
    const container = document.querySelector('#emailRegistrado')

    existeMensaje(container)

    const div = document.createElement('div')
        div.id = "miDiv"
        div.innerHTML = `<div class="text-danger"> Esta email ya se encuentra registrado  </div>`
    container.appendChild(div)

};

// Verifica si ya existe en el dom el mensaje de usuario no encontrado, y lo elimina
function existeMensajeNoEncontrado(container) {
    const miDiv = document.querySelector("#emailUsuarioNoEncontrado #miDiv")
    if (miDiv) {
      container.removeChild(miDiv)
    }
  }

// pinta el mensaje de usuario no encontrado
const pintarNoEncontrado = () => {
    const container = document.querySelector('#emailUsuarioNoEncontrado')

    existeMensajeNoEncontrado(container)

    const div = document.createElement('div')
        div.id = "miDiv"
        div.innerHTML = `<div class="text-danger"> Usuario no encontrado  </div>`
    container.appendChild(div)
};
