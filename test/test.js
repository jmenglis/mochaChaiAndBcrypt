
// BCrypt docs: https://github.com/ncb000gt/node.bcrypt.js
var BCrypt = require('bcrypt');
var Assert = require('assert');

var saltRounds = 42;
var mockFailedPasswordHashDbEntry = 'asdf'; // some random text

describe('BCrypt Password Hashing/Comparison', function() {
  it('should generate a hashed password', function() {
    var mockSuccessfulPasswordHashDbEntry;
    var mockUsersPassword = 's0/\/\P4$$w0rD';
    // hash the easy way
    BCrypt.hash(mockUsersPassword, saltRounds, function(err, hash) {
      // save to db
      // or just log?
      if (err) console.log(err);
      console.log(hash);
      mockPasswordHashDbEntry = hash;
    });
    Assert(mockPasswordHashDbEntry);
  }); // end it
  it('should compare a valid password', function() {
    // Load hash from your password DB.
    // in our case, we'll just declare the variables above
    BCrypt.compare(mockUsersPassword, mockSuccessfulPasswordHashDbEntry, function(err, res) {
        // res == true
        assert(res == true);
    });
  }); // end it
}); // end describe


// BCrypt.compare(mockUsersPassword, mockFailedPasswordHashDbEntry, function(err, res) {
//     // res == false
// });

// your turn...
// DESCRIBE the test suite
// tell IT what to test
// as many times as you need
var mockGrandmasPassword = 'little jimbo jones';
