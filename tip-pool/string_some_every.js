function hasOddNumber(arr){
    return arr.some(function(a){
        return a % 2
    })
  }

  function hasAZero(num){
    return Array.from(num.toString()).some(function(a){
        return a === '0'
    })
  }

  function hasOnlyOddNumbers(arr) {
    return arr.every(function(a){
        return a % 2
    })
  }

  function hasNoDuplicates(arr) {
    return !(arr.some(function(a, i, arr){
        return arr.filter(function(el){
            return el === a
        }).length > 1
    }))
  }

  function hasCertainKey(arr, key){
    return arr.every(function(a){
        return a[key]
    })
  }

  function hasCertainValue(arr, key, val){
    return arr.every(function(a){
        return a.key === val
    })
  }

  // -------------------

  function findUserByUsername(arr, userName){
    return arr.find(function(a){
        return a.username === userName
    })
  }

  function removeUser(users, userName) {
    let found_user
    let i = users.findIndex(function(user){
        return user.username === userName
    })
    if (i !== -1)
    {
        found_user = users.splice(i, 1)
        return found_user
    }
  }