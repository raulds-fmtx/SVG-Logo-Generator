const Shapes = require("./shapes.js");

class Logo {
    constructor(txt, txtFill, shape, bgFill) {       
        switch (shape) {
            case ("circle"):
                this.shape = new Shapes.circle(bgFill,150,100,160);
                break;
            case ("square"):
                this.shape = new Shapes.square(bgFill,70,20,160);
                break;
            case ("triangle"):
                this.shape = new Shapes.triangle(bgFill,150,100,160);
                break;
        }

        this.shapeName = shape;
        this.txt = txt;
        this.txtFill = txtFill;
    }

    getText() {return this.txt;}
    getTextFill() {return this.txtFill};

    renderText() {
        let fontSize = this.shapeName === 'triangle' ? 54 : 60;
        let textY = this.shapeName === "triangle" ? 150 : 125;
        return `<text x="150" y="${textY}" font-size="${fontSize}" text-anchor="middle" fill="${this.txtFill}">${this.txt}</text>`;
    }

    renderShape() {
        return this.shape.render();
    }

    render() {
        let text = this.renderText();
        let shape = this.renderShape();
        let output = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\t${shape}\n\t${text}\n</svg>`;
        return output;
    }
};

module.exports = Logo;