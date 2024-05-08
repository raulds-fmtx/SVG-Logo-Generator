class shapes {
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
    getCenter() {return `(${this.x},${this.y})`;}
    getDim() {return this.dim;}
};

class circle extends shapes{
    constructor(fill,x,y,dim) {
        super(fill,x,y,dim);
    }

    render() {
        return `<circle cx="${x}" cy="${y}" r="${dim/2}" fill="${fill}" />`;
    }
};

class square extends shapes{
    constructor(fill,x,y,dim) {
        super(fill,x,y,dim);
    }

    render() {
        return `<rect x="${x}" y="${y}" width="${dim}" height="${dim}" fill="${fill}" />`;
    }
};

class triangle extends shapes {
    constructor(fill, x, y, dim) {
        super(fill, x, y, dim);
    }

    getPoints() {
        let point1 = `${this.x},${this.y+this.dim/2}`;
        let point2 = `${this.x-this.dim/Math.sqrt(3)},${this.y-this.dim/2}`;
        let point3 = `${this.x-this.dim/Math.sqrt(3)},${this.y-this.dim/2}`;

        return [point1,point2,point3];
    }

    render() {
        let points = this.getPoints();
        return `<polygon points="${points[0]} ${points[1]} ${points[2]}" fill="${fill}"/>`;
    }
};

module.exports = {
    square : square,
    triangle : triangle,
    circle : circle
};
