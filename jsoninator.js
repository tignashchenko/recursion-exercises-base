const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  let result = [];
  let start, end;

  if(typeof(obj) === 'number') {
    return obj.toString();
  } else if(obj === null) {
    return '' + obj;
  } else if(typeof(obj) === 'boolean') {
    return '' + obj;
  } else if(typeof(obj) === 'string') {
    return '\"' + obj + '\"';
  } else if(_.isArray(obj)) {
    _.each(obj, function(element) {
      result.push(stringify(element));
    });
    start = '[';
    end = ']';
  } else if(_.isObject(obj)) {
    _.each(obj, function(value, key) {
      result.push(stringify(key) + ':' + stringify(value));
    });
    start = '{';
    end = '}';
  }
  return start + result + end;
};

module.exports = {
  stringify: stringify
};
