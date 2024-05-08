const Shapes = require("./lib/shapes.js");

class logo {
    construct(txt, txtFill, shape, bgFill) {
        switch (shape) {
            case ("circle"):
                this.shape = new Shapes.circle(bgFill,150,100,160);
                break;
            case ("square"):
                this.shape = new Shapes.square(bgFill,150,100,160);
                break;
            case ("triangle"):
                this.shape = new Shapes.triangle(bgFill,150,100,160);
                break;
        }

        this.txt = txt;
        this.txtFill = txtFill;
    }

    renderText() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${txtFill}">${txt}</text>`;
    }

    renderShape() {
        return this.shape.render();
    }

    render() {
        let text = this.renderText();
        let shape = this.renderShape();
        let output = `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\n
            \t${shape}\n\n
            \t${text}\n\n
            </svg>
            `
        return 
    }
};

module.exports() = logo;