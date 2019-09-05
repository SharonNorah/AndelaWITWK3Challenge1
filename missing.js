//function to find missing numbers from an array
function missing(array) {
    const list = [];
    if (!Array.isArray(array)) {
        return 'invalid input';
    }
    if (array.length <= 1) { return list }
    var i = 1, val = array[0] + 1;
    const count = ((array[array.length - 1]) - val) - (array.length - 2);
    while (list.length < count) {
        while (array[i] !== val) { list.push(val++) }
        i++;
        val++;
    }
    return list;
}
module.exports = missing; {
    console.log(missing([1, 3, 4, 6]));
    console.log(missing(['sharon']));
    console.log(missing([1, 3, 2, 4, 6, 5]));
};