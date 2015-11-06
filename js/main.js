// add scripts

//console.log("sanity check!");
//
//var myFn = function (array) {
//    var mapped = array.map(function (value) {
//        return value / 10;
//    })
//    return mapped;
//}
//
//console.log(myFn([10, 20, 30]));

//var myFn = function (array) {
//    return array.map(function (current, index, array) {
//        return array[index - 1] || array[array.length - 1];
//    });
//};
//console.log([10,20,30)];
//            

//var myFn = function (array) {
//    return array.map(function (val, index, array) {
//        return val.replace(/[^aieou]/ig, '');
//    })
//}
//console.log(myFn(['average', 'exceptional', 'amazing']))


//var myMatrix = [[1, 2, 3],
//                 [4, 5, 6],
//                 [7, 8, 9]]; 
// myFn(myMatrix) >> [ [ 2, 4, 6 ], [8, 10, 12 ], [ 14, 16, 18 ] ]

//var myFn2 = function (array) {
//    var mapped = array.map(function (row, index) {
//        return row.map(function (number, i) {
//            console.log(number);
//            return number * 2;
//        })
//    })
//    return mapped;
//}
//
//console.log(myFn2(myMatrix));

//var myFn = function (array) {
//    var filtered = array.filter(array) {
//        return 
//    }
//}
//
//
//var myFn3 = function (array) {
//    return array.map(function (pokemon) {
//        var obj = {};
//        obj[pokemon.name]: pokemon.nextEvolutions || [];;
//        return obj;
//    })
//}





// myFn3(wesFavoritePokemon) >> [{ 'Crobat': [], 'Gengar': [{ id: ..., name: 'Mega Gengar' }, ...]}]
// Return an object with the Pokemon's name as the key and their next evolutions as the value.
// If there are no next evolutions, return an empty array.
//
var wesFavoritePokemon = [{
        id: '38413e28-83ec-11e5-8bcf-feff819cdc9f',
        name: 'Crobat',
        type: ['Poison', 'Flying'],
        evolves: false,
        formerEvolutions: [{
                id: '38414792-83ec-11e5-8bcf-feff819cdc9f',
                name: 'Golbat'
                                                },
            {
                id: '3841490e-83ec-11e5-8bcf-feff819cdc9f',
                name: 'Zubat'
                                                }]
                           },
    {
        id: '384141f2-83ec-11e5-8bcf-feff819cdc9f',
        name: 'Gengar',
        type: ['Ghost', 'Poison'],
        evolves: true,
        formerEvolutions: [{
                id: '38414fa8-83ec-11e5-8bcf-feff819cdc9f',
                name: 'Haunter'
                                                },
            {
                id: '38415174-83ec-11e5-8bcf-feff819cdc9f',
                name: 'Ghastly'
                                                }],
        nextEvolutions: [{
            id: '384152e6-83ec-11e5-8bcf-feff819cdc9f',
            name: 'Mega Gengar'
                                              }]
                           },
    {
        id: '3841444a-83ec-11e5-8bcf-feff819cdc9f',
        name: 'Jigglypuff',
        type: ['Normal', 'Fairy'],
        evolves: true,
        formerEvolutions: [{
            id: 'fda25954-83ec-11e5-8bcf-feff819cdc9f',
            name: 'Igglybuff'
                                                }],
        nextEvolutions: [{
            id: 'fda25b2a-83ec-11e5-8bcf-feff819cdc9f',
            name: 'Wigglytuff'
                                              }]
                           },
    {
        id: '3841460c-83ec-11e5-8bcf-feff819cdc9f',
        name: 'Clefairy',
        type: ['Fairy'],
        evolves: true,
        formerEvolutions: [{
            id: 'fda262be-83ec-11e5-8bcf-feff819cdc9f',
            name: 'Cleffa'
                                                }],
        nextEvolutions: [{
            id: 'fda2639a-83ec-11e5-8bcf-feff819cdc9f',
            name: 'Clefable'
                                              }]
                           }]

//
//// myFn(wesFavoritePokemon) >> [{ name: 'Jigglypuff', ... }]
//// Return the Pokemon whose ID is '3841444a-83ec-11e5-8bcf-feff819cdc9f'. Return the entire object.
//
//var myFn = function (array) {
//    return array.filter(function (obj) {
//        if (obj.formerEvolutions.id === '3841444a-83ec-11e5-8bcf-feff819cdc9f') {
//            
//        })
//    }
//}
//console.log(myFn(wesFavoritePokemon))



//var myMatrix = [[1, 0, 1],
//                 [1, 1, 1],
//                 [0, 1, 1]];
// myFn(myMatrix) >> [ [ 1, 0, 1 ], [ 0, 1, 1 ] ]
// Return only those rows that have a 0 in them.

//this removes all the numbers from the array and then checks the length. if only zeros are left, it will return Falsey.
//var myFn = function (array) {
//    return array.filter(function (row) {
//        return row.filter(function (val) {
//            return !val;
//        }).length;
//    })
//}
//console.log(myFn(myMatrix))

// myFn(['return', 'phrases', 'with one word']) >> ['return', 'phrases']
// Return only those phrases that are one word.

//var myFn = function (array) {
//    return array.filter(function (val) {
//        console.log(val);
//        if (!(val.indexOf(' ') > -1)) {
//            return val;
//        }
//    })
//}
//
//console.log(myFn(['return', 'phrases', 'with one word']));

// myFn(wesFavoritePokemon) >> [{ name: 'Jigglypuff', ... }]
// Return the Pokemon whose ID is '3841444a-83ec-11e5-8bcf-feff819cdc9f'. Return the entire object.


// myFn([10,15,20]) >> [5,10]
// Return the halves of those numbers that are initially even

//var myFn = function (array) {
//    var filteredList = array.filter(function (val) {
//        return !(val % 2);
//    })
//    return filteredList.map(function (num) {
//        return num / 2
//    })
//}
//
//var myFn = function (array) {
//    var result = array.filter(function (val) {
//        return !(val % 2);
//    }).map(function (num) {
//        return num / 2
//    })
//    return result;
//}
//
//console.log(myFn([10, 15, 20]));

// myFn(['racecar', 'amalgam', 'oligopoly', 'zoom']) >> ['amalgam', 'zoom']
// Return only those words whose vowels are all the same.

var myFn = function (array) {
    var vowels = array.map(function (val) {
        return val.replace(/[^aieou]/ig, '');
    })

    return vowels.filter(function (string) {
        var arrayOfVowels = string.split('');

        var list = arrayOfVowels.filter(function (letter) {})
    })
}

var allSameLetters = function

    console.log(myFn(['racecar', 'amalgam', 'oligopoly', 'zoom']));