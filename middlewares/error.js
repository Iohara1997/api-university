function CustomException(message) {
  const error = new Error(message);
  return error;
}

CustomException.prototype = Object.create(Error.prototype);

const invalidPathHandler = (request, response, next) => {
  response.status(404);
  response.send("Invalid path.");
};

const errorLogger = (error, request, response, next) => {
  console.log(`error ${error.message}`);
  if (error.code == 11000)
    throw new CustomException("University already registered.");

  if (error.name === "CastError")
    throw new CustomException("University not found.");

  next(error);
};

const errorResponser = (error, request, response, next) => {
  response.header("Content-Type", "application/json");
  const status = error.status || 400;
  response.status(status).send(error.message);
};

export default {
  invalidPathHandler,
  errorLogger,
  errorResponser,
};
