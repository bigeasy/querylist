exports.encode = function (list) {
    return '?' + list.map(function (parameter) {
        return encodeURIComponent(parameter.name) + '=' + encodeURIComponent(parameter.value)
    }).join('&')
}

exports.decode = function (querystring) {
    if (querystring[0] == '?') {
        return exports.decode(querystring.substring(1))
    }
    return querystring.split('&').map(function (part) {
        var pair = part.split('=')
        return {
            name: decodeURIComponent(pair[0]),
            value: decodeURIComponent(pair[1]),
        }
    })
}
