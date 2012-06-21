var Hex = require('./hex')
  , Base64 = require('./base64')
  , oids = require('./oids')
  , ASN1 = require('./asn1')
  , fs = require('fs');

var reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
function decode(pem) {
  var der = reHex.test(pem)
      ? Hex.decode(pem)
      : Base64.unarmor(pem);
  var asn1 = ASN1.decode(der);
  console.log(asn1.toPrettyString());
}

fs.readFile('plugin.crt', 'utf8', function(err, contents) {
  console.log(contents);
  decode(contents);
});
