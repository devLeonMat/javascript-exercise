//promesas

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let dsct = true;
        dsct ? resolve('Descuento Aplicado!!') : reject('No se pudo aplicar el descuento');
    }, 3000);
});

aplicarDescuento.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});