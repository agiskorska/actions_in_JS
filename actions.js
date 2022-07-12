// string methods
// console.log("computer".length)

// const str = "I dislike trains as a mode of transport"
// const arr = str.split(' ')
// const trains = arr[2]
// const train = trains.slice(0, -1)
// console.log(train)

// const alph = "abcdefghijklmnopqrstuvwxyz"
// console.log(alph.split('')[4])

// const love = "I love you"
// console.log(love.toUpperCase())

// number methods

// const num = 1.23456789
// console.log(num.toFixed(2))

// const str = "45"
// console.log(parseInt(str))

// const arr = ['red', 'yellow', 'green', 'blue']
// console.log(arr[0], arr[arr.length-1])
// console.log(arr[2])

// const arr2 = ['red', 'yellow', 'green', 'blue']
// arr2.push('orange')
// console.log(arr2)

// const min = Math.min(...[23123, 2, -328, 0])
// console.log(min)

const journey = (country, length, place="London") => {
    return `This flight to ${country} from ${place} took ${length} hours and was very pleasant`
}

console.log(journey('USA', 16, 'UK'))