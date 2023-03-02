
import assert from "node:assert/strict";
import { calCompoundinterest } from "./compoundinterest.js";
import { computeSalesCommission } from "./computesales.js";
import { calDownpayment } from "./Caldownpayment.js";
import { sumDigit } from "./SumDigits.js";
import { calDistance } from "./CalDistance.js";
describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});
describe("test of compound interest", function () {
    it("tests 100,10,1", function () {
        assert.strictEqual(calCompoundinterest(100, 10, 1), 110.47);
    });
    it("tests of compound interest", function () {
        assert.strictEqual(calCompoundinterest(10000, 5, 10), 16470.09);
    });
});
describe("it will calculate downpayment", function () {
    it("test downpayment", function () {
        assert.strictEqual(calDownpayment(40000), 2000);
    });
    it("it will calculate downpayment", function () {
        assert.strictEqual(calDownpayment(50000), 2500);
    });
});
describe("it will calculate the sum of digits", function () {
    it("will add the digits", function () {
        assert.strictEqual(sumDigit(123), 6);
    });
    it("will add the digits", function () {
        assert.strictEqual(sumDigit(331), 5);
    });
});

describe("it will calculate the distance", function () {
    it("take four parameter and calculate distance", function () {
        assert.strictEqual(calDistance(0, 0, 5, 5), 7);
    });

});