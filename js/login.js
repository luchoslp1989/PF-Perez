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

    const usuario = new Usuario(nombre, apellido, email, pass)

    usuarios.push(usuario)

    let usuariosJson = JSON.stringify(usuarios)

    localStorage.setItem('usuarios', usuariosJson);
};

formulario.addEventListener('submit',(e) => {
    e.preventDefault()

    registroUsuario()
})

formLogin.addEventListener('submit',(e) => {
    e.preventDefault()

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
