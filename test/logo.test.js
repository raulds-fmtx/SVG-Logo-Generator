const Shapes = require("../lib/shapes.js");
const Logo = require("../lib/logo.js");

describe("Logo", () => {
  // Test to verify that the Logo class can be instantiated.
  describe("Instantiate", () => {
    it("should be an instance of logo class", () => {
      const logo = new Logo("SVG", "white", "circle", "green");
      expect(logo).toBeInstanceOf(Logo);
    });
  });

  // Test to verify text is assigned
  describe("getText()", () => {
    it("should render circle properly", () => {
      const logo = new Logo("SVG", "white", "circle", "green");
      expect(logo.getText()).toBe("SVG");
    });
  });

  // Test to verify text fill is assigned
  describe("getTextFill()", () => {
    it("should render circle properly", () => {
      const logo = new Logo("SVG", "white", "circle", "green");
      expect(logo.getTextFill()).toBe("white");
    });
  });

  // Test to verify circle shape is rendered properly
  describe("renderShape() for shape === 'circle' ", () => {
    it("should render circle properly", () => {
      const circle = new Shapes.circle("green", 150, 100, 160);
      const rendered = circle.render();
      const logo = new Logo("SVG", "white", "circle", "green");
      expect(logo.renderShape()).toBe(rendered);
    });
  });

  // Test to verify triangle shape is rendered properly
  describe("renderShape() for shape === 'triangle' ", () => {
    it("should render triangle properly", () => {
      const triangle = new Shapes.triangle("green", 150, 100, 160);
      const rendered = triangle.render();
      const logo = new Logo("SVG", "white", "triangle", "green");
      expect(logo.renderShape()).toStrictEqual(rendered);
    });
  });

  // Test to verify square shape is rendered properly
  describe("renderShape() for shape === 'square' ", () => {
    it("should render square properly", () => {
      const square = new Shapes.square("green", 70, 20, 160);
      const rendered = square.render();
      const logo = new Logo("SVG", "white", "square", "green");
      expect(logo.renderShape()).toStrictEqual(rendered);
    });
  });

  // Test to verify text is rendered properly for circle
  describe("renderText() for shape === 'circle'", () => {
    it("should render text properly", () => {
      const rendered =
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>';
      const logo = new Logo("SVG", "white", "circle", "green");
      expect(logo.renderText()).toBe(rendered);
    });
  });

  // Test to verify text is rendered properly for square
  describe("renderText() for shape === 'square'", () => {
    it("should render text properly", () => {
      const rendered =
        '<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>';
      const logo = new Logo("SVG", "white", "square", "green");
      expect(logo.renderText()).toBe(rendered);
    });
  });

  // Test to verify text is rendered properly for triangle
  describe("renderText() for shape === 'triangle'", () => {
    it("should render text properly", () => {
      const rendered =
        '<text x="150" y="150" font-size="54" text-anchor="middle" fill="white">SVG</text>';
      const logo = new Logo("SVG", "white", "triangle", "green");
      expect(logo.renderText()).toBe(rendered);
    });
  });

  // Test to verify output is rendered properly
  describe("render()", () => {
    it("should render output properly", () => {
      const logo = new Logo("SVG", "white", "circle", "green");
      const shape = logo.renderShape();
      const text = logo.renderText();
      const rendered = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n\t${shape}\n\t${text}\n</svg>`;
      expect(logo.render()).toBe(rendered);
    });
  });
});