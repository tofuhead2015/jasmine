
function doubleValues(arr){
    return arr.map(function(a) {
      return a*2
    })
  }
  
  function onlyEvenValues(arr){
    return arr.filter(function(a){
      return a % 2 === 0
    })
  }
  
  function showFirstAndLast(arr){
    return arr.map(function(s){
      return s[0] + s[s.length-1]
    })
  }
  
  function addKeyAndValue(arr, key, value){
    return arr.map(function(a){
      a[key] = value
      return a
    })
  }
  
  function vowelCount(s){
    let result = {}
    let v_arr = Array.from(s).filter(function(a){
      return "aeiou".includes(a.toLowerCase())
    })
    v_arr.forEach(function(v){
      v = v.toLowerCase()
      if (!result[v]){
        result[v] = 1
      } else {
        result[v] ++
      }
    })
    return result
  }
  
  function doubleValuesWithMap(arr){
    return arr.map(function(a) {
      return a * 2
    })
  }
  
  function extractKey(arr, key){
    return arr.map(function(a){
      return a[key]
    })
  }
  
  function extractFullName(arr) {
    return arr.map(function(a){
      return a['first'] + ' ' + a['last']
    })
  }
  
  function filterByValue(arr, key){
    return arr.filter(function(a){
      return a[key]
    })
  }
  
  function findInObj(arr, key, val){
    let obj 
    arr.forEach(function(a){
      if (a[key] === val && !obj) obj = a
    })
    return obj
  }
  
  function removeVowels(s){
    return Array.from(s.toLowerCase()).filter(function(a) {
      return !('aeiou'.includes(a))
    }).join('')
  }
  
  function doubleOddNumbers(arr){
    return arr.filter(function(a){
      return (a % 2)
    }).map(function(a){
      return a * 2
    })
  }