module.exports = {
	"extends": "eslint:recommended",
	"rules": {
		"arrow-parens": "error",
		"block-scoped-var": "error",
		"brace-style": "error",
		"callback-return": "error",
		"camelcase": "error",
		"capitalized-comments": ["error"],
		"comma-spacing": ["error", { "before": false, "after": true }],
		"complexity": ["error", 10],
		"eol-last": "error",
		"func-call-spacing": ["error", "never"],
		"global-require": "error",
		"handle-callback-err": "error",
		"id-length": ["error", { "min": 3 }],
		"key-spacing": ["error", { "beforeColon": false }],
		"max-depth": ["error", 4],
		"max-len": ["warn", { "code": 120, "ignoreComments": true }],
		"max-nested-callbacks": ["error", 4],
		"max-statements-per-line": ["error", { "max": 1 }],
		"new-cap": "error",
		"new-parens": "error",
		"newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-caller": "error",
		"no-catch-shadow": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-parens": "error",
		"no-floating-decimal": "error",
		"no-implicit-coercion": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-magic-numbers": ["error", { "ignore": [1], "ignoreArrayIndexes": true }],
		"no-mixed-operators": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": "error",
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new-object": "error",
		"no-param-reassign": "error",
		"no-proto": "error",
		"no-return-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "warn",
		"no-undef-init": "error",
		"no-unneeded-ternary": "error",
		"no-use-before-define": "error",
		"no-useless-call": "error",
		"no-void": "error",
		"no-warning-comments": "warn",
		"no-whitespace-before-property": "error",
		"no-with": "error",
		"one-var": ["error", "never"],
		"prefer-const": "error",
		"prefer-promise-reject-errors": "error",
		"semi-spacing": "error",
		"semi": ["error", "always"],
		"spaced-comment": ["error", "always"],
		"switch-colon-spacing": "error",
		"valid-jsdoc": "warn",
		"yoda": "warn"
	}
}
