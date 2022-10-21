// [1, 2, 3, 4]

// 'ref'

// [[[1, 2, 3], true], [[1, 2, 3], false]]

hasDuplicate = (arr) => arr.length !== new Set(arr).size

function vowelCount(str) {
    let myMap = new Map()
    Array.from(str).forEach((c)=>{
        if ('aeiou'.includes(c.toLowerCase())){
            if (myMap.get(c)){
                myMap.set(c, myMap.get(c) + 1)
            } else {
                myMap.set(c, 1)
            }
        }
    })
    return myMap
}