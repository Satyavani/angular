import "./header.scss";

class Header {
    render() {
        let body = document.querySelector("body");
        let h1Element = document.createElement("h1");
        h1Element.innerHTML = "Hello world example heading!!";

        body.appendChild(h1Element);
    }
}

export default Header;