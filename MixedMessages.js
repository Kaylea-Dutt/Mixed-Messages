function randomNumber(num) {
    return Math.floor(Math.random() *num)
}

const sayings = {
    array1: ['Will be great', 'will be awesome', 'will be ok'],
    array2: ['do hard things', 'make good choices', 'achieve anything'],
    array3: ['be amazing', 'do anything', 'be positive']
}

const finalSaying = []

for (let i in sayings) {
    const randomSaying = randomNumber(sayings[i].length)

    switch(i) {
        case 'array1':
            finalSaying.push(`Today will ${sayings[i][randomSaying]}`)
        break;
        case 'array2':
            finalSaying.push(`You can ${sayings[i][randomSaying]}`)
        break;
        case 'array3':
            finalSaying.push(`You will ${sayings[i][randomSaying]}`)
        break;
        default:
            finalSaying.push('Not enough info sorry!')
        break;
    }
}

console.log(finalSaying);