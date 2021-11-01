type Person = {
  name: string,
  age: number
}

const taro:Person = {
  name: 'Taro',
  age: 14
}

const get = <T, U extends keyof T> (obj: T, key: U) => {
  return obj[key]
}

const set = <T, U extends keyof T, V extends T[U]> (obj: T, key: U, value: V) => {
  obj[key] = value
}

console.log(get(taro, 'name'), get(taro, 'age'))
set(taro, 'age', 21)
console.log(get(taro, 'name'), get(taro, 'age'))

