class Slingshot{}
constructotr(bodayA, bodyB)(
  var options- {
  bodyA: bodyA,
  bodyB: bodyB,
  stiffiness:0.04,
  length:10
  }
this.sling- Constructor.create(options);
World.add(world, this.sling);
}
display(){
  var pointA= this.sling.bodyA.position;
  var ponitB= this.sling.bodyB.position;
  strokeWeight(4):
  line(pointA.x, pointA.y, pointB.x, pontB.y)
}
}
