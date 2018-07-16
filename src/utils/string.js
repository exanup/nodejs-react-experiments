exports.gsc = function _gsc(text) {
  const snakeCase = text.replace('.', '_');
  const json = `{ "${snakeCase}": "${text}" }`;
  return JSON.parse(json);
};
