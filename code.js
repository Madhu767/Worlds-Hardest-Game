var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["628056db-3252-45ea-9dec-a3512ca044b9","cf8c0680-bdc2-4433-921f-6edc3a1e6ed1","7fb5ac0f-38f6-4463-bb09-8f284591ee31","24248e01-ab91-48d6-991a-7ce22b9ac891","43e193bd-7cee-48b9-a347-c94cf26afa42","3caea1de-eeac-4122-b406-d9c2c4a355cb"],"propsByKey":{"628056db-3252-45ea-9dec-a3512ca044b9":{"name":"SP1","sourceUrl":null,"frameSize":{"x":481,"y":519},"frameCount":1,"looping":true,"frameDelay":12,"version":"iI0H2OLkTBlww5lTWFSSs0aYbfEn.If0","loadedFromSource":true,"saved":true,"sourceSize":{"x":481,"y":519},"rootRelativePath":"assets/628056db-3252-45ea-9dec-a3512ca044b9.png"},"cf8c0680-bdc2-4433-921f-6edc3a1e6ed1":{"name":"SP2","sourceUrl":null,"frameSize":{"x":322,"y":281},"frameCount":1,"looping":true,"frameDelay":12,"version":"4BjfQ1eQ.A8fsA0fMSejZ9XAXp.bIpVU","loadedFromSource":true,"saved":true,"sourceSize":{"x":322,"y":281},"rootRelativePath":"assets/cf8c0680-bdc2-4433-921f-6edc3a1e6ed1.png"},"7fb5ac0f-38f6-4463-bb09-8f284591ee31":{"name":"PB","sourceUrl":null,"frameSize":{"x":300,"y":300},"frameCount":1,"looping":true,"frameDelay":12,"version":"__z0DwS.zLHZ3RE.QQ0PWeTKYo0iO.M8","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":300},"rootRelativePath":"assets/7fb5ac0f-38f6-4463-bb09-8f284591ee31.png"},"24248e01-ab91-48d6-991a-7ce22b9ac891":{"name":"SP3","sourceUrl":null,"frameSize":{"x":226,"y":223},"frameCount":1,"looping":true,"frameDelay":12,"version":"tmh0ZHTteSHeJ8pKt8V4XnXZMK52vqxo","loadedFromSource":true,"saved":true,"sourceSize":{"x":226,"y":223},"rootRelativePath":"assets/24248e01-ab91-48d6-991a-7ce22b9ac891.png"},"43e193bd-7cee-48b9-a347-c94cf26afa42":{"name":"SP4","sourceUrl":null,"frameSize":{"x":260,"y":280},"frameCount":1,"looping":true,"frameDelay":12,"version":"ousHA9gNZvn7_.Cx9sQKWJwt_hrKn3gs","loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":280},"rootRelativePath":"assets/43e193bd-7cee-48b9-a347-c94cf26afa42.png"},"3caea1de-eeac-4122-b406-d9c2c4a355cb":{"name":"SP5","sourceUrl":null,"frameSize":{"x":612,"y":408},"frameCount":1,"looping":true,"frameDelay":12,"version":"Rg9d6TuaRqHYWlkfAfePxFWL.WuWzlz8","loadedFromSource":true,"saved":true,"sourceSize":{"x":612,"y":408},"rootRelativePath":"assets/3caea1de-eeac-4122-b406-d9c2c4a355cb.png"}}};
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

var life = 7;
var SP1,SP2,SP3,SP4,SP5;
var boundary1, boundary2;
var PB;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);

  PB = createSprite(20,190,13,13);
  PB.shapeColor = "green";
  PB.setAnimation("PB");
  PB.scale = 0.11;
  
  SP1 = createSprite(100,130,10,10);
  SP1.shapeColor = "red";
  SP1.setAnimation("SP1");
  SP1.scale = 0.1;
  
  SP2 = createSprite(215,130,10,10);
  SP2.shapeColor = "red";
  SP2.setAnimation("SP2");
  SP2.scale = 0.11;
  
  SP3 = createSprite(165,250,10,10);
  SP3.shapeColor = "red";
  SP3.setAnimation("SP3");
  SP3.scale = 0.11;
  
  SP4 = createSprite(270,250,10,10);
  SP4.shapeColor = "red";
  SP4.setAnimation("SP4");
  SP4.scale = 0.11;

  SP5 = createSprite(270,250,10,10);
  SP5.shapeColor = "red";
  SP5.setAnimation("SP4");
  SP5.scale = 0.11;

  SP1.velocityY = 8; 
  SP2.velocityY = 8; 
  SP3.velocityY = -8; 
  SP4.velocityY = -8; 
  SP5.velocityY = 8;


function draw() {
  
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("ivory");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  SP1.bounceOff(boundary1);
  SP1.bounceOff(boundary2);
  SP2.bounceOff(boundary1);
  SP2.bounceOff(boundary2);
  SP3.bounceOff(boundary1);
  SP3.bounceOff(boundary2);
  SP4.bounceOff(boundary1);
  SP4.bounceOff(boundary2);
  SP5.bounceOff(boundary1);
  SP5.bounceOff(boundary2);
  
 
  if(keyDown("right")){
    PB.x = PB.x + 2;
  }
  if(keyDown("left")){
    PB.x = PB.x - 2;
  }
  
  if(
     PB.isTouching(SP1)||
     PB.isTouching(SP2)||
     PB.isTouching(SP3)||
     PB.isTouching(SP4)||
     PB.isTouching(SP5))
  {
     PB.x = 20;
     PB.y = 190;
     life = life - 1;
  }
  
  if(life === 0){
    text("GAME OVER!!",130,200);
    SP1.velocityY = 0;
    SP2.velocityY = 0;
    SP3.velocityY = 0;
    SP4.velocityY = 0;
    SP5.velocityY = 0;
  }
 
 drawSprites();
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
