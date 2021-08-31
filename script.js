let mostrador = document.getElementById('mostrador');
let min_caixa = document.getElementById('min');
let seg_caixa = document.getElementById('seg');
let min;
let seg;
let mos_min;
let mos_seg;

function pega_min() {
    min = document.getElementById('minuto').value;
    min_caixa.style.display = 'none';
    seg_caixa.style.display = 'flex';
}

function pega_seg() {
    seg = document.getElementById('segundo').value;
    mostrador.style.fontSize = '4em';
    seg_caixa.style.display = 'none';

    setInterval(function() {
        mos_min = min < 10 ? `0${min}` : min
        mos_seg = seg < 10 ? `0${seg}` : seg
        
        if(seg != 0 || min != 0){
            mostrador.innerHTML = `${mos_min}:${mos_seg}`
        }
        
        if(min == 0 && seg == 0){
            mostrador.innerHTML = 'FIM'
        }else if(seg == 0){
            seg = 59;
            min--;
        } else {
            seg--;
        }

    }, 1000);

    
}


