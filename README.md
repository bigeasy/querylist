Encode and decode query strings preserving order.

```javascript
var encoded = querylist.encode([ { name: 'a', value: '1' }, { name: 'a', value: '2' } ])
assert.equal(encoded, '?a=1&a=2')

var decoded = querylist.decode(encoded)
assert.deepEqual(decoded, [ { name: 'a', value: '1' }, { name: 'a', value: '2' } ], 'decode')

```
