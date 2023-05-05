// capturo formRegistros
const formRegistro = document.getElementById('registro');
const formLogin = document.getElementById('login');

// recupero usuaarios de localStorage si existen, sino, creo un array vacio
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// registro un nuevo usuairo y lo guarda en localStorage
const registroUsuario = () => {

    const nombre = document.getElementById('name').value;
    const apellido = document.getElementById('lastname').value;
    const email = document.getElementById('emailRegistro').value;
    const pass = document.getElementById('passwordRegistro').value;

    // consulta si el email ya se registro anteriormente
    const emailRegistrado = usuarios.some( usuario => usuario.email === email)

    if (emailRegistrado) {
        errorRegistro()
        return
    }
    // instancio un objeto de clase usuario
    const usuario = new Usuario(nombre, apellido, email, pass)

    guardarEnLocalStorage(usuario);

};

//recibe un usuario, lo mete al array de usuarios y lo guarda en localStorage
 function guardarEnLocalStorage(usuario) {
        usuarios.push(usuario);

        let usuariosJson = JSON.stringify(usuarios);

        localStorage.setItem('usuarios', usuariosJson);
    }

//Pinta Bienvenida en el DOM si se logea Exitosamente 
const pintarBienvenida = ({nombre,email}) => {
    const container = document.querySelector('#bienvenidaLogin')

    const div = document.createElement('div')
        div.id = "miDiv"
        div.innerHTML = `<div class="container-fluid my-5">
        <div class="row">
          <div class="col-md-6 offset-3">
              <div class="card mb-3" style="max-width: 540px;">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="../img/empty.png" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h3 class="card-title">Nombre</h3>
                        <p class="card-text">${nombre}</p>
                        <h3 class="card-title">Email</h3>
                        <p class="card-text">${email}</p>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
        `
    container.appendChild(div)
};

const pintarNav = ({nombre}) => {
    const itemLoginNav = document.getElementById('loginPage')

    const div = document.createElement('div')
    div.innerHTML = `<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        ${nombre}
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="../pages/login.html">Cerrar sesión</a></li>
                    </ul>
                    `

    itemLoginNav.innerHTML = ''
    itemLoginNav.appendChild(div)
};


const loginUsuario = () => {
    const email = document.getElementById('emailLogin').value;
    const pass = document.getElementById('passwordLogin').value;
    
    existeUsuario(email, pass);
};

formRegistro.addEventListener('submit',(e) => {
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
        if (usuario.email === email && usuario.password === pass) {
            alertLoginSuccess(usuario)
            encontrado = true
            formLogin.style.display = 'none';
            formRegistro.style.display = 'none';
            pintarBienvenida(usuario);
            pintarNav(usuario);
            break;
        }
    }
    if (!encontrado){
        errorLogin()
    }
}
// sweetAlert de logeo exitoso
const alertLoginSuccess = ({nombre}) => {
    Swal.fire({
        icon: 'success',
        title: 'Ingreso exitoso',
        text: 'Bienvenido '+ nombre+'!',
        showConfirmButton: false,
        timer: 2000
    })

};
// Toastify de error login
const errorLogin = () => {
    Toastify({
        text: 'Email o contraseña inconrrecta.\n Intente nuevamente.',
        duration: 1500,
        gravity: 'bottom',
        position: 'right',
        style:{
            background: "linear-gradient(90deg, rgba(217,43,78,1) 35%, rgba(232,92,109,1) 100%)"
        }
    }).showToast()
};
// toastify email registrado anteriormente
const errorRegistro = () => {
    Toastify({
        text: 'Este email ya fue registrado anteriormente.',
        duration: 1500,
        gravity: 'bottom',
        position: 'right',
        style:{
            background: "linear-gradient(90deg, rgba(217,43,78,1) 35%, rgba(232,92,109,1) 100%)"
        }
    }).showToast()
};