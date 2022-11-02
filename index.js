const loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`
const alphanum = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890`
const characters = `!@#$%^&*()_+-={}[]|':";><,./?~`
/**
 * # GenerateLorem
 * Generate lorem ipsum for your javascript/typescript projects
 * @param {*} a length in words
 * @returns string
 */
export const generateLorem = (a = 10) => {
    var output = []
    var collector = loremText.split(" ")
    for (var i = 0; i < a; i++) {
        output.push(collector[Math.floor(Math.random() * collector.length)])
    }
    return (output.join(" "))
}
/**
 * # GenerateRandomId
 * Generate random id for your javascript/typescript projects
 * @param {*} a length
 * @returns string
 */
export const generateRandomId = (a = 10) => {
    var output = ""
    for (var i = 0; i < a; i++) {
        output += alphanum[Math.floor(Math.random() * alphanum.length)]
    }
    return (output)
}
/**
 * # EncodeString
 * Encode a given string
 * @param {*} data string
 * @param {*} len complexity
 * @returns encoded string
 */
export const encodeString = (data, len = 4) => {
    var unique = []
    for (var i = 0; i < data.length; i++) {
        if (!unique.includes(data[i])) {
            unique.push(data[i])
        }
    }
    var enc = {}
    unique.forEach((val) => {
        enc[val] = generateRandomId(len)
    })
    var encLen = Object.keys(enc).length;
    var output = `${(len < 10) ? '0' + len : len}${(encLen < 10) ? '0' + encLen : encLen}`
    for (const property in enc) {
        output += property + enc[property]
    }
    for (var i = 0; i < data.length; i++) {
        output += enc[data[i]]
    }
    return (output)
}
/**
 * # DecodeString
 * Decode the encoded string
 * @param {*} data encoded string
 * @returns decoded string
 */
