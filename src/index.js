module.exports = function reverse (n) {
  let strN = String(Math.abs(n));
  result = '';
  for (i = strN.length - 1; i >= 0; i--) {
	  result += strN[i]; 
  }
  return Number(result);
}
