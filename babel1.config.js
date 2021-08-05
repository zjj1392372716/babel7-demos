module.exports  = (api) => {
  api.cache(true);

  const presets = [
    ["@babel/preset-env", {
      "targets": {
        "chrome": 40
      },
      "useBuiltIns": "usage",
      "corejs": 2
    }]
  ]

  return {
    presets,
    plugins: []
  }
}