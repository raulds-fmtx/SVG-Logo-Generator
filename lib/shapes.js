class Shapes {
    constructor(fill,x,y,dim) {
        if (typeof fill !== "string" || typeof x !== "number" || typeof y !== "number" || typeof dim !== "number") {
            throw new Error("Please enter valid shape parameters.");
        }

        this.fill = fill;
        this.x = x;
        this.y = y;
        this.dim = dim;
    }

    getFill() {return this.fill;}
    getCoords() {return `(${this.x},${this.y})`;}
    getDim() {return this.dim;}
};

class circle extends Shapes{
    constructor(fill,x,y,dim) {
        super(fill,x,y,dim);
    }

    render() {
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.dim/2}" fill="${this.fill}" />`;
    }
};

class square extends Shapes{
    constructor(fill,x,y,dim) {
        super(fill,x,y,dim);
    }

    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.dim}" height="${this.dim}" fill="${this.fill}" />`;
    }
};

class triangle extends Shapes {
    constructor(fill, x, y, dim) {
        super(fill, x, y, dim);
    }

    getPoints() {
        let point1 = `${this.x},${this.y-this.dim/2}`;
        let point2 = `${this.x-this.dim/Math.sqrt(3)},${this.y+this.dim/2}`;
        let point3 = `${this.x+this.dim/Math.sqrt(3)},${this.y+this.dim/2}`;

        return [point1,point2,point3];
    }

    render() {
        let points = this.getPoints();
        return `<polygon points="${points[0]} ${points[1]} ${points[2]}" fill="${this.fill}"/>`;
    }
};

module.exports = {
    square : square,
    triangle : triangle,
    circle : circle
};
