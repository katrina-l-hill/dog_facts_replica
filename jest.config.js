// jest.config.js
export default {
  transform: {
      "^.+\\.jsx?$": "babel-jest", // Transpile JavaScript files using Babel
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  testEnvironment: "node",
  reporters: [
      "default",
      [
          "jest-junit",
          {
              outputName: "output.xml",
          },
      ],
  ],
  testPathIgnorePatterns: ["/node_modules/"], // Ignore node_modules
};
