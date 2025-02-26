const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = '';
  let addRes = '';

  let separator = options.separator !== undefined ? options.separator : '+';
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
  let addition = options.addition === null ? 'null' : (options.addition !== undefined ? String(options.addition) : '');
  let repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  let additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;


  for (let i = 0; i < additionRepeatTimes; i++) {
    addRes += addition + additionSeparator;
  }
  addRes = addRes.slice(0, -additionSeparator.length);

  for (let i = 0; i < repeatTimes; i++) {
    res += str + addRes + separator;
  }
  return res.slice(0, -separator.length);
}

module.exports = {
  repeater
};
