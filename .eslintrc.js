module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],
    rules: {
        "eqeqeq": "error",
        "default-param-last": ["error"],
        "dot-notation": "error",

        "id-length": ["error", { "min": 2 }],
        "max-depth": ["error", 4],
        "max-lines": ["error", 200],
        "complexity": ["error", 5],

        "no-duplicate-imports": "error",
        "no-console": "error",
        "no-magic-numbers": "error",
        "no-multi-assign": "error",
        "no-nested-ternary": "error",
        "no-unneeded-ternary": "error",
        "no-undefined": "error",
        "no-unused-vars": ['error', {
            ignoreRestSiblings: true
        }],
        "no-useless-computed-key": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "one-var": ["error", "never"],

        "prefer-const": "error",
        "spaced-comment": ["error", "always"],
        "yoda": "error",

        "array-bracket-spacing": ["error", "never"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "block-spacing": "error",
        "brace-style": "error",
        "comma-dangle": ["error", "always-multiline"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "comma-style": ["error", "last"],
        "computed-property-spacing": ["error", "never"],
        "curly": "error",
        "eol-last": ["error", "never"],
        "func-call-spacing": ["error", "never"],
        "function-call-argument-newline": ["error", "consistent"],
        "function-paren-newline": ["error", "consistent"],
        "implicit-arrow-linebreak": ["error", "beside"],
        "indent": ["error", 4],
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "linebreak-style": ["error", "unix"],
        "lines-around-comment": ["error", { "afterBlockComment": true }],
        "max-len": ["error", { "code": 120, "ignoreStrings": true, "ignoreTemplateLiterals": true }],
        "max-statements-per-line": ["error", { "max": 1 }],
        "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
        "no-extra-parens": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-multiple-empty-lines": "error",
        "no-trailing-spaces": "error",
        "no-whitespace-before-property": "error",
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": ["error", "none"],
        "padded-blocks": ["error", "never"],
        "padding-line-between-statements": [
            "error",
            { blankLine: "always", prev: ["const", "let"], next: "*" },
            { blankLine: "any", prev: ["const", "let"], next: ["const", "let"] },
            { blankLine: "always", prev: "*", next: "return" }
        ],
        "quotes": ["error", "single"],
        "rest-spread-spacing": ["error", "never"],
        "semi": ["error", "always"],
        "semi-spacing": ["error", {"before": false, "after": true}],
        "space-before-blocks": "error",
        "space-before-function-paren": ["error", "never"],
        "space-in-parens": ["error", "never"],
        "space-infix-ops": "error",
        "space-unary-ops": "error",
        "template-curly-spacing": "error",
        'import/order': [
            'error',
            {
              'pathGroupsExcludedImportTypes': [
                'builtin'
              ],
              'groups': [
                'builtin',
                'external',
                'internal',
                'parent',
                'sibling',
                'index'
              ],
            }
          ],

    }
};