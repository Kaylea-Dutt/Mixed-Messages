function randomNumber(num) {
    return Math.floor(Math.random()* num)
}

const sayings = {
    array1: ['do it!', 'do hard things!', 'do great things!'],
    array2: ['be great!', 'be the day!', 'be productive!'],
    array3: ['holds great things!', 'is up to you!', 'will be great!']
}

let finalSaying = []

for (let i in sayings) {
    let randomSaying = randomNumber(sayings[i].length)

    switch(i) {
        case 'array1':
            finalSaying.push(`You can ${sayings[i][randomSaying]}`)
            break;
        case 'array2':
            finalSaying.push(`Today will ${sayings[i][randomSaying]}`)
            break;
        case 'array3':
            finalSaying.push(`The future ${sayings[i][randomSaying]}`)
            break;
            default:
            finalSaying.push('There was an error sadly!');
    }
}

console.log(finalSaying);
