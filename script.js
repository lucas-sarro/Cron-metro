let visor = document.getElementById('visor')
 

function contar(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let mili = date.getMilliseconds();

    visor.innerText = h+":"+m+":"+s+":"+mili;
}

function comecar(){
    
    timer = setInterval(contar, 10);
}

function parar(){
    clearInterval(timer);
}

function zerar(){
    parar();
    visor.innerText = "00:00";
}

