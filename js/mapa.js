//creado por: Hugo A. Martínez D. para la materia: Grafica Iteractiva, Universidad Nacional De Colombia. Diciembre de 2019.


var mapW=2304; //ancho imagen
var mapH=1656; // largo imagen
var escala=0.5; //variale escala
var pos=[{x:537,y:298},{x:637,y:483},{x:906,y:668},{x:700,y:214}]; //posiciones coordenadas de los lugares en el mapa
const scene={preload: preload, create: create, update: update}; //json con las funciones de phaser

var marc1=marc2=marc3=marc4=[]; //varibles para las imagenes
var tar1=tar2=tar3=tar4=[]; // variables para las tarjetas

var game = new Phaser.Game(mapW*escala, mapH*escala,Phaser.AUTO,"mapa", scene); //instanciar un objeto de phaser

function preload(){
    //precargar las imagenes en el juego
    this.load.image("bkg", "img/mapa/dreamland.jpg");
    this.load.image("mrkr", "img/mapa/cthulomark.png");
    this.load.image("inganok", "img/mapa/inganok.jpg");
    this.load.image("celaphis", "img/mapa/celaphis.jpg");
    this.load.image("sarnath", "img/mapa/lago.jpg");
    this.load.image("leng", "img/mapa/leng.jpg");
}

function create(){
    //cargar los elementos para ser mostrados
    mapa=this.add.sprite(0,0,"bkg"); //cargar la imagen de fondo
    mapa.scale.set(escala);

   //configurar los marcadores obre el mapa
    marc1=this.add.image(pos[0].x,pos[0].y,"mrkr");
    marc1.scale.set(0.03);
    marc1.inputEnabled=true;
    marc1.events.onInputDown.add(info1,this);
     

    
    marc2=this.add.image(pos[1].x,pos[1].y,"mrkr");
    marc2.scale.set(0.03);
    marc2.inputEnabled=true;
    marc2.events.onInputDown.add(info2,this);

    marc3=this.add.image(pos[2].x,pos[2].y,"mrkr");
    marc3.scale.set(0.03);
    marc3.inputEnabled=true;
    marc3.events.onInputDown.add(info3,this);

    marc4=this.add.image(pos[3].x,pos[3].y,"mrkr");
    marc4.scale.set(0.03);
    marc4.inputEnabled=true;
    marc4.events.onInputDown.add(info4,this);


    //configurar las tarjetas con la información
    tar1 = game.add.image(500,200,"inganok");
    tar1.scale.set(0.5);
    tar1.inputEnabled=true;
    tar1.visible=false;
    tar1.events.onInputDown.add(brr1,game);

    tar2 = game.add.image(500,200,"celaphis");
    tar2.scale.set(0.5);
    tar2.inputEnabled=true;
    tar2.visible=false;
    tar2.events.onInputDown.add(brr2,game);

    tar3 = game.add.image(500,300,"sarnath");
    tar3.scale.set(0.5);
    tar3.inputEnabled=true;
    tar3.visible=false;
    tar3.events.onInputDown.add(brr3,game);

    tar4 = game.add.image(400,100,"leng");
    tar4.scale.set(0.5);
    tar4.inputEnabled=true;
    tar4.visible=false;
    tar4.events.onInputDown.add(brr4,game);
}

function update(time, delta){
    //this.input.on('gameobjectdown', listener);
}
//funciones axuliares de visualización
function info1(){ver(1);}
function info2(){ver(2)}
function info3(){ver(3)}
function info4(){ver(4)}

function brr1(){borrar(1);}
function brr2(){borrar(2);}
function brr3(){borrar(3);}
function brr4(){borrar(4);}


//funció para mostrar cada una de las tarjetas
function ver(x){
    switch(x){
        case 1:
            tar1.visible=true;
            break;
        case 2:
            tar2.visible=true;
            break;
        case 3:
            tar3.visible=true;
            break;
        case 4:
            tar4.visible=true;
            break;
    }
    

}
//funció para ocultar cada una de las tarjetas
function borrar(x){
    switch(x){
        case 1:
            tar1.visible=false;
            break;
        case 2:
            tar2.visible=false;
            break;
        case 3:
            tar3.visible=false;
            break;
        case 4:
            tar4.visible=false;
            break;
    }
}
