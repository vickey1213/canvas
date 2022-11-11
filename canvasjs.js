// HANDLER FOR ARROW SHOOTING
let changeHandler = (b_id, a_id, ctx) => {
  document.getElementById(b_id).onclick = myAction(b_id, a_id, ctx);
};
let myAction = (b_id, a_id, v, ctx) => {
  document.getElementById(b_id).style.transition = "all 2s";
  circleDrawHandler(v, ctx, b_id, "#808080");
  document.getElementById(a_id).style.justifyContent = "start";
};


// HANDLER FOR RESETTING PAGE
document.getElementById("rst").addEventListener("click", () => {
  document.location.reload(true);
});


// Handler for Drawing circles
let circleDrawHandler = (v, ctx, id, color) => {
  v = document.getElementById(id);
  ctx = v.getContext("2d");
  ctx.beginPath();
  ctx.arc(90, 50, 45, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
};
circleDrawHandler("c", "ctx", "circle1", "red");
circleDrawHandler("c2", "ctx2", "circle2", "blue");
circleDrawHandler("c3", "ctx3", "circle3", "green");
circleDrawHandler("c4", "ctx4", "circle4", "yellow");


// Drawing first arrow
let ar1 = document.getElementById("arrow1");

let up_a = ar1.getContext("2d");
up_a.moveTo(0, 45);
up_a.lineTo(40, 15);
up_a.lineWidth = 5;
up_a.stroke();

let dn_a = ar1.getContext("2d");
dn_a.moveTo(0, 45);
dn_a.lineTo(40, 70);
dn_a.stroke();

let st_ln = ar1.getContext("2d");
st_ln.moveTo(0, 45);
st_ln.lineTo(100, 45);
st_ln.stroke();

// Drawing second arrow
let ar2 = document.getElementById("arrow2");

let up_a2 = ar2.getContext("2d");
up_a2.moveTo(0, 45);
up_a2.lineTo(40, 15);
up_a2.lineWidth = 5;
up_a2.stroke();

let dn_a2 = ar2.getContext("2d");
dn_a2.moveTo(0, 45);
dn_a2.lineTo(40, 70);
dn_a2.stroke();

let st_ln2 = ar2.getContext("2d");
st_ln2.moveTo(0, 45);
st_ln2.lineTo(100, 45);
st_ln2.stroke();

// Drawing third arrow
let ar3 = document.getElementById("arrow3");

let up_a3 = ar3.getContext("2d");
up_a3.moveTo(0, 45);
up_a3.lineTo(40, 15);
up_a3.lineWidth = 5;
up_a3.stroke();

let dn_a3 = ar3.getContext("2d");
dn_a3.moveTo(0, 45);
dn_a3.lineTo(40, 70);
dn_a3.stroke();

let st_ln3 = ar3.getContext("2d");
st_ln3.moveTo(0, 45);
st_ln3.lineTo(100, 45);
st_ln3.stroke();

// Drawing fourth arrow
let ar4 = document.getElementById("arrow4");

let up_a4 = ar4.getContext("2d");
up_a4.moveTo(0, 45);
up_a4.lineTo(40, 15);
up_a4.lineWidth = 5;
up_a4.stroke();

let dn_a4 = ar4.getContext("2d");
dn_a4.moveTo(0, 45);
dn_a4.lineTo(40, 70);
dn_a4.stroke();

let st_ln4 = ar4.getContext("2d");
st_ln4.moveTo(0, 45);
st_ln4.lineTo(100, 45);
st_ln4.stroke();
