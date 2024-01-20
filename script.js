function escolha(){
    
    let numeroAleatorio = Math.random()

    let intervalo = 4;
    let numeroFinal = Math.floor(numeroAleatorio * intervalo) + 1

    if(numeroFinal === 1){
        let novaParte = document.getElementById('miniTelaGri')
        novaParte.style.display = 'block'
    }else if(numeroFinal === 2){
        let novaParte = document.getElementById('miniTelaCor')
        novaParte.style.display = 'block'
    }else if(numeroFinal === 3){
        let novaParte = document.getElementById('miniTelaSon')
        novaParte.style.display = 'block'
    }else if(numeroFinal === 4){
        let novaParte = document.getElementById('miniTelaLuf')
        novaParte.style.display = 'block'
    }

}

function fecharMiniTela(){
    let miniTela = document.getElementById('miniTelaCor')
    miniTela.style.display = "none";
}