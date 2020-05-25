var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ddce21bc-024b-44d7-a3fb-788366583fd0","efb00039-e15b-4194-93a4-5236f6a70df8","cc2fe758-7a80-4def-b98d-646be0422cbc","ad59b9d2-316f-4f7c-97f9-12449c31fe1f","4dd73b03-18a2-4d83-85ef-de512f150d98","3ba04fce-3fe9-40b0-818c-2566d88dbd27","b7c3b1a0-e59a-43a5-a222-f5c68a8c4798","a08bd0af-747c-4d3b-9d7a-406107c08502","ae4dc7fb-b7bb-4e64-a107-140d66c11119","409d56a5-887d-46ad-b938-277e31e339c8","39af12f2-9289-4ca7-a808-26f2bc44310a","b8bff1d9-5c1f-4ea4-b164-805c27511687","86330791-caaf-4309-818f-aae46a015892","b7c64f36-088f-41fa-aa4d-8adf64c87c96","8d18af13-abbc-49bf-9ea6-a5572baa6f5f","b37dff4d-7cbc-43e0-83e2-2ee713c29ce2","0f672c92-f0e8-4ccd-8a4a-4bb9c4da6161","83af01ce-7472-4dc0-b386-1e83afd44b40","6918237f-1200-4d6c-840b-deb14e95ec4b","237063b3-4012-4022-9715-9382996c9ff7","9cc10f2d-27a5-4fa4-928a-ced14757f166","c897dc16-6660-4ba5-9e10-527b6eb632e5","cf04a97e-0044-4d27-9960-b573fe5a9b64","839f4775-e7c7-4f2c-9341-1a2450a771d0","dbfc96c2-2be2-466f-bf4d-df05064f7f94","1520fd88-d1a0-464f-808d-f3888c68cb57","f0f92050-1bdd-48a5-ad93-0b893982ffd2","83edc451-b728-4059-aa57-99682f77ac77","66c8ded0-d851-4e29-a840-18adc7d12bec","2e22e40f-207c-47fe-96dc-103408e725de","66dc7f44-c483-469a-827d-f9b4598d01b1","e40e0b07-6c7e-4d97-80ec-6d2e5b5d2ed4"],"propsByKey":{"ddce21bc-024b-44d7-a3fb-788366583fd0":{"name":"ironman_still","sourceUrl":null,"frameSize":{"x":58,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q6f8gOm2n8im51znT8Q2jWSQhrifSpMd","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":100},"rootRelativePath":"assets/ddce21bc-024b-44d7-a3fb-788366583fd0.png"},"efb00039-e15b-4194-93a4-5236f6a70df8":{"name":"ironman_flying","sourceUrl":null,"frameSize":{"x":58,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"f.HHFnd1vXPcgJCxSxMPQlZt0QzcgK7q","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":100},"rootRelativePath":"assets/efb00039-e15b-4194-93a4-5236f6a70df8.png"},"cc2fe758-7a80-4def-b98d-646be0422cbc":{"name":"ironman_attack","sourceUrl":null,"frameSize":{"x":58,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"XSf8TW3l9lLAIDQWVPtlk7Kz3EeOptkz","loadedFromSource":true,"saved":true,"sourceSize":{"x":58,"y":100},"rootRelativePath":"assets/cc2fe758-7a80-4def-b98d-646be0422cbc.png"},"ad59b9d2-316f-4f7c-97f9-12449c31fe1f":{"name":"laser","sourceUrl":null,"frameSize":{"x":101,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"nrPBiS94aBh02_Lcze6JyBmCqWFq1O4H","loadedFromSource":true,"saved":true,"sourceSize":{"x":101,"y":200},"rootRelativePath":"assets/ad59b9d2-316f-4f7c-97f9-12449c31fe1f.png"},"4dd73b03-18a2-4d83-85ef-de512f150d98":{"name":"spiderman","sourceUrl":null,"frameSize":{"x":68,"y":122},"frameCount":1,"looping":true,"frameDelay":12,"version":"DbychNkV0zK8DzjaSr9O2OGHwYwEuHaH","loadedFromSource":true,"saved":true,"sourceSize":{"x":68,"y":122},"rootRelativePath":"assets/4dd73b03-18a2-4d83-85ef-de512f150d98.png"},"3ba04fce-3fe9-40b0-818c-2566d88dbd27":{"name":"spiderweb","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"KnGyPn_dITkXgHDM6lz257RHHJsYQ5ov","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/3ba04fce-3fe9-40b0-818c-2566d88dbd27.png"},"b7c3b1a0-e59a-43a5-a222-f5c68a8c4798":{"name":"thor","sourceUrl":null,"frameSize":{"x":135,"y":158},"frameCount":1,"looping":true,"frameDelay":12,"version":"F0h7MznyetodzrIvDNwwClPrlDlqK5JP","loadedFromSource":true,"saved":true,"sourceSize":{"x":135,"y":158},"rootRelativePath":"assets/b7c3b1a0-e59a-43a5-a222-f5c68a8c4798.png"},"a08bd0af-747c-4d3b-9d7a-406107c08502":{"name":"lightning","sourceUrl":null,"frameSize":{"x":104,"y":200},"frameCount":1,"looping":true,"frameDelay":12,"version":"nMHV6SSiSnw5SJpfurjDc26xeesUclTB","loadedFromSource":true,"saved":true,"sourceSize":{"x":104,"y":200},"rootRelativePath":"assets/a08bd0af-747c-4d3b-9d7a-406107c08502.png"},"ae4dc7fb-b7bb-4e64-a107-140d66c11119":{"name":"captain_america","sourceUrl":null,"frameSize":{"x":125,"y":105},"frameCount":1,"looping":true,"frameDelay":12,"version":"9WheyHGAncXqkUAU.Wshf_twwhH2stsL","loadedFromSource":true,"saved":true,"sourceSize":{"x":125,"y":105},"rootRelativePath":"assets/ae4dc7fb-b7bb-4e64-a107-140d66c11119.png"},"409d56a5-887d-46ad-b938-277e31e339c8":{"name":"caps_shield","sourceUrl":null,"frameSize":{"x":60,"y":62},"frameCount":1,"looping":true,"frameDelay":12,"version":"sc1wDeOHrAnhl6ROITjI4xN_4LRKkKvC","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":62},"rootRelativePath":"assets/409d56a5-887d-46ad-b938-277e31e339c8.png"},"39af12f2-9289-4ca7-a808-26f2bc44310a":{"name":"captain_marvel","sourceUrl":null,"frameSize":{"x":100,"y":118},"frameCount":1,"looping":true,"frameDelay":12,"version":"FV2q1EjvOR2gjAnmQrvOCBrHABaEIoZU","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":118},"rootRelativePath":"assets/39af12f2-9289-4ca7-a808-26f2bc44310a.png"},"b8bff1d9-5c1f-4ea4-b164-805c27511687":{"name":"captain_marvel_fire","sourceUrl":null,"frameSize":{"x":41,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"6QGv_.VgB.ek_0Qa5LQ9ZsO74Hn1hW9S","loadedFromSource":true,"saved":true,"sourceSize":{"x":41,"y":35},"rootRelativePath":"assets/b8bff1d9-5c1f-4ea4-b164-805c27511687.png"},"86330791-caaf-4309-818f-aae46a015892":{"name":"thanos_still","sourceUrl":null,"frameSize":{"x":97,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"KESpcplzKf.dKTh2p3AEKdJ.aiK7heUO","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":150},"rootRelativePath":"assets/86330791-caaf-4309-818f-aae46a015892.png"},"b7c64f36-088f-41fa-aa4d-8adf64c87c96":{"name":"thanos_attack53","sourceUrl":null,"frameSize":{"x":97,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"pSH4VAfGdEL96DWHcXYQ7ZP0xw8mueLi","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":150},"rootRelativePath":"assets/b7c64f36-088f-41fa-aa4d-8adf64c87c96.png"},"8d18af13-abbc-49bf-9ea6-a5572baa6f5f":{"name":"thanos_attack51","sourceUrl":null,"frameSize":{"x":97,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"ibiaNrewbjim63vkCPsmPKsIQGGeEBhC","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":150},"rootRelativePath":"assets/8d18af13-abbc-49bf-9ea6-a5572baa6f5f.png"},"b37dff4d-7cbc-43e0-83e2-2ee713c29ce2":{"name":"thanos_attack41","sourceUrl":null,"frameSize":{"x":97,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"UTYFCNv_wJ7UPLHqtDjqVJPhzRE1s9np","loadedFromSource":true,"saved":true,"sourceSize":{"x":97,"y":150},"rootRelativePath":"assets/b37dff4d-7cbc-43e0-83e2-2ee713c29ce2.png"},"0f672c92-f0e8-4ccd-8a4a-4bb9c4da6161":{"name":"thanos_attack","sourceUrl":null,"frameSize":{"x":97,"y":150},"frameCount":3,"looping":true,"frameDelay":12,"version":"qYtvfiH4t6xJfvbXAX8W8.Zdc8PGNtwO","loadedFromSource":true,"saved":true,"sourceSize":{"x":194,"y":300},"rootRelativePath":"assets/0f672c92-f0e8-4ccd-8a4a-4bb9c4da6161.png"},"83af01ce-7472-4dc0-b386-1e83afd44b40":{"name":"thanos_attack42","sourceUrl":null,"frameSize":{"x":97,"y":150},"frameCount":12,"looping":true,"frameDelay":12,"version":"GxQslAIelReu17XJoUbCR8xAIq66auoi","loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":450},"rootRelativePath":"assets/83af01ce-7472-4dc0-b386-1e83afd44b40.png"},"6918237f-1200-4d6c-840b-deb14e95ec4b":{"name":"thanos_attack52","sourceUrl":null,"frameSize":{"x":147,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"00V3DC0FJRB4UDfd.Quas2Auq4lo0YQt","loadedFromSource":true,"saved":true,"sourceSize":{"x":147,"y":150},"rootRelativePath":"assets/6918237f-1200-4d6c-840b-deb14e95ec4b.png"},"237063b3-4012-4022-9715-9382996c9ff7":{"name":"thanos_attack1","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":2,"looping":true,"frameDelay":12,"version":"S0z8T2JNGZimNUFjoGXcUeqDT6SRLZwN","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/237063b3-4012-4022-9715-9382996c9ff7.png"},"9cc10f2d-27a5-4fa4-928a-ced14757f166":{"name":"thanos_attack2","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":2,"looping":true,"frameDelay":12,"version":"IpnX.SgzlCK6gKcOFktHvGUQnM32SS.b","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":300},"rootRelativePath":"assets/9cc10f2d-27a5-4fa4-928a-ced14757f166.png"},"c897dc16-6660-4ba5-9e10-527b6eb632e5":{"name":"thanos_attack3","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":2,"looping":true,"frameDelay":12,"version":"JK5BtShZ4EBi7H_hq2hZXOKkqcPyvH0O","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/c897dc16-6660-4ba5-9e10-527b6eb632e5.png"},"cf04a97e-0044-4d27-9960-b573fe5a9b64":{"name":"thanos_attack6","sourceUrl":null,"frameSize":{"x":150,"y":150},"frameCount":1,"looping":true,"frameDelay":12,"version":"11rQqCAq7HsiInV6peJgaTBLZyb.W4fe","loadedFromSource":true,"saved":true,"sourceSize":{"x":150,"y":150},"rootRelativePath":"assets/cf04a97e-0044-4d27-9960-b573fe5a9b64.png"},"839f4775-e7c7-4f2c-9341-1a2450a771d0":{"name":"none","sourceUrl":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png","frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":4,"version":"mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/api/v1/animation-library/mUlvnlbeZ5GHYr_Lb4NIuMwPs7kGxHWz/category_backgrounds/blank.png"},"dbfc96c2-2be2-466f-bf4d-df05064f7f94":{"name":"victoryScreen","sourceUrl":null,"frameSize":{"x":714,"y":400},"frameCount":17,"looping":true,"frameDelay":12,"version":"8Y_yRQrKwKQqwq.OC9tUuwv7b7x4BebR","loadedFromSource":true,"saved":true,"sourceSize":{"x":2142,"y":2400},"rootRelativePath":"assets/dbfc96c2-2be2-466f-bf4d-df05064f7f94.png"},"1520fd88-d1a0-464f-808d-f3888c68cb57":{"name":"lossScreen","sourceUrl":null,"frameSize":{"x":500,"y":400},"frameCount":7,"looping":true,"frameDelay":12,"version":"X.sWvBtQcYSE02KTElez9RPwkCJ2wB44","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":1600},"rootRelativePath":"assets/1520fd88-d1a0-464f-808d-f3888c68cb57.png"},"f0f92050-1bdd-48a5-ad93-0b893982ffd2":{"name":"復活節彩蛋","sourceUrl":null,"frameSize":{"x":600,"y":600},"frameCount":2,"looping":true,"frameDelay":12,"version":"MHkiX5GUVyVe0QmI265zqnjSEGoC1wwG","loadedFromSource":true,"saved":true,"sourceSize":{"x":600,"y":1200},"rootRelativePath":"assets/f0f92050-1bdd-48a5-ad93-0b893982ffd2.png"},"83edc451-b728-4059-aa57-99682f77ac77":{"name":"startButton","sourceUrl":null,"frameSize":{"x":200,"y":89},"frameCount":1,"looping":true,"frameDelay":12,"version":"kzC1or.PQGBjEfZ04i6mDF6T6FnqvItZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":89},"rootRelativePath":"assets/83edc451-b728-4059-aa57-99682f77ac77.png"},"66c8ded0-d851-4e29-a840-18adc7d12bec":{"name":"directions","sourceUrl":null,"frameSize":{"x":226,"y":67},"frameCount":1,"looping":true,"frameDelay":12,"version":"6niocvXuIJAZw6jsVsIQOv86syIkFJAM","loadedFromSource":true,"saved":true,"sourceSize":{"x":226,"y":67},"rootRelativePath":"assets/66c8ded0-d851-4e29-a840-18adc7d12bec.png"},"2e22e40f-207c-47fe-96dc-103408e725de":{"name":"menu","sourceUrl":null,"frameSize":{"x":480,"y":480},"frameCount":1,"looping":true,"frameDelay":12,"version":"s2O0t2UTDmJKkAlbp9TpPFo8teSBeWyX","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":480},"rootRelativePath":"assets/2e22e40f-207c-47fe-96dc-103408e725de.png"},"66dc7f44-c483-469a-827d-f9b4598d01b1":{"name":"thanos_basicAttack","sourceUrl":null,"frameSize":{"x":65,"y":62},"frameCount":1,"looping":true,"frameDelay":12,"version":"CXo1b82P4i8aNkJYPG2_S0p2hup3JBFJ","loadedFromSource":true,"saved":true,"sourceSize":{"x":65,"y":62},"rootRelativePath":"assets/66dc7f44-c483-469a-827d-f9b4598d01b1.png"},"e40e0b07-6c7e-4d97-80ec-6d2e5b5d2ed4":{"name":"oof","sourceUrl":null,"frameSize":{"x":354,"y":142},"frameCount":1,"looping":true,"frameDelay":12,"version":"AiFJy5DbIxdvJGXgHtEXbw_o7AglBki0","loadedFromSource":true,"saved":true,"sourceSize":{"x":354,"y":142},"rootRelativePath":"assets/e40e0b07-6c7e-4d97-80ec-6d2e5b5d2ed4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

playSound("assets/The-Avengers---Theme-Song.mp3", true);


// Pregame
var firstMenu = createSprite(200, 200);
0;;firstMenu.setAnimation("menu");
var firstStartButton = createSprite(200, 310);
firstStartButton.setAnimation("startButton");
var directions = createSprite(200, 370);
directions.setAnimation("directions");
drawSprites();

//uumm
var thanosHealth = 1000;
var ironmanHealth = 500;
var ironmanSprite = 'ironman_still';
var thanosSprite = 'thanos_still';
var laserTimer = 0;
var healTimer = 10;
var avengersTimer1 = 10;
var avengersTimer2 = 0;
var avengersTimer3 = false;
var randomAvenger;
var laserText = '';
var healText = '';
var avengersText = '';
var laserTextX = 170;
var healTextX = 178;
var avengersTextX = 186;
var thanosBasicAttackTimer = randomNumber(80, 100);
var infinityStoneTimeToAdd = 350;
var infinityStoneTimer = infinityStoneTimeToAdd;
var infinityStoneTextTimer = 0;
var infinityStoneText = '';
var infinityStones = 0;
var thanosAttack2Timer1 = 0;
var thanosAttack2Timer2 = 0;
var thanosAttack6Timer1 = 0;
var thanosAttack6Timer2 = 0;
var thanosAttack4Timer1 = 0;
var thanosAttack4Timer2 = false;
var thanosAttack4Timer3 = false;
var thanosAttack5Timer1 = 0;
var thanosAttack5Timer2 = false;
var thanosAttack5Timer3 = false;
var 復活節彩蛋Timer1 = 0;
var 復活節彩蛋Timer2 = false;
var gameStart = false;
var gameEndTimer1 = 0;
var gameEndTimer2 = false;

// Create your sprites here
var oof = createSprite(200, 200);
oof.setAnimation("oof");
oof.visible = false;
var thanosBasicAttack = createSprite(-100, 0);
thanosBasicAttack.setAnimation("thanos_basicAttack");
thanosBasicAttack.rotationSpeed = 50;
thanosBasicAttack.velocityX = -6.5;
thanosBasicAttack.setCollider("circle");
var thanosAttack11 = createSprite(800, 75);
thanosAttack11.setAnimation("thanos_attack1");
thanosAttack11.setCollider("circle");
var thanosAttack12 = createSprite(800, 360);
thanosAttack12.setAnimation("thanos_attack1");
thanosAttack12.setCollider("circle");
var thanosAttack2 = createSprite(600, 0);
thanosAttack2.setAnimation("thanos_attack2");
thanosAttack2.setCollider("circle");
var thanosAttack3 = createSprite(700, 350);
thanosAttack3.setAnimation("thanos_attack6");
var thanosAttack6 = createSprite(500, 175);
thanosAttack6.setAnimation("thanos_attack3");
var thanos = createSprite(335, 320);
var ironman = createSprite(50, 335);
ironman.setCollider("circle");
var laser = createSprite(500, 350);
laser.setAnimation("laser");
laser.velocityX = 15;
var spiderman = createSprite(50, -200);
spiderman.setAnimation("spiderman");
var spiderweb = createSprite(500, 500);
spiderweb.setAnimation("spiderweb");
spiderweb.velocityY = 6;
spiderweb.velocityX = 5;
var thor = createSprite(80, -200);
thor.setAnimation("thor");
var lightning = createSprite(500, 500);
lightning.setAnimation("lightning");
lightning.velocityY = 15;
var captainAmerica = createSprite(80, -200);
captainAmerica.setAnimation("captain_america");
var capsShield = createSprite(500, 500);
capsShield.setAnimation("caps_shield");
capsShield.velocityY = 8;
capsShield.velocityX = 7;
capsShield.rotationSpeed = 80;
var captainMarvel = createSprite(70, -200);
captainMarvel.setAnimation("captain_marvel");
var captainMarvelFire = createSprite(500, 500);
captainMarvelFire.setAnimation("captain_marvel_fire");
captainMarvelFire.velocityY = 7;
captainMarvelFire.velocityX = 6;
var avengersArray = [spiderman, thor, captainAmerica, captainMarvel];
var 復活節彩蛋 = createSprite(200, 200);
復活節彩蛋.setAnimation("none");
var victoryScreen = createSprite(200, 200);
victoryScreen.setAnimation("none");
var lossScreen = createSprite(200, 200);
lossScreen.setAnimation("none");
var menu = createSprite(200, 200);
menu.setAnimation("menu");
menu.visible = false;
var startButton = createSprite(200, 340);
startButton.setAnimation("startButton");
startButton.visible = false;
var topBarrier 

function draw() {
  pregameFunction();
  if(gameStart) {
    //Tick timers
    tickTimers();
    //Change the sprites
    ironman.setAnimation(ironmanSprite);
    thanos.setAnimation(thanosSprite);
    //Create the background
    createBackground();
    //Draw and update the health bars
    drawThanosHealth();
    drawIronmanHealth();
    //Hit
    thanosGetsHit();
    ironmanGetsHit();
    //Controls
    ironmanControl();
    //Thanos' attacks
    doThanosBasicAttack();
    //Show ability text
    ironmanAbilityText();
    //Infinity stones
    infinityStoneFunction();
    drawInfinityStoneText();
    infinityStoneMoves();
    resetThanosAttacks();
    //End of the game
    drawVictoryScreen();
    drawLossScreen();
    //?????
    復活節彩蛋Function();
    // New game
    newGame();
    //Draw the sprites
    drawSprites();
}
}

// Pregame
function pregameFunction() {
  if(mousePressedOver(firstStartButton)) {
    gameStart = true;
    firstStartButton.visible = false;
    firstMenu.visible = false;
    directions.visible =false;
  }
}

// Create your functions here
function createBackground() {
    background("#e2aaaa");
    fill("#605151");
    stroke("#4c4444");
    strokeWeight(2);
    shape(0, 260, 40, 280, 80, 300, 130, 270, 180, 290, 210, 250, 240, 260, 290, 240, 330, 220, 360, 240, 385, 250, 400, 280, 400, 400, 0, 400, 0, 330);
    shape(50, 100, 90, 90, 110, 180, 70, 210, 30, 130);
    shape(180, 150, 250, 140, 260, 230, 190, 180, 150, 180);
    fill(rgb(255, 100, 50));
    stroke(rgb(250, 175, 175));
    strokeWeight(2.5);
    ellipse(335, 75, 100, 100);
}

function tickTimers() {
    laserTimer--;
    healTimer--;
    avengersTimer1--;
    avengersTimer2--;
    thanosBasicAttackTimer--;
    infinityStoneTimer--;
    infinityStoneTextTimer--;
    thanosAttack2Timer1--;
    thanosAttack2Timer2--;
    thanosAttack6Timer1--;
    thanosAttack6Timer2--;
    thanosAttack4Timer1--;
    thanosAttack5Timer1--;
    復活節彩蛋Timer1--;
    gameEndTimer1--;
}

function drawThanosHealth() {
    fill("#993030");
    stroke("#6d2727");
    strokeWeight(1);
    rect(200 - thanosHealth / 4, 30, thanosHealth / 2, 30);
    fill("white");
    text("Thanos:" + thanosHealth, 172, 49.25);
}

function drawIronmanHealth() {
    fill("#719fe8");
    stroke("#375077");
    strokeWeight(1);
    rect(200 - ironmanHealth / 4, 70, ironmanHealth / 2, 30);
    fill("white");
    text("Ironman:" + ironmanHealth, 170, 88);
}

function ironmanControl() {
    if (keyDown("up")) {
        ironman.y -= 10;
        ironmanSprite = 'ironman_flying';
    } else if (ironman.y < 335) {
        ironman.y += 8;
        ironmanSprite = 'ironman_still';
    }
    if (keyDown("down")) {
        if (laserTimer <= 0) {
            laserTimer = 10;
            ironmanSprite = 'ironman_attack';
            laser.x = 105;
            laser.y = ironman.y + 11;
        }
    }
    if (laserTimer <= 0 && ironmanSprite == 'ironman_attack') {
        ironmanSprite = 'ironman_still';
    }
    if (keyDown("left") && healTimer <= 0) {
        ironmanHealth += 50;
        healTimer = 30;
    }
    summonAvenger();
}

function summonAvenger() {
  if(keyDown("right") && avengersTimer1 <= 0) {
    avengersTimer1 = 650;
    avengersTimer2 = 20;
    avengersTimer3 = true;
    randomAvenger = avengersArray[randomNumber(0, 3)];
    randomAvenger.y = 61;
  }
  if(avengersTimer2 <= 0 && avengersTimer3) {
    randomAvenger.y = -200;
    avengersTimer3 = false;
  }
  if(randomAvenger == spiderman && avengersTimer3) {
    spiderweb.x = 60;
    spiderweb.y = 60;
  }
  if(randomAvenger == thor && avengersTimer3) {
    lightning.x = 350;
    lightning.y = 50;
  }
  if(randomAvenger == captainAmerica && avengersTimer3) {
    capsShield.x = 120;
    capsShield.y = 70;
  }
  if(randomAvenger == captainMarvel && avengersTimer3) {
    captainMarvelFire.x = 100;
    captainMarvelFire.y = 100;
  }
}

function ironmanAbilityText() {
    text(laserText, laserTextX, 140);
    text(healText, healTextX, 150);
    text(avengersText, avengersTextX, 180);
    if (laserTimer <= 0) {
        laserText = 'Laser is in the box boit';
        laserTextX = 165;
    } else {
        laserText = 'Laser not ready so be patient boit';
        laserTextX = 163;
    }
    if (healTimer <= 0) {
        healText = 'Hospital ready';
        healTextX = 178;
    } else {
        healText = 'Hospital not ready, too many peple with coronavirus';
        healTextX = 120;
    }
    if(avengersTimer1 <= 0) {
      avengersText = 'Fighters ready';
      avengersTextX = 162;
    } else {
      avengersText = 'Fighters not ready, let them rest';
      avengersTextX = 153;
    }
}

function thanosGetsHit() {
    if (laser.isTouching(thanos)) {
        thanosHealth--;
    }
    if(spiderweb.isTouching(thanos)) {
      thanosHealth--;
    }
    if(lightning.isTouching(thanos)) {
      thanosHealth--;
    }
    if(capsShield.isTouching(thanos)) {
      thanosHealth--;
    }
    if(captainMarvelFire.isTouching(thanos)) {
      thanosHealth--;
    }
}

function ironmanGetsHit() {
    if (thanosBasicAttack.isTouching(ironman)) {
        ironmanHealth--;
        thanosBasicAttack.visible = false;
    }
    if (thanosAttack11.isTouching(ironman)) {
        ironmanHealth--;
        thanosAttack11.visible = false;
    }
    if (thanosAttack12.isTouching(ironman)) {
        ironmanHealth--;
        thanosAttack12.visible = false;
    }
    if (thanosAttack2.isTouching(ironman)) {
        ironmanHealth--;
        thanosAttack2.visible = false;
    }
    if(thanosAttack3.isTouching(ironman)) {
      ironmanHealth--;
    }
    if (thanosAttack6.isTouching(ironman)) {
        ironmanHealth--;
        thanosAttack6.visible = false;
    }
    if (thanos.isTouching(ironman)) {
        ironmanHealth -= 2;
    }
}

function drawVictoryScreen() {
    if (thanosHealth <= 0 && !gameEndTimer2) {
        victoryScreen.setAnimation("victoryScreen");
        ironmanHealth = 10000;
        gameEndTimer1 = 200;
        gameEndTimer2 = true;
    }
    if(gameEndTimer1 <= 0 && gameEndTimer2) {
      victoryScreen.setAnimation("none");
      menu.visible = true;
      startButton.visible = true;
    }
}

function drawLossScreen() {
    if (ironmanHealth <= 0 && !gameEndTimer2) {
        lossScreen.setAnimation("lossScreen");
        thanosHealth = 10000;
        gameEndTimer1 = 200;
        gameEndTimer2 = true;
    }
    if(gameEndTimer1 <= 0 && gameEndTimer2) {
      lossScreen.setAnimation("none");
      menu.visible = true;
      startButton.visible = true;
    }
}

function doThanosBasicAttack() {
    if (thanosBasicAttackTimer <= 0 && thanosAttack4Timer2 != true) {
        thanosBasicAttack.visible = true;
        thanosBasicAttackTimer = randomNumber(70, 100);
        thanosBasicAttack.x = thanos.x;
        thanosBasicAttack.y = thanos.y;
        thanosBasicAttack.velocityY = randomNumber(2, -4);
        thanosSprite = 'thanos_attack';
    }
    if (thanosBasicAttackTimer <= 60 && thanosSprite == 'thanos_attack') {
        thanosSprite = 'thanos_still';
    }
}

function infinityStoneFunction() {
    if (infinityStoneTimer <= 0 && infinityStones < 6) {
        infinityStoneTimeToAdd += 50;
        infinityStoneTimer = infinityStoneTimeToAdd;
        infinityStoneTextTimer = 50;
        infinityStoneText = 'Thanos has gained an infinity stone';
        infinityStones++;
    }
    if (infinityStoneTextTimer <= 0 && infinityStoneText == 'Thanos has gained an infinity stone') {
        infinityStoneText = '';
    }
}

function drawInfinityStoneText() {
    fill("lightpurple");
    strokeWeight(3);
    text(infinityStoneText, 102, 120);
}

function infinityStoneMoves() {
    if (infinityStones >= 1) {
        thanosAttack11.velocityX = -3;
        thanosAttack12.velocityX = -3;
    }
    if (thanosAttack4Timer1 == true) {
        thanosAttack11.x = 1000;
        thanosAttack12.x = 1000;
    }
    if (World.frameCount == infinityStoneTimeToAdd * 2) {
        thanosAttack2Timer1 = 200;
    }
    if (infinityStones >= 2) {
        if (thanosAttack2Timer1 <= 0 && thanosAttack2Timer2 != true) {
            thanosAttack2.visible = true;
            thanosAttack2Timer1 = 200;
            thanosAttack2Timer2 = 5;
            thanosAttack2.x = ironman.x;
            thanosAttack2.y = ironman.y;
        }
    }
    if (thanosAttack2Timer2 <= 0) {
        thanosAttack2.x = 600;
    }
    if(infinityStones >= 3) {
      thanosAttack3.velocityX = -3;
    }
    if (World.frameCount == infinityStoneTimeToAdd * 4) {
        thanosAttack4Timer1 = 200;
    }
    if (infinityStones >= 4) {
        if (thanosAttack4Timer1 <= 0) {
            thanosAttack4Timer1 = 1100;
            thanosAttack4Timer2 = true;
            thanos.velocityY = -10;
            thanos.velocityX = -4;
            thanosSprite = 'thanos_attack41';
        }
        if (thanos.y <= 75) {
            thanos.velocityY = 8;
            thanosSprite = 'thanos_attack42';
            thanosAttack4Timer3 = true;
        }
        if (thanos.y >= 320 && thanosAttack4Timer3 == true) {
            thanos.velocityY = 0;
            thanos.velocityX = 4;
            thanosSprite = 'thanos_still';
        }
        if (thanos.x >= 335 && thanosAttack4Timer3 == true) {
            thanos.velocityX = 0;
            thanosAttack4Timer3 = false;
            thanosAttack4Timer2 = false;
        }
    }
    if (World.frameCount == infinityStoneTimeToAdd * 5) {
        thanosAttack5Timer1 = 550;
    }
    if(infinityStones >= 5) {
      if(thanosAttack5Timer1 <= 0) {
        thanos.velocityX = -6;
        thanosAttack5Timer1 = 800;
        thanosAttack5Timer2 = true;
        thanosSprite = 'thanos_attack51';
      }
      if(thanosAttack5Timer2 == true && thanos.x <= 300) {
        thanosSprite = 'thanos_attack52';
      }
      if(thanosAttack5Timer2 == true && thanos.x <= 110) {
        thanosSprite = 'thanos_attack53';
        thanos.velocityX = 4.5;
        thanosAttack5Timer3 = true;
      }
      if(thanosAttack5Timer3 == true && thanos.x >= 335) {
        thanosSprite = 'thanos_still';
        thanos.velocityX = 0;
        thanosAttack5Timer2 = false;
        thanosAttack5Timer3 = false;
      }
    }
    if (infinityStones >= 6) {
        if (thanosAttack6Timer1 <= 0 && thanosAttack4Timer2 != true) {
            thanosAttack6.visible = true;
            thanosAttack6Timer1 = 400;
            thanosAttack6Timer2 = 50;
            thanosAttack6.x = 50;
        }
    }
    if (thanosAttack6Timer2 <= 0) {
        thanosAttack6.x = 500;
    }
}

function resetThanosAttacks() {
    if (thanosAttack11.x <= -100) {
        thanosAttack11.x = 1200;
        thanosAttack11.visible = true;
    }
    if (thanosAttack12.x <= -100) {
        thanosAttack12.x = 1200;
        thanosAttack12.visible = true;
    }
    if(thanosAttack3.x <= -100) {
      thanosAttack3.x = 800;
      thanosAttack3.visible = true;
    }
}

function 復活節彩蛋Function() {
    if (mousePressedOver(thanos) && 復活節彩蛋Timer2 == false) {
        復活節彩蛋.setAnimation("復活節彩蛋");
        復活節彩蛋Timer1 = 200;
        復活節彩蛋Timer2 = true;
        ironmanHealth += 1000;
    }
    if (復活節彩蛋Timer1 <= 0 && 復活節彩蛋Timer2 == true) {
        復活節彩蛋.setAnimation("none");
    }
}

function newGame() {
  if(gameEndTimer2 && mousePressedOver(startButton)) {
    gameEndTimer2 = false;
    ironmanHealth = 300;
    thanosHealth = 500;
    infinityStones = 0;
    menu.visible = false;
    startButton.visible = false;
  }
}
while ((keyDown("q"))) {
  oof.visible = true;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
