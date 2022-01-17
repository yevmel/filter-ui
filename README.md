# filter-ui

* [antlr](https://www.antlr.org/) for parsing text-based queries
* ui is built with [vue](https://cli.vuejs.org/), [tailwind css](https://tailwindcss.com/) and a little bit of [headless ui](https://headlessui.dev/vue)

## generate lexer and parser

    # Windows
    & ${env:JAVA_HOME}\bin\java -cp ${env:ANTLR_JAR} org.antlr.v4.Tool -Dlanguage=JavaScript .\src\antlr\Search.g4

## Demo

https://yevmel.github.io/filter-ui/
