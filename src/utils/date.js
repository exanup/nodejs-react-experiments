function prettifyDate(date) {
  const prettyDate = new Date(date);
  return prettyDate.toLocaleString();
}

function withPrettyDateTime(object) {
  const newObj = JSON.parse(JSON.stringify(object));
  const createdAt = prettifyDate(newObj.created_at);
  const updatedAt = prettifyDate(newObj.updated_at);
  newObj.created_at = createdAt;
  newObj.updated_at = updatedAt;
  return newObj;
}

module.exports = {
  prettifyDate,
  withPrettyDateTime,
};
