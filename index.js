let cargador = ['pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!', 'pium!'];
function chauchat(municion) {
    let disparosTotales = '';
    if (Math.random() <= 0.8) {
        console.log('Illo, me he quedao pillá!');
        return;
    }
    for(let i = 0; i < municion.length; i++){
        disparosTotales += municion[i] + '\n';
        if((i + 1) % 3 === 0){
            disparosTotales += '\n';
        }
    }
    console.log(disparosTotales);
}
//Pruebas
chauchat(cargador);
chauchat(cargador);
chauchat(cargador);