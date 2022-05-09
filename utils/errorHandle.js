const errorHandle = (res, err) =>
{
  res.status(err.statusCode).send({
    status: false,
    name: err.name,
    message: err.message,
  })
}

module.exports = errorHandle;