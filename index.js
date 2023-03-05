function shout(string) {
    return string.toUpperCase()
}

function whisper(string) {
    return string.toLowerCase()
}

function logShout(string) {
    console.log('HELLO')
    return string.toUpperCase()
}


function logWhisper(string) {
    console.log('hello')
    return string.toLowerCase()
}

function sayHiToHeadphonedRoommate(string) {
    if (string == 'hello') {
        return 'I can\'t hear you!'
    }
    else if (string == 'HELLO') {return "YES INDEED!"
}
    else if (string == "Let\'s have dinner together!") {return "I would love to!"
}

}

