/* eslint-env node */
module.exports = {
    "root": true,
    "extends": [
        "plugin:vue/vue3-essential",
        "eslint:recommended"
    ],
    "env": {
        "vue/setup-compiler-macros": true
    },
    "rules": {
        "indent": ["off", 4],
        "vue/script-indent": ["error",4,{"baseIndent": 1}],
        "vue/html-indent": ["error", 4, {"baseIndent": 1}]
    }
}
