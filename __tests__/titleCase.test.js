const { titleCase } = require("../katas/titleCase.js");

describe("Should convert a string to title case i.e. Capitalise each word apart from exception words like 'of' or 'and'", () => {
    test("Should capitalise a single word passed through without an exception list", () => {
        const title = "space";
        const result = titleCase(title);
        expect(result).toBe("Space");
    })
    test("Should capitalise all words passed through without an exception list", () => {
        const title = "horizon zero dawn";
        const result = titleCase(title);
        expect(result).toBe("Horizon Zero Dawn");
    })
    test("Should not capitalise any words if title only contains words from the exception list", () => {
        const title = "of the and";
        const exceptions = "of the and";
        const result = titleCase(title, exceptions);
        expect(result).toBe("of the and");
    })
    test("Should correctly convert any lower case sentence to title case", () => {
        const title = "whirlwind of the dancing cows";
        const exceptions = "of the";
        const result = titleCase(title, exceptions);
        expect(result).toBe("Whirlwind of the Dancing Cows");
    })
    test("Should correctly convert a mixed case sentence to title case", () => {
        const title = "whIRlwIND OF the DANcing cowS";
        const exceptions = "of the";
        const result = titleCase(title, exceptions);
        expect(result).toBe("Whirlwind of the Dancing Cows");
    })
})