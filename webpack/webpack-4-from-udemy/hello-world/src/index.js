import HelloWorldButton from "./components/hello-world-button/hello-world-button.js";
import addImage from "./add-image.js";
import Header from "./components/header/header.js";

new Header().render();
addImage();
const helloWorld = new HelloWorldButton();
helloWorld.render();