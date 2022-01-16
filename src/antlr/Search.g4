grammar Search;

query : expression+ EOF
    ;

expression :
    expressionPrefix (singleValue | orValues |andValues)
    ;

expressionPrefix :
    name=(COMPLEX_STR | SIMPLE_STR) ASSIGNMENT
    ;

orValues :
    '[' singleValue+ ']'
    ;

andValues :
    '(' singleValue+ ')'
    ;

singleValue :
    value=(COMPLEX_STR | SIMPLE_STR)
    ;

SIMPLE_STR :
    [\p{Alpha}0-9.*]+
    ;

COMPLEX_STR :
    '"' ~('"')+ '"'
    ;

ASSIGNMENT
    : '=' | ':'
    ;

WS :
    [ \t\r\n]+ -> skip
    ;