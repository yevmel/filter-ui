// Generated from .\src\antlr\Search.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import SearchListener from './SearchListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\n1\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0006\u0002\u0010\n\u0002\r\u0002\u000e\u0002\u0011\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005",
    "\u0003\u001a\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005",
    "\u0003\u0005\u0006\u0005!\n\u0005\r\u0005\u000e\u0005\"\u0003\u0005",
    "\u0003\u0005\u0003\u0006\u0003\u0006\u0006\u0006)\n\u0006\r\u0006\u000e",
    "\u0006*\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0002\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0003\u0003\u0002\u0007",
    "\b\u0002/\u0002\u000f\u0003\u0002\u0002\u0002\u0004\u0015\u0003\u0002",
    "\u0002\u0002\u0006\u001b\u0003\u0002\u0002\u0002\b\u001e\u0003\u0002",
    "\u0002\u0002\n&\u0003\u0002\u0002\u0002\f.\u0003\u0002\u0002\u0002\u000e",
    "\u0010\u0005\u0004\u0003\u0002\u000f\u000e\u0003\u0002\u0002\u0002\u0010",
    "\u0011\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011",
    "\u0012\u0003\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013",
    "\u0014\u0007\u0002\u0002\u0003\u0014\u0003\u0003\u0002\u0002\u0002\u0015",
    "\u0019\u0005\u0006\u0004\u0002\u0016\u001a\u0005\f\u0007\u0002\u0017",
    "\u001a\u0005\b\u0005\u0002\u0018\u001a\u0005\n\u0006\u0002\u0019\u0016",
    "\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0019\u0018",
    "\u0003\u0002\u0002\u0002\u001a\u0005\u0003\u0002\u0002\u0002\u001b\u001c",
    "\t\u0002\u0002\u0002\u001c\u001d\u0007\t\u0002\u0002\u001d\u0007\u0003",
    "\u0002\u0002\u0002\u001e \u0007\u0003\u0002\u0002\u001f!\u0005\f\u0007",
    "\u0002 \u001f\u0003\u0002\u0002\u0002!\"\u0003\u0002\u0002\u0002\" ",
    "\u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002",
    "\u0002$%\u0007\u0004\u0002\u0002%\t\u0003\u0002\u0002\u0002&(\u0007",
    "\u0005\u0002\u0002\')\u0005\f\u0007\u0002(\'\u0003\u0002\u0002\u0002",
    ")*\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002*+\u0003\u0002\u0002",
    "\u0002+,\u0003\u0002\u0002\u0002,-\u0007\u0006\u0002\u0002-\u000b\u0003",
    "\u0002\u0002\u0002./\t\u0002\u0002\u0002/\r\u0003\u0002\u0002\u0002",
    "\u0006\u0011\u0019\"*"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SearchParser extends antlr4.Parser {

    static grammarFileName = "Search.g4";
    static literalNames = [ null, "'['", "']'", "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, "SIMPLE_STR", 
                             "COMPLEX_STR", "ASSIGNMENT", "WS" ];
    static ruleNames = [ "query", "expression", "expressionPrefix", "orValues", 
                         "andValues", "singleValue" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SearchParser.ruleNames;
        this.literalNames = SearchParser.literalNames;
        this.symbolicNames = SearchParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SearchParser.RULE_query);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.expression();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SearchParser.SIMPLE_STR || _la===SearchParser.COMPLEX_STR);
	        this.state = 17;
	        this.match(SearchParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SearchParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.expressionPrefix();
	        this.state = 23;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SearchParser.SIMPLE_STR:
	        case SearchParser.COMPLEX_STR:
	            this.state = 20;
	            this.singleValue();
	            break;
	        case SearchParser.T__0:
	            this.state = 21;
	            this.orValues();
	            break;
	        case SearchParser.T__2:
	            this.state = 22;
	            this.andValues();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionPrefix() {
	    let localctx = new ExpressionPrefixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SearchParser.RULE_expressionPrefix);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        localctx.name = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===SearchParser.SIMPLE_STR || _la===SearchParser.COMPLEX_STR)) {
	            localctx.name = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 26;
	        this.match(SearchParser.ASSIGNMENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	orValues() {
	    let localctx = new OrValuesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SearchParser.RULE_orValues);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(SearchParser.T__0);
	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 29;
	            this.singleValue();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SearchParser.SIMPLE_STR || _la===SearchParser.COMPLEX_STR);
	        this.state = 34;
	        this.match(SearchParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	andValues() {
	    let localctx = new AndValuesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SearchParser.RULE_andValues);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(SearchParser.T__2);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.singleValue();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SearchParser.SIMPLE_STR || _la===SearchParser.COMPLEX_STR);
	        this.state = 42;
	        this.match(SearchParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	singleValue() {
	    let localctx = new SingleValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SearchParser.RULE_singleValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        localctx.value = this._input.LT(1);
	        _la = this._input.LA(1);
	        if(!(_la===SearchParser.SIMPLE_STR || _la===SearchParser.COMPLEX_STR)) {
	            localctx.value = this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SearchParser.EOF = antlr4.Token.EOF;
SearchParser.T__0 = 1;
SearchParser.T__1 = 2;
SearchParser.T__2 = 3;
SearchParser.T__3 = 4;
SearchParser.SIMPLE_STR = 5;
SearchParser.COMPLEX_STR = 6;
SearchParser.ASSIGNMENT = 7;
SearchParser.WS = 8;

SearchParser.RULE_query = 0;
SearchParser.RULE_expression = 1;
SearchParser.RULE_expressionPrefix = 2;
SearchParser.RULE_orValues = 3;
SearchParser.RULE_andValues = 4;
SearchParser.RULE_singleValue = 5;

class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SearchParser.RULE_query;
    }

	EOF() {
	    return this.getToken(SearchParser.EOF, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.exitQuery(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SearchParser.RULE_expression;
    }

	expressionPrefix() {
	    return this.getTypedRuleContext(ExpressionPrefixContext,0);
	};

	singleValue() {
	    return this.getTypedRuleContext(SingleValueContext,0);
	};

	orValues() {
	    return this.getTypedRuleContext(OrValuesContext,0);
	};

	andValues() {
	    return this.getTypedRuleContext(AndValuesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ExpressionPrefixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SearchParser.RULE_expressionPrefix;
        this.name = null; // Token
    }

	ASSIGNMENT() {
	    return this.getToken(SearchParser.ASSIGNMENT, 0);
	};

	COMPLEX_STR() {
	    return this.getToken(SearchParser.COMPLEX_STR, 0);
	};

	SIMPLE_STR() {
	    return this.getToken(SearchParser.SIMPLE_STR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.enterExpressionPrefix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.exitExpressionPrefix(this);
		}
	}


}



class OrValuesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SearchParser.RULE_orValues;
    }

	singleValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleValueContext);
	    } else {
	        return this.getTypedRuleContext(SingleValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.enterOrValues(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.exitOrValues(this);
		}
	}


}



class AndValuesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SearchParser.RULE_andValues;
    }

	singleValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleValueContext);
	    } else {
	        return this.getTypedRuleContext(SingleValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.enterAndValues(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.exitAndValues(this);
		}
	}


}



class SingleValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SearchParser.RULE_singleValue;
        this.value = null; // Token
    }

	COMPLEX_STR() {
	    return this.getToken(SearchParser.COMPLEX_STR, 0);
	};

	SIMPLE_STR() {
	    return this.getToken(SearchParser.SIMPLE_STR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.enterSingleValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SearchListener ) {
	        listener.exitSingleValue(this);
		}
	}


}




SearchParser.QueryContext = QueryContext; 
SearchParser.ExpressionContext = ExpressionContext; 
SearchParser.ExpressionPrefixContext = ExpressionPrefixContext; 
SearchParser.OrValuesContext = OrValuesContext; 
SearchParser.AndValuesContext = AndValuesContext; 
SearchParser.SingleValueContext = SingleValueContext; 
