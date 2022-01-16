import { assert } from 'chai'

import { fromQuery, toQuery, setupStr } from "@/service/SearchService";

describe("Parsing Search Queries", () => {
    it("should add quotation if necessary", () => {
        assert.equal(setupStr("foo"), "foo")
        assert.equal(setupStr("foo bar"), "\"foo bar\"")
        assert.equal(setupStr("foo=bar"), "\"foo=bar\"")
    })

    it("should parse query", () => {
        const input = "foo=bar \"abc\"=(123 234 \"345\")"
        const expressions = fromQuery(input)

        assert.equal(expressions.length, 2, "number of expressions does not match.")

        assert.equal(expressions[0].name, "foo", "name of first expression does not match.")
        assert.equal(expressions[0].values.length, 1, "number of values in first expression does not match.")
        assert.equal(expressions[0].values[0], 'bar', "value in first expression does not match.")

        assert.equal(expressions[1].name, "abc", "name of first expression does not match.")
        assert.equal(expressions[1].values.length, 3, "number of values in first expression does not match.")
        assert.equal(expressions[1].values[0], '123', "first value in second expression does not match.")
        assert.equal(expressions[1].values[1], '234', "second value in second expression does not match.")
        assert.equal(expressions[1].values[2], '345', "third value in second expression does not match.")
        assert.equal(expressions[1].combination, 'and', "combination in second expression does not match.")
    })

    it("should construct query", () => {
        const input = [{
            name: 'foo', values: ['bar']
        }, {
            name: 'abc', values: ['def ghi', 'jkl'], combination: 'or'
        }]

        assert.equal(toQuery(input), "foo=bar abc=[\"def ghi\" jkl]", "query does not match.")
    })
})