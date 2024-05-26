export const errorHandlerMiddleware = (error, req, res, next) => {
  res.status(500).send({
    message: 'Something went wrong',
    error: error.message,
  });
};
