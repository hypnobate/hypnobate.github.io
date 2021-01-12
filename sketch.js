var src=""
let serv = "https://HypnobateStream.katiesarah1.repl.co"
var htvid = "";
var hurl = "";
var vidplaying = false;
var vid = undefined;
 
// USE SOCKET.IO TO HANDLE SERVER EVENTS
const socket = io('https://HypnobateStream.katiesarah1.repl.co');
socket.on("update", function(data) {
  console.log("data");
});
// SETUP FUNCTIONS

//VIDEO DATA WILL BE STORED AS FOLLOWS
/*
msg = ["https://hypnotube/video",[0,3,2]] //[video url, [hours,mins,secs]]
*/

socket.on("video", function(msg){ // this handles the incoming message from the server that tells us what video is on right now and what time its at!
  
});

socket.emit("video",""); //this sends a request to the server which will send us the current video link (this responce will be processed by the handler above)

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
