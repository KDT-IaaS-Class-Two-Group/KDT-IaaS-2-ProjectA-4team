export default (regEx, value) => new RegExp(regEx, "g").test(value);
