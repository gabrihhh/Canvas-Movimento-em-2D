var up = 38,down = 40,left = 37,right = 39;

var movecima = false, movebaixo = false, moveesquerda = false, movedireita = false;

var cnv = document.querySelector('canvas');
var ctx = cnv.getContext('2d');
var p1 ={
    x: 10,
    y: 10
};

update()

window.addEventListener('keydown',keydownHandler);
window.addEventListener('keyup',keyupHandler);

// Detecta os Movimentos 
function keydownHandler(e){
    var key = e.keyCode;
    if(key == left && key != right){
        moveesquerda = true;
    }
    if(key == right && key != left){
        movedireita = true;
    }
    if(key == up && key != down){
        movecima = true;
    }
    if(key == down && key != up){
        movebaixo = true;
    }
}

function keyupHandler(e){
    var key = e.keyCode;
    if(key == left && key != right){
        moveesquerda = false;
    }
    if(key == right && key != left){
        movedireita = false;
    }
    if(key == up && key != down){
        movecima = false;
    }
    if(key == down && key != up){
        movebaixo = false;
    }
}

//Movimentação em plano cartesiano

function move(){
    if(moveesquerda){
        p1.x--;
    }
    
    if(movedireita){
        p1.x++;
    }
    
    if(movecima){
        p1.y--;
    }
    
    if(movebaixo){
        p1.y++;
    }
}

//Atualização da pagina e animação do Canvas

function render(){
    ctx.clearRect(0,0,cnv.width,cnv.height);
    ctx.fillRect(p1.x,p1.y,50,50);
}
function update(){
    requestAnimationFrame(update, cnv);
    move();
    render();
}