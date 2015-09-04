talkLikeARamsay = require('./index');
assert = require('chai').assert;
sinon = require('sinon');

sinon.stub(Math, 'random').returns(0);
assert.strictEqual(Math.random(), 0, 'stub worked');

var text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when";
var expected = "Lorem Ipsum is simply dummy text of the fucking printing and fucking typesetting industry. Lorem Ipsum has been the fucking industry's standard dummy text ever since the fucking 1500s, when";

describe('Fuck this', function() {
  it('should swear like a sailor', function(done) {
    assert(expected === talkLikeARamsay(text));
    done();
  });
});
