module.exports = {
    parser: "babel-eslint",
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true
    },
    plugins: ["react-hooks", "react"],
    extends: ["eslint:recommended", "plugin:react/recommended"],
    settings: {
        react: {
            version: "detect"
        }
    },
    parserOptions: {
        ecmaVersion: 2018,
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true
        },
        sourceType: "module"
    },
    rules: {
        "react/prop-types": ["off"],
        "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "comma-dangle": [
            "warn",
            {
                arrays: "never",
                objects: "never",
                imports: "never",
                exports: "never",
                functions: "never"
            }
        ],
        indent: ["warn", 4, { SwitchCase: 2 }],
        "linebreak-style": ["error", "unix"],
        quotes: ["warn", "double"],
        semi: ["error", "always"],
        "no-console": ["error", { allow: ["info", "warn"] }],
        curly: "error",
        "no-else-return": "error",
        "no-unneeded-ternary": "error",
        "no-unused-vars": [
            "warn",
            {
                vars: "all",
                args: "after-used",
                ignoreRestSiblings: false,
                argsIgnorePattern: "^_"
            }
        ],
        "no-useless-return": "error",
        "no-var": "error",
        "one-var": ["error", "never"],
        "prefer-arrow-callback": "warn",
        "prefer-const": "error",
        strict: "error",
        "symbol-description": "error",
        yoda: ["error", "never", { exceptRange: true }]
    }
};
