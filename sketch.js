var src=""
let serv = "https://HypnobateStream.katiesarah1.repl.co"
var htvid = "";
var hurl = "";
var vidplaying = false;
var vid = undefined;

function setup() {
  createCanvas(1280, 720);
  fetch(serv)
  .then(x => x.text())
  .then(y => src = y);
}

function draw() {
  background(220);
  text(src,20,20);
  if(src!=""&&htvid==""){
    fetch(src)
    .then(x => x.text())
    .then(y => htvid = y);
  }
  if(htvid!=""&&!vidplaying){
    try{hurl = htvid.split("<video id=\"thisPlayer")[1].split("src=\"")[1].split("\" type")[0]}
    catch(e){}
  }
  text(hurl,20,40);
  if(hurl!=""&&!vidplaying){
    vidplaying=true;
    vid = createVideo(hurl);
    
  }
  // try{image(vid, 0, 0);}catch(e){}
}
