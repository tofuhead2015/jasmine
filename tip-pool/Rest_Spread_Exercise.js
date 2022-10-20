const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)

const findMin = (...nums) => nums.reduce((min, next) => Math.min(min, next))

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr,...nums) => [...arr, ...nums.map(num=>num*2)]

const removeRandom = (items) => items.filter((a, i, arr) => i !== Math.floor(Math.random() * arr.length))
    
const extend = (arr1, arr2) => [...arr1, ...arr2]

const addKeyVal = (obj, key,val) => ({...obj, [key]:val})

const removeKey = (obj, key) => {let newObj = { ...obj }
delete newObj[key]
return newObj;}

const combine = (obj1, obj2) => ({...obj1, ...obj2})

const update = (obj, key, val) => ({...obj, [key]:val})