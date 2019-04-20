import "./hello-world-button.scss";

class HelloWorldButton {
    helloWorldText = "Hello world!!";
    render() {
        let body = document.querySelector("body");
        let button = document.createElement("button");
        button.innerHTML = "Say " + this.helloWorldText;
        button.onclick = () => {
            let pElement = document.createElement("p");
            pElement.innerHTML = this.helloWorldText;
            body.appendChild(pElement);
        };
        body.appendChild(button);
    }
}

export default HelloWorldButton;