import test_image from "../images/test_image.png";

function addImage() {
    let imageElement = document.createElement("img");
    imageElement.src = test_image;
    imageElement.width = 300;
    imageElement.alt = "My Image";

    let bodyElement = document.querySelector("body");
    bodyElement.appendChild(imageElement);
}

export default addImage;