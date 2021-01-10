var src=""
let serv = "https://HypnobateStream.katiesarah1.repl.co"
var htvid = "";
var hurl = "";
var vidplaying = false;
var vid = undefined;

// SETUP
fetch(serv)
.then(x => x.text())
.then(y => src = y);

// ==========================

// MAIN LOOP - TODO - Make this not a loop, and use non async fetch call! (probably XHR)

if(src!=""&&htvid==""){
  fetch(src)
  .then(x => x.text())
  .then(y => htvid = y);
}

if(htvid!=""&&!vidplaying){
  try{hurl = htvid.split("<video id=\"thisPlayer")[1].split("src=\"")[1].split("\" type")[0]}
  catch(e){}
}

if(hurl!=""&&!vidplaying){
  vidplaying=true;
  vid = hurl;
}