export const decodeString = (data) => {
    var extract = {
        len: Number(data[0] + data[1]),
        encLen: Number(data[2] + data[3]),
        keys: {}
    }
    data = data.slice(4, data.length)
    const keyData = data.slice(0, (extract.len * extract.encLen) + extract.encLen)
    data = data.slice((extract.len * extract.encLen) + extract.encLen, data.length)

    for (var i = 0; i < keyData.length; i += 5) {
        var test = ""
        for (var j = 0; j < 5; j++) {
            test += keyData[i + j]
        }
        var value = test[0]
        extract.keys[test.slice(1, test.length)] = value
    }
    var output = ""
    for (var i = 0; i < data.length; i += 4) {
        var test = ""
        for (var j = 0; j < 4; j++) {
            test += data[i + j]
        }
        output += extract.keys[test]
    }
    return (output)
}
//9X10
var asciiText = {
    " ": [
        "..........",
        "..........",
        "..........",
        "..........",
        "..........",
        "..........",
        "..........",
        "..........",
        ".........."
    ],
    "a": [
        "..........",
        "....##....",
        "...#..#...",
        "..#....#..",
        "..######..",
        "..#....#..",
        "..#....#..",
        "..#....#..",
        ".........."
    ],
    "b": [
        "..........",
        "..#####...",
        "..#....#..",
        "..#....#..",
        "..#####...",
        "..#....#..",
        "..#....#..",
        "..#####...",
        "..........",
    ],
    "c": [
        "..........",
        "...####...",
        "..#....#..",
        "..#.......",
        "..#.......",
        "..#.......",
        "..#....#..",
        "...####...",
        ".........."
    ],
    "d": [
        "..........",
        "..####....",
        "..#...#...",
        "..#....#..",
        "..#....#..",
        "..#....#..",
        "..#...#...",
        "..####....",
        "..........",
    ],
    "e": [
        "..........",
        "..######..",
        "..######..",
        "..##......",
        "..######..",
        "..##......",
        "..######..",
        "..######..",
        "..........",
    ],
    "f": [
        "..........",
        "..######..",
        "..######..",
        "..##......",
        "..######..",
        "..##......",
        "..##......",
        "..##......",
        "..........",
    ],
    "g": [
        "..........",
        "...####...",
        "..#....#..",
        "..#.......",
        "..#...##..",
        "..#....#..",
        "..#....#..",
        "...####...",
        "..........",
    ], "h": [
        "..........",
        "..#....#..",
        "..#....#..",
        "..#....#..",
        "..######..",
        "..#....#..",
        "..#....#..",
        "..#....#..",
        "..........",
    ], "i": [
        "..........",
        "..######..",
        "....##....",
        "....##....",
        "....##....",
        "....##....",
        "....##....",
        "..######..",
        "..........",
    ],
    "j": [
        "..........",
        "..######..",
        "..######..",
        "...##.....",
        "...##.....",
        "...##..##.",
        "...##..##.",
        "...#####..",
        "..........",
    ], "k": [
        "..........",
        "..##...##.",
        "..##..##..",
        "..##.##...",
        "..####....",
        "..##.##...",
        "..##..##..",
        "..##...##.",
        "..........",
    ], "l": [
        "..........",
        "..##......",
        "..##......",
        "..##......",
        "..##......",
        "..##......",
        "..##......",
        "..#######.",
        "..........",
    ], "m": [
        "..........",
        "..##..##..",
        "..######..",
        "..#.##.#..",
        "..#.##.#..",
        "..#....#..",
        "..#....#..",
        "..#....#..",
        "..........",
    ], "n": [
        "..........",
        "..#....#..",
        "..##...#..",
        "..##...#..",
        "..#.#..#..",
        "..#..#.#..",
        "..#...##..",
        "..#....#..",
        "..........",
    ], "o": [
        "..........",
        "...####...",
        "..##..##..",
        "..##..##..",
        "..##..##..",
        "..##..##..",
        "..##..##..",
        "...####...",
        "..........",
    ], "p": [
        "..........",
        "..#####...",
        "..##..##..",
        "..##..##..",
        "..##..##..",
        "..####....",
        "..##......",
        "..##......",
        "..........",
    ]
    ,
    "q": [
        "..........",
        "...####...",
        "..#....#..",
        "..#....#..",
        "..#..#.#..",
        "..#..#.#..",
        "...####...",
        "......##..",
        "..........",
    ],
    "r": [
        "..........",
        "..#####...",
        "..#....#..",
        "..#...#...",
        "..####....",
        "..#..#....",
        "..#....#..",
        "..#....#..",
        "..........",
    ],
    "s": [
        "..........",
        "...####...",
        "..#....#..",
        "..#.......",
        "....###...",
        ".......#..",
        "..#....#..",
        "...####...",
        "..........",
    ],
    "t": [
        "..........",
        "..#######.",
        ".....#....",
        ".....#....",
        ".....#....",
        ".....#....",
        ".....#....",
        ".....#....",
        "..........",
    ],
    "u": [
        "..........",
        "..#....#..",
        "..#....#..",
        "..#....#..",
        "..#....#..",
        "..#....#..",
        "..#....#..",
        "...####...",
        "..........",
    ],
    "v": [
        "..........",
        "..#....#..",
        "..#....#..",
        "..#....#..",
        "...#..#...",
        "...#..#...",
        "...#..#...",
        "....##....",
        "..........",
    ],
    "w": [
        "..........",
        "..#....#..",
        "..#....#..",
        "..#....#..",
        "..#.##.#..",
        "..#.##.#..",
        "..######..",
        "..##..##..",
        "..........",
    ],
    "x": [
        "..........",
        "..#....#..",
        "..#....#..",
        "...#..#...",
        "....##....",
        "...#..#...",
        "..#....#..",
        "..#....#..",
        "..........",
    ],
    "y": [
        "..........",
        "..#....#..",
        "..#....#..",
        "...#..#...",
        "....##....",
        "....##....",
        "....##....",
        "....##....",
        "..........",
    ],
    "z": [
        "..........",
        "..######..",
        ".....##..,",
        "....##....",
        "....##....",
        "...##.....",
        "..##......",
        "..######..",
        "..........",
    ]
}
/**
 * # AsciiConsole
 * Enter a text input and it will be converted to ASCII output in the console
 * @param {*} a Text input
 * @param {*} b style
 */
export const asciiConsole = (a, b) => {
    var output = ""
    var gatherText = a.toLowerCase().split("")
    var gatherRes = []
    gatherText.forEach((val) => {
        gatherRes.push(asciiText[val])
    })
    var lines = []
    for (var i = 0; i < 9; i++) {
        var line = ""
        for (var j = 0; j < gatherRes.length; j++) {
            line += gatherRes[j][i]
        }
        lines.push(line)
    }
    lines.forEach((l) => {
        output += l + '\n'
    })
    if (b) {
        console.log("%c" + output, b)
    }
    else {
        console.log(output)
    }

}
