module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
             4
        ],
        "key-spacing": [
            2,
            { "beforeColon": false, "afterColon": true }
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars":0
    }
};
