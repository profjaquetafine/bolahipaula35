var bola;
var database,position;



function setup(){
    database =  firebase.database();
    console.log(database)
    createCanvas(500,500);
    bola = createSprite(250,250,10,10);
    bola.shapeColor = "red";


    var bolaPosition = database.ref('ball/position');
    bolaPosition.on("value",lerPosicao,mostrarErro);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }


    drawSprites();
}

function changePosition(x,y){
database.ref('ball/position').set({

    'x': position.x + x,
    'y': position.y + y,

  

})


}


function lerPosicao(data){

    position = data.val()
    bola.x = position.x
    bola.y = position.y



}

function mostrarErro(){
console.log("erro ao conecetar com a base de dados")
}
