const concerts = {
    'Москва': new Date('2020-04-01'),
    'Казань': new Date('2021-07-02'),
    'Владивосток': new Date('2020-04-21'),
    'Калининград': new Date('2021-07-15'),
    'Омск': new Date('2020-04-18'),
    'Питер': new Date('2021-07-10'),
}

function concertsToArray(concerts) { // O(n*log2n)
    return Object.keys(concerts)
        .filter(city => concerts[city] > new Date()) // O(n)
        .sort((a, b) =>  concerts[a] - concerts[b]) // O(N*log2n)
}

console.log(concertsToArray(concerts));