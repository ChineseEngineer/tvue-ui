module.exports = {
  plugins: {
    "postcss-salad": {
      features: {
        "bem": {
          "defaultNamespace": "tv"
        }
      }
    },
    "postcss-px2rem": {
      remUnit: 37.5,
      remVersion: false
    }
  }
}
