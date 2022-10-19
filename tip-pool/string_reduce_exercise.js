function extractValue(arr, key){
    return arr.reduce(function(accum, next){
        accum.push(next[key])      
        return accum
    }, [])
  }

  function vowelCount(s){
    return Array.from(s.toLowerCase()).reduce(function(accum, next){
        if ("aeiou".includes(next)){
            if (accum[next]) {
                accum[next] += 1
            } else {
                accum[next] = 1
            }
        }
        return accum
    }, {})
  }

  function addKeyAndValue(arr, key, val){
    return arr.reduce(function(accum, next){
        next[key] = val
        accum.push(next)
        return accum
    }, [])
  }

  function partition(arr, callback){
    return arr.reduce(function(accum, next){
        if (callback(next)){
            accum[0].push(next)
        } else {
            accum[1].push(next)
        }
        return accum
    }, [[], []])
  }