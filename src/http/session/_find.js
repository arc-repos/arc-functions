var db = require('./_get-dynamo-doc-instance')

module.exports = function _find(name, _idx, callback) {
  db.get({
    TableName: name,
    ConsistentRead: true,
    Key: {_idx}
  },
  function _get(err, data) {
    if (err) {
      callback(err)
    }
    else {
      var result = data.Item
      if (!result) {
        result._idx = _idx
      }
      callback(null, result)
    }
  })
}
