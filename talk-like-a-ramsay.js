!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.talkLikeARamsay=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = {
  Angularjs: 'fucking Angularjs',
  and: 'and fucking',
  codebase: 'fucking codebase',
  friend: 'fucker',
  fucking: 'fucking shit',
  hello: ['fuck off', 'what???'],
  "it's": 'it fucking is',
  long: 'long fucking',
  not: 'not fucking',
  person: 'muppet',
  people: 'muppets',
  "should be": 'better fucking well be',
  should: 'fucking better'
  thanks: [ 'go fuck yourself', 'fuck off!',
  the: ['ye', 'yonder', 'thar'],
  this: 'this fucking',
  to: 'to fucking',
  user: ['stupid user', 'dumbfuck', 'fucker', 'twat'],
  wrong: 'tits up',
  yes: ['fucking ay', 'fuck yes'],
  you: ['you dumbfuck', 'you fucking mupper', 'you fucking fucker']
};

},{}],2:[function(require,module,exports){
dictionary = require('./dictionary');

function isUpperCase(char) {
  return char.toUpperCase() === char;
}

function talkLikeARamsay(str) {
  return str.replace(/[\w']+/ig, function(match) {
    var replacement = dictionary[match.toLowerCase()];

    if (!replacement) {
      return match;
    }

    if (Array.isArray(replacement)) {
      // get array element at random
      replacement = replacement[Math.floor(Math.random() * replacement.length)];
    }

    if (isUpperCase(match[0])) {
      replacement = replacement[0].toUpperCase() + replacement.slice(1);
    }

    return replacement;
  });
}

module.exports = talkLikeARamsay;

},{"./dictionary":1}]},{},[2])(2)
});
