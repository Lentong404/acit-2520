function cToF(temp) {
  return (parseInt(temp) * 9) / 5 + 32;
}
function fToC(temp) {
  return ((parseInt(temp) - 32) * 5) / 9;
}
module.exports = { cToF, fToC };
