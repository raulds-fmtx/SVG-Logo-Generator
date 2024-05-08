const Shapes = require("../lib/shapes.js");

describe("Circle", () => {
  // Test to verify that the Circle class can be instantiated.
  describe("Instantiate", () => {
    it("should be an instance of circle class", () => {
      const circle = new Shapes.circle('white',0,0,10);
      expect(circle).toBeInstanceOf(Shapes.circle);
    });
  });

  // Test to verify output is rendered properly
  describe("render()", () => {
    it("should render circle properly", () => {
      const rendered = 
        '<circle cx="0" cy="0" r="5" fill="white" />';
      const circle = new Shapes.circle('white',0,0,10);
      expect(circle.render()).toBe(rendered);
    });
  });
});

describe("Square", () => {
  // Test to verify that the Square class can be instantiated.
  describe("Instantiate", () => {
    it("should be an instance of square class", () => {
      const square = new Shapes.square("white", 0, 0, 10);
      expect(square).toBeInstanceOf(Shapes.square);
    });
  });

  // Test to verify output is rendered properly
  describe("render()", () => {
    it("should render square properly", () => {
      const rendered =
        '<rect x="0" y="0" width="10" height="10" fill="white" />';
      const square = new Shapes.square("white", 0, 0, 10);
      expect(square.render()).toBe(rendered);
    });
  });
});

describe("Triangle", () => {
  // Test to verify that the Triangle class can be instantiated.
  describe("Instantiate", () => {
    it("should be an instance of triangle class", () => {
      const triangle = new Shapes.triangle("white", 0, 0, 10);
      expect(triangle).toBeInstanceOf(Shapes.triangle);
    });
  });

  // Test to verify the triangle points are calculated properly with shallow equality
  describe("render()", () => {
    it("should render triangle properly", () => {
      const triangle = new Shapes.triangle("white", 0, 0, 10);
      const points = ["0,5", "-5.773502691896258,-5", "5.773502691896258,-5"];
      expect(triangle.getPoints()).toStrictEqual(points);
    });
  });

  // Test to verify output is rendered properly
  describe("render()", () => {
    it("should render triangle properly", () => {
      const triangle = new Shapes.triangle("white", 0, 0, 10);
      const points = triangle.getPoints();
      const rendered =
        `<polygon points="${points[0]} ${points[1]} ${points[2]}" fill="white"/>`;
      expect(triangle.render()).toBe(rendered);
    });
  });
});