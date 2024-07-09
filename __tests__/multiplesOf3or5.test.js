const { multiplesOf3or5 } = require("../katas/multiplesOf3or5.js");

describe("Return the sum of all numbers that are multiples of 3 or 5 below the passed number", () => {
    test("Should return 0 if fed a negative number", ()=>{
        //arrange
        const num = -1;
        //act
        const result = multiplesOf3or5(num);
        //assert
        expect(result).toBe(0);
    })
    test("Should return 0 if fed a number below 3", ()=>{
        const num = 2;
        const result = multiplesOf3or5(num);
        expect(result).toBe(0);
    })
    test("Should return 3 if fed 4 or 5", () => {
        const num = 5;
        const result = multiplesOf3or5(num);
        expect(result).toBe(3);
    })
    test("Should return the sum of 3 and 5 if given 6", ()=>{
        const num = 6;
        const result = multiplesOf3or5(num);
        expect(result).toBe(8);
    })
    test("Should return the sum of 3, 5, 6, and 9 if given 10", () => {
        const num = 10;
        const result = multiplesOf3or5(num);
        expect(result).toBe(23);
    })
    test("Should return the sum of all numbers divisible by 3 or 5 under a given number", () => {
        const num = 100;
        const result = multiplesOf3or5(num);
        expect(result).toBe(2318);
    })
})