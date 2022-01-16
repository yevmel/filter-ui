import antlr4 from "antlr4"
import SearchLexer from "@/antlr/SearchLexer";
import SearchParser from "@/antlr/SearchParser";

function cleanup(str) {
    if (str.startsWith('"') && str.endsWith('"')) {
        return str.substring(1, str.length - 1)
    } else {
        return str
    }
}

function setupValues(values, combination) {
    const cleanValues = values.filter(v => v.length > 0)
    const valuesStr = cleanValues.map(v => setupStr(v)).join(' ')
    return cleanValues.length > 1 ? (combination.toLowerCase() === 'or' ? '[' : '(') + valuesStr + (combination.toLowerCase() === 'or' ? ']' : ')') : valuesStr
}

export function setupStr(str) {
    const trimmed = str.trim()
    return trimmed.match(/^\w+$/) ? trimmed : `"${trimmed}"`
}

export function fromQuery(query) {
    const chars = new antlr4.InputStream(query);
    const lexer = new SearchLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new SearchParser(tokens);
    parser.buildParseTrees = true;

    return parser.query().expression().map(e => {
        const name = cleanup(e.expressionPrefix().name.text)
        const values = e.singleValue() ? [cleanup(e.singleValue().value.text)] : ( e.orValues() ? e.orValues().singleValue().map(v => cleanup(v.value.text)) : e.andValues().singleValue().map(v => cleanup(v.value.text)))
        const combination = e.andValues() ? 'and' : 'or'
        return { name, values, combination }
    })
}

export function toQuery(expressions) {
    return expressions.filter(e => e.name && e.values).map(e => `${setupStr(e.name)}=${setupValues(e.values, e.combination)}`).join(' ')
}