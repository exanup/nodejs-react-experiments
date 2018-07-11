exports.gsc = function abc(text) {
  const snakeCase = text.replace('.', '_');
  const json = `{ "${snakeCase}": "${text}" }`;
  return JSON.parse(json);
};
