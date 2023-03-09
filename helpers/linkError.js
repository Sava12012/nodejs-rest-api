const messages = {
  400: "Bad Request",
  404: "Not found",
};

function linkError(status, message = messages[status]) {
  const error = new Error(message);
  error.status = status;
  return error;
}

module.exports = linkError;
