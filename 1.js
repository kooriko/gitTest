Array.prototype._map = function(callback) {
    var index = 0;
    var item;
    var newArr = [];
    while(item = this[index]) {
        newArr.push(callback(item, index++, this));
    }
    return newArr;
}

Array.prototype._find = function(callback) {
    var index = 0;
    var item;
    while(item = this[index]) {
        var result = callback(item, index++, this);
        if(result) {
            return item;
        }
    }
}

const arr = [{
    a: 1,
    b: 2,
}, {
    a: 3,
    b: 4,
}, {
    a: 5,
    b: 6,
}];

const newArr = arr._map((item, index, arr) => item * index);

const fined = arr._find((item, index, arr) => item.a === 5);
console.log(fined);
