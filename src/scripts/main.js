AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00"); 
const timeStampDoEvento = dataDoEvento.getTime(); 

const contaAsHoras = setInterval(function() {
    const agora = new Date(); 
    const timeStampAtual = agora.getTime(); 
    
    const distanciaDoEvento = timeStampDoEvento - timeStampAtual; 

    const diaEmMs = 1000 * 60 * 60* 24;
    const horaEmMs = 1000 * 60 * 60; 
    const minutoEmMs = 1000 * 60 ; 

    const diasAteOEvento = Math.floor(distanciaDoEvento/ diaEmMs); 
    const horasAteOEvento = Math.floor((distanciaDoEvento % diaEmMs) / horaEmMs);
    const minutoAteOEvento= Math.floor((distanciaDoEvento % horaEmMs)  / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaDoEvento % minutoEmMs)/1000); 

    console.log(diasAteOEvento); 
    console.log(horasAteOEvento);
    console.log(minutoAteOEvento); 
    console.log(segundosAteOEvento)

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutoAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaDoEvento < 0 ){
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
},1000);