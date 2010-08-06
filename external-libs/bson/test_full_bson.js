require.paths.unshift("../../lib");

var sys = require('sys'),
  fs = require('fs'),
  Buffer = require('buffer').Buffer,
  BSON = require('./bson').BSON,
  Buffer = require('buffer').Buffer,
  assert = require('assert'),
  Long = require('./bson').Long,
  ObjectID = require('./bson').ObjectID,
  Binary = require('./bson').Binary,
  Code = require('./bson').Code,
  BinaryParser = require('mongodb/bson/binary_parser').BinaryParser,
  BSONJS = require('mongodb/bson/bson').BSON,  
  Long2 = require('mongodb/bson/bson').Long,
  Binary2 = require('mongodb/bson/bson').Binary,
  ObjectID2 = require('mongodb/bson/bson').ObjectID,
  Code2 = require('mongodb/bson/bson').Code;

var bson = new BSON();

// // Should Correctly Deserialize object
// var bytes = [95,0,0,0,2,110,115,0,42,0,0,0,105,110,116,101,103,114,97,116,105,111,110,95,116,101,115,116,115,95,46,116,101,115,116,95,105,110,100,101,120,95,105,110,102,111,114,109,97,116,105,111,110,0,8,117,110,105,113,117,101,0,0,3,107,101,121,0,12,0,0,0,16,97,0,1,0,0,0,0,2,110,97,109,101,0,4,0,0,0,97,95,49,0,0];
// var serialized_data = '';
// // Convert to chars
// for(var i = 0; i < bytes.length; i++) {
//   serialized_data = serialized_data + BinaryParser.fromByte(bytes[i]);
// }
// var object = bson.deserialize(serialized_data, 'BINARY');
// assert.equal("a_1", object.name);
// assert.equal(false, object.unique);
// assert.equal(1, object.key.a);
// 
// // Should Correctly Deserialize object with all types
// var bytes = [26,1,0,0,7,95,105,100,0,161,190,98,75,118,169,3,0,0,3,0,0,4,97,114,114,97,121,0,26,0,0,0,16,48,0,1,0,0,0,16,49,0,2,0,0,0,16,50,0,3,0,0,0,0,2,115,116,114,105,110,103,0,6,0,0,0,104,101,108,108,111,0,3,104,97,115,104,0,19,0,0,0,16,97,0,1,0,0,0,16,98,0,2,0,0,0,0,9,100,97,116,101,0,161,190,98,75,0,0,0,0,7,111,105,100,0,161,190,98,75,90,217,18,0,0,1,0,0,5,98,105,110,97,114,121,0,7,0,0,0,2,3,0,0,0,49,50,51,16,105,110,116,0,42,0,0,0,1,102,108,111,97,116,0,223,224,11,147,169,170,64,64,11,114,101,103,101,120,112,0,102,111,111,98,97,114,0,105,0,8,98,111,111,108,101,97,110,0,1,15,119,104,101,114,101,0,25,0,0,0,12,0,0,0,116,104,105,115,46,120,32,61,61,32,51,0,5,0,0,0,0,3,100,98,114,101,102,0,37,0,0,0,2,36,114,101,102,0,5,0,0,0,116,101,115,116,0,7,36,105,100,0,161,190,98,75,2,180,1,0,0,2,0,0,0,10,110,117,108,108,0,0];
// var serialized_data = '';
// // Convert to chars
// for(var i = 0; i < bytes.length; i++) {
//   serialized_data = serialized_data + BinaryParser.fromByte(bytes[i]);
// }
// var object = bson.deserialize(serialized_data, 'BINARY');
// assert.equal("hello", object.string);
// assert.deepEqual([1, 2, 3], object.array);
// assert.equal(1, object.hash.a);
// assert.equal(2, object.hash.b);
// assert.ok(object.date != null);
// assert.ok(object.oid != null);
// assert.ok(object.binary != null);
// assert.equal(42, object.int);
// assert.equal(33.3333, object.float);
// assert.ok(object.regexp != null);
// assert.equal(true, object.boolean);
// assert.ok(object.where != null);
// assert.ok(object.dbref != null);
// assert.ok(object['null'] == null);
// 
// // Should Serialize and Deserialze String
// var test_string = {hello: 'world'}
// var serialized_data = BSONJS.serialize(test_string)
// assert.deepEqual(test_string, bson.deserialize(serialized_data, 'BINARY'));
// 
// // Should Correctly Serialize and Deserialize Integer
// var test_number = {doc: 5}
// var serialized_data = BSONJS.serialize(test_number)
// assert.deepEqual(test_number, bson.deserialize(serialized_data, 'BINARY'));
// 
// // Should Correctly Serialize and Deserialize null value
// var test_null = {doc:null}
// var serialized_data = BSONJS.serialize(test_null)
// var object = bson.deserialize(serialized_data, 'BINARY')
// assert.deepEqual(test_null, object);
// 
// // Should Correctly Serialize and Deserialize Number
// var test_number = {doc: 5.5}
// var serialized_data = BSONJS.serialize(test_number)
// assert.deepEqual(test_number, bson.deserialize(serialized_data, 'BINARY'))
// 
// // Should Correctly Serialize and Deserialize Integer
// var test_int = {doc: 42}
// var serialized_data = BSONJS.serialize(test_int)
// assert.deepEqual(test_int, bson.deserialize(serialized_data, 'BINARY'))
// 
// test_int = {doc: -5600}
// serialized_data = BSONJS.serialize(test_int)
// assert.deepEqual(test_int, bson.deserialize(serialized_data, 'BINARY'))
// 
// test_int = {doc: 2147483647}
// serialized_data = BSONJS.serialize(test_int)
// assert.deepEqual(test_int, bson.deserialize(serialized_data, 'BINARY'))
//   
// test_int = {doc: -2147483648}
// serialized_data = BSONJS.serialize(test_int)
// assert.deepEqual(test_int, bson.deserialize(serialized_data, 'BINARY'))
// 
// // Should Correctly Serialize and Deserialize Object
// var doc = {doc: {age: 42, name: 'Spongebob', shoe_size: 9.5}}
// var serialized_data = BSONJS.serialize(doc)
// assert.deepEqual(doc, bson.deserialize(serialized_data, 'BINARY'))
// 
// // Should Correctly Serialize and Deserialize Array
// var doc = {doc: [1, 2, 'a', 'b']}
// var serialized_data = BSONJS.serialize(doc)
// assert.deepEqual(doc, bson.deserialize(serialized_data, 'BINARY'))
// 
// // Should Correctly Serialize and Deserialize Array with added on functions
// var doc = {doc: [1, 2, 'a', 'b']}
// var serialized_data = BSONJS.serialize(doc)
// assert.deepEqual(doc, bson.deserialize(serialized_data, 'BINARY'))
// 
// // Should Correctly Serialize and Deserialize A Boolean
// var doc = {doc: true}
// var serialized_data = BSONJS.serialize(doc)
// assert.deepEqual(doc, bson.deserialize(serialized_data, 'BINARY'))
// 
// // Should Correctly Serialize and Deserialize a Date
// var date = new Date()
// //(2009, 11, 12, 12, 00, 30)
// date.setUTCDate(12)
// date.setUTCFullYear(2009)
// date.setUTCMonth(11 - 1)
// date.setUTCHours(12)
// date.setUTCMinutes(0)
// date.setUTCSeconds(30)
// var doc = {doc: date}
// var serialized_data = BSONJS.serialize(doc)
// assert.deepEqual(doc, bson.deserialize(serialized_data, 'BINARY'))
// 
// // Should Correctly Serialize and Deserialize Oid
// var doc = {doc: new ObjectID2()}
// var serialized_data = BSONJS.serialize(doc)
// assert.deepEqual(doc.doc.toHexString(), bson.deserialize(serialized_data, 'BINARY').doc.toHexString())
// 
// // Should Correctly encode Empty Hash
// var test_code = {}
// var serialized_data = BSONJS.serialize(test_code)
// assert.deepEqual(test_code, bson.deserialize(serialized_data, 'BINARY'))
// 
// // Should Correctly Serialize and Deserialize Ordered Hash
// var doc = {doc: {b:1, a:2, c:3, d:4}}
// var serialized_data = BSONJS.serialize(doc)
// var decoded_hash = bson.deserialize(serialized_data, 'BINARY').doc
// var keys = []
// for(name in decoded_hash) keys.push(name)
// assert.deepEqual(['b', 'a', 'c', 'd'], keys)
// 
// // Should Correctly Serialize and Deserialize Regular Expression
// // Serialize the regular expression
// var doc = {doc: /foobar/mi}
// var serialized_data = BSONJS.serialize(doc)
// var doc2 = bson.deserialize(serialized_data, 'BINARY')
// assert.equal(doc.doc.toString(), doc2.doc.toString())
// 
// // Should Correctly Serialize and Deserialize a Binary object
// var bin = new Binary2()
// var string = 'binstring'
// for(var index = 0; index < string.length; index++) {
//   bin.put(string.charAt(index))
// }
// var doc = {doc: bin}
// var serialized_data = BSONJS.serialize(doc)
// var deserialized_data = bson.deserialize(serialized_data, 'BINARY')
// assert.equal(doc.doc.value(), deserialized_data.doc.value())

// Should Correctly Serialize and Deserialize a big Binary object
var data = fs.readFileSync("../../integration/test_gs_weird_bug.png", 'binary');
var bin = new Binary2()
bin.write(data)
var doc = {doc: bin}
var serialized_data = BSONJS.serialize(doc)
// sys.puts(sys.inspect(serialized_data))

// var deserialized_data = bson.deserialize(serialized_data, 'BINARY')
// sys.puts("================ deserialize:length: " + deserialized_data.doc)
// var deserialized_data = BSONJS.deserialize(serialized_data, 'BINARY')
var deserialized_data = bson.deserialize(serialized_data, 'BINARY')
var data = deserialized_data.doc.value();

sys.puts("==================== data.length: " + data.length)

fs.writeFileSync("/Users/christian.kvalheim/test.png", data, 'binary')

// sys.puts(sys.inspect(deserialized_data))
// 
// sys.puts("================ deserialize:length: " + deserialized_data)
// assert.equal(doc.doc.value(), deserialized_data.doc.value())

































