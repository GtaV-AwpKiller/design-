module.exports = {
    testEnvironment: "jest-environment-node",
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest",
        "\\.js$": "<rootDir>/node_modules/babel-jest",
    },
    transformIgnorePatterns: ["node_modules/(?!@shotgunjed)/"],
    moduleNameMapper: {
        "^lodash-es$": "lodash",
        "\\.(css|less)$": "<rootDir>/test/jest/__mocks__/styleMock.js",
    },
};
