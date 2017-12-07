Array.prototype._map = function(callback) {
    var index = 0;
    var item;
    var newArr = [];
    while(item = this[index]) {
        newArr.push(callback(item, index++, this));
    }
    return newArr;
}

const arr = [10, 10, 10, 10];

const newArr = arr._map((item, index, arr) => item * index);

console.log(newArr);
