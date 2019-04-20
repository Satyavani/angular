import "./hello-world-button.css";

class HelloWorldButton {
    render() {
        let body = document.querySelector("body");
        let button = document.createElement("button");
        button.innerHTML = "Say Hello World!";
        button.onclick = () => {
            let pElement = document.createElement("p");
            pElement.innerHTML = "Hello world!!";
            body.appendChild(pElement);
        };
        body.appendChild(button);
    }
}

export default HelloWorldButton;