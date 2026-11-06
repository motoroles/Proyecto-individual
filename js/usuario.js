
let usuarios = [];

function mostrar(id) {
    document.querySelectorAll(".pantalla").forEach(p => {
        p.classList.add("oculto");
    });

    document.getElementById(id).classList.remove("oculto");
}

// REGISTRAR USUARIO
function registrar() {
    let nombre = document.getElementById("nuevoUsuario").value.trim();
    let correo = document.getElementById("nuevoCorreo").value.trim();
    let clave = document.getElementById("nuevaClave").value;

    if (!nombre || !correo || !clave) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (clave.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    let existe = usuarios.find(u =>
        u.correo.toLowerCase() === correo.toLowerCase()
    );

    if (existe) {
        alert("Este correo ya está registrado.");
        return;
    }

    usuarios.push({
        nombre: nombre,
        correo: correo,
        clave: clave
    });

    alert("¡Cuenta creada correctamente!");

    document.getElementById("nuevoUsuario").value = "";
    document.getElementById("nuevoCorreo").value = "";
    document.getElementById("nuevaClave").value = "";

    mostrar("login");
}

// INICIAR SESION
function iniciarSesion() {
    let nombre = document.getElementById("usuario").value.trim();
    let clave = document.getElementById("clave").value;

    let usuario = usuarios.find(u =>
        u.nombre.toLowerCase() === nombre.toLowerCase() &&
        u.clave === clave
    );

    if (usuario) {
        document.getElementById("nombreBienvenida").textContent =
            usuario.nombre;

        mostrar("bienvenida");
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

// RECUPERAR USUARIO
function recuperarUsuario() {
    let correo = document.getElementById("correoUsuario").value.trim();

    let usuario = usuarios.find(u =>
        u.correo.toLowerCase() === correo.toLowerCase()
    );

    if (usuario) {
        alert("Tu nombre de usuario es: " + usuario.nombre);
    } else {
        alert("No encontramos una cuenta con ese correo.");
    }
}

// CAMBIAR CONTRASEÑA
function cambiarClave() {
    let correo = document.getElementById("correoClave").value.trim();
    let nueva = document.getElementById("claveNueva").value;

    let usuario = usuarios.find(u =>
        u.correo.toLowerCase() === correo.toLowerCase()
    );

    if (!usuario) {
        alert("No encontramos ese correo.");
        return;
    }

    if (nueva.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    usuario.clave = nueva;

    alert("¡Tu contraseña fue actualizada!");

    document.getElementById("correoClave").value = "";
    document.getElementById("claveNueva").value = "";

    mostrar("login");
}

// CERRAR SESION
function cerrarSesion() {
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";

    mostrar("login");
}
