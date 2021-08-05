const presets = [
  ["@babel/preset-env", {
    "targets": {
      "chrome": 40,
      "safari": 6,
      "ie": 10
    },
    "useBuiltIns": "usage",
    "corejs": 3
  }]
]

module.exports = { presets };