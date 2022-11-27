

const notFoundMiddleware = (rea, res) => {
  res.status(404).send('Route does not exists')
}

export default notFoundMiddleware;