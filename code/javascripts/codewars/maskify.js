// Masks all but the last 4 characters of a string with hashtags
// unless the string is shorter than 4 characters in which case it does not mask it
function maskify(cc) {
  const ccBack = cc;
  if (cc.length <= 4) {
    return cc;
  }
  function mask() {
    let masked = "#";
    for (let i = 1; i < cc.length; i++) {
      if (i > cc.length - 5) {
        masked += cc[i];
      } else {
        masked += "#";
      }
    }
    return masked;
  }
  return mask();
}

// Better version
function maskifyBetter(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

module.exports.maskify = maskifyBetter;
