require('proof')(2, prove)

function prove (assert) {
    var querylist = require('..')
    var encoded = querylist.encode([ { name: 'a', value: '1' }, { name: 'a', value: '2' } ])
    assert(encoded, '?a=1&a=2', 'encode')
    assert(querylist.decode(encoded), [
        { name: 'a', value: '1' }, { name: 'a', value: '2' }
    ], 'decode')
}
