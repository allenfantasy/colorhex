module.exports = {
  color2hex: function(rgb) {
    var R = (rgb[0] - 0).toString(16)
    var G = (rgb[1] - 0).toString(16)
    var B = (rgb[2] - 0).toString(16)
    return '#' + R + G + B
  },
  hex2color: function(hex) {
    if (hex.length !== 7) {
      throw new Error('ColorHex: invalid hex value')
    }
    var r = parseInt(hex.substring(1, 3), 16)
    var g = parseInt(hex.substring(3, 5), 16)
    var b = parseInt(hex.substring(5, 7), 16)
    return [r,g,b]
  }
}
