
// Q 1: CHECK FOR 'EVEN-NESS' OR 'ODD-NESS'

const isEven = (m) => {
  if (m % 2 === 0) {
    return `${m} is an even number`
  }
  return `${m} is an odd number`
}

console.log(isEven(55))

// Q 2: COUNT UPPERCASES

const countChar = (str) => {
  let count = 0
  for (let i = 0; i <= str.length; i++) {
    if (str[i] >= 'A' && str[i] <= 'Z') {
      count++
    }
  }
  return count
}

console.log(countChar('JavaScripT'))

// Q 3: COUNT SPECIFIC UPPERCASE

const countBs = (str, char) => {
  const count = 0
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === char) {
      count++
    }
  }
  return count
}

console.log(countBs('truthy AND falsy', 'A'))

// Q 4: FIBONACCI

// Q 5: RANGE

const range = (start, end) => {
  const count = []
  // end = count[count.length - 1]
  for (let i = start; i <= end; i++ ) {
    // count++
    count.push(i)
  }
  return count
}

console.log(range(2, 4))


// Q 6: STEP-RANGE (returns fatal error...when tested for a decreament)

const stepRange = (start, end, incri) => {
  const count = []
  // end = count[count.length - 1]
  for (let i = start; i <= end; i += incri) {
    // if (start++ || end--) {... 
    count.push(i) 
    // i += incri
    // }
  }  
  return count
}

console.log(stepRange(1, 15, 4)) // =>

// Q 7: TRUE-RANGE

// Q 8: RETURN THE SUM OF THE ARRAY NUMBERS

const arraySum = (arr) => {
  // count from zero not an empty array...
  const accumulator = 0
  let looped = arr.length - 1
  for (let i = 0; i <= looped; i++) {
    // accum.push(i) xxx
    accumulator += arr[i]
  }
  return accumulator
}

let theArr = [1, 2, 3]
console.log(arraySum(theArr)) // => 6

// Q 9: RETURN THE AVERAGE OF THE ARRAY NUMBERS

const arrAvr = (list) => {
  const count = 0
  let stretch = list.length - 1
  for (let i = 0; i <= stretch; i++) {
    count += list[i]
    // console.log(list[i])
  }
  return count / (list.length)
}
let arre = [20, 30, 40, 50]
console.log(arrAvr(arre)) // => 35

// Q 10: 

const deepEqual = (a, b) => {
  // The OR and its right hand condition allows for that flexibility
  if (a === b || a == b) {
    return true
  } else {
    return false
  }
}
console.log(deepEqual('3', 3)) // => true
// 

const obj1 = Object{}
const obj2 = Object{}
obj1.name = 'terry'
obj1.city = 'bertoua'
obj2.name = 'terry'
obj2.city = 'bertoua'
console.log(deepEqual(obj1, obj2)) // Says !true..
