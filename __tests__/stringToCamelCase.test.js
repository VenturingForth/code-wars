const { stringToCamelCase } = require("../katas/stringToCamelCase.js")

describe("Converts a string from normal, kebab or snake casing into camel casing", () => {
    test("Should return an empty string if fed an empty string", () => {
        //arrange
        str = "";
        //act
        result = stringToCamelCase(str);
        //assert
        expect(result).toBe(str);
    })
})