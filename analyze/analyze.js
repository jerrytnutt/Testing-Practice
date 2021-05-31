const analyze = (array) => {
 return {
    avrage: array.reduce((a, b) => (a + b)) / array.length,
    min: Math.min.apply(Math,array),
    max: Math.max.apply(Math,array),
    length: array.length}
}
module.exports = analyze