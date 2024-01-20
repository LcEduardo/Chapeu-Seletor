function escolha(){
    
    let numeroAleatorio = Math.random()

    let intervalo = 4;
    let numeroFinal = Math.floor(numeroAleatorio * intervalo) + 1

    if(numeroFinal === 1){
        let novaParte = document.getElementById('miniTelaGri')
       // fecharMiniTela('miniTelaGri')
        novaParte.style.display = 'block'
    }else if(numeroFinal === 2){
        let novaParte = document.getElementById('miniTelaCor')
        //fecharMiniTela('miniTelaCor')
        novaParte.style.display = 'block'
    }else if(numeroFinal === 3){
        let novaParte = document.getElementById('miniTelaSon')
        //fecharMiniTela('miniTelaSon')
        novaParte.style.display = 'block'
    }else if(numeroFinal === 4){
        let novaParte = document.getElementById('miniTelaLuf')
        //fecharMiniTela('miniTelaLuf')
        novaParte.style.display = 'block'
    }

}

function fecharMiniTela(){
    let elemento = document.getElementById('test')
    elemento.style.display = 'none'
    setTimeout(function() {
        window.location.reload();
    }, 1000);
}
