function escolha(){
    //window.location.reload(); 
    let numeroAleatorio = Math.random()

    let intervalo = 4;
    let numeroFinal = Math.floor(numeroAleatorio * intervalo) + 1

    switch (numeroFinal) {
        case 1: 
            alert(`Grifinória`)
            break;
        case 2:
            alert(`Corvinal`)
            break;
        case 3:
            alert(`Lufa Lufa`)
            break;
        case 4: 
            alert(`Sonserina`)
            break;
    }

}