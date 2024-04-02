
var helloSpeaker = new Object();

helloSpeaker.speak = "Hello";

function speak(name) {
  console.log(helloSpeaker.speak + " " + name);
};