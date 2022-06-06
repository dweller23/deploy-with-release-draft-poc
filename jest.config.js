module.exports = {
  roots: ["<rootDir>/src"],
  setupFiles: ["<rootDir>/jest.env.js"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  collectCoverage: true,
  moduleDirectories: ["node_modules"],
  testRunner: "jasmine2",
};
