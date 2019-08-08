//promesas con ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {

    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamado a ajax
    const xhr = new XMLHttpRequest();

    //Abrir la conexion
    xhr.open('GET', api, true);

    //on load
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }

    }

    //opcional on error
    xhr.onerror = (error) => reject(error);

    //send
    xhr.send();


});

descargarUsuarios(30)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error('Hubo un error ' + error)
        )
    );


function imprimirHTML(usuarios) {
    let html = '';
    usuarios.forEach(e => {
       html+=`
       <li>
       Nombre: ${e.name.first} ${e.name.last}
       Pais: ${e.nat}
       Imagen: 
       <img src="${e.picture.medium}" >
       </li>
       `;
    });
    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}
