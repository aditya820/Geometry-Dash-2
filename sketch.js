const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;

var gamestate = 0;

var titleImage, title;
var buttonNotPressed, buttonPressed, button, buttonBody;
var cubeImage;
var backGroundImage;
var portalImage1, portal;
var underGroundImage;

var floorGroup;
var floor, floor5;
var floor2, floor3, floor4, floor6, floor7, floor8, floor9, floor10;
var image1;
var cube;

function preload(){
    titleImage = loadImage("Images/Title.png");
    buttonNotPressed = loadImage("Images/StartNotPressed.jpg");
    buttonPressed = loadImage("Images/StartPressed.jpg");
    cubeImage = loadImage("Images/Cube.png")
    backGroundImage = loadImage("Images/Walls.jpg")
    portalImage1 = loadImage("Images/Portal2.jpg");
    underGroundImage = loadImage("Images/underGround.png");
}

function setup(){
    createCanvas(displayWidth, displayHeight - 145);
    engine = Engine.create();
    world = engine.world;

    button = createSprite(displayWidth/2, 400, 150, 75);
    button.addImage("button", buttonNotPressed);
    button.scale = 0.2;

    title = createSprite(displayWidth/2, 200);
    title.addImage("title", titleImage);

    floorGroup = new Group();
    ImageSpritesGroup = new Group();
    
    floor = createSprite(100,500,2000,20);
    floor.shapeColor = "blue";
    floorGroup.add(floor);

    floor2 = createSprite(1110,540,20,100);
    floor2.shapeColor = "red";
    floorGroup.add(floor2);

    floor3 = createSprite(1170,580,100,20);
    floor3.shapeColor = "red";
    floorGroup.add(floor3);

    floor4 = createSprite(1230,540,20,100);
    floor4.shapeColor = "red";
    floorGroup.add(floor4);

    floor5 = createSprite(1740,500,1000,20);
    floor5.shapeColor = "blue";
    floorGroup.add(floor5);

    floor6 = createSprite(1390,440,100,100);
    floor6.shapeColor = "red";
    floorGroup.add(floor6);

    floor7 = createSprite(1590,390,100,200);
    floor7.shapeColor = "red";
    floorGroup.add(floor7);

    floor8 = createSprite(1790,340,100,300);
    floor8.shapeColor = "red";
    floorGroup.add(floor8);

    floor9 = createSprite(1990,390,100,200);
    floor9.shapeColor = "red";
    floorGroup.add(floor9);

    floor10 = createSprite(2190,440,100,100);
    floor10.shapeColor = "red";
    floorGroup.add(floor10);

    floorGroup.setVisibleEach(false);

    image = createSprite(100,615,210,210);
    image.addImage(underGroundImage);
    ImageSpritesGroup.add(image);

    ImageSpritesGroup.setVisibleEach(false);

    cube = createSprite(200,465,50,50);
    cube.visible = false;
    cube.addImage("cubeImage", cubeImage);
    cube.scale = 0.08;

    portal = createSprite(75,425,100,150);
    portal.addImage("portal1", portalImage1);
    portal.visible = false;
}

function draw(){
    background(backGroundImage);
    Engine.update(engine);
    drawSprites();
    imageMode(CENTER);

    cube.collide(floorGroup);

    if(mouseIsOver(button)){
        button.addImage("button", buttonPressed);
    }

    if(mousePressedOver(button)){
        button.destroy();
        title.destroy();
        gamestate = 1;
    }

    if(gamestate === 1){
        cube.visible = true;
        portal.visible = true;
        //portal.velocityX = -5;
        floorGroup.setVisibleEach(true);
        //floorGroup.setVelocityXEach(-5);
        ImageSpritesGroup.setVisibleEach(true);
        //ImageSpritesGroup.setVelocityXEach(-5);
    }

    if(keyWentDown("space")){
        cube.velocityY = -15;
    }

    cube.velocityY = cube.velocityY + 0.8;
}   

