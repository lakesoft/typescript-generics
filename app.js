var taro = {
    name: 'Taro',
    age: 14
};
var get = function (obj, key) {
    return obj[key];
};
var set = function (obj, key, value) {
    obj[key] = value;
};
console.log(get(taro, 'name'), get(taro, 'age'));
set(taro, 'age', 21);
console.log(get(taro, 'name'), get(taro, 'age'));
