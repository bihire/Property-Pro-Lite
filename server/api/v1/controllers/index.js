module.exports = {
  index(req, res, next) {
    res.status(200).send({
      message: "bro please"
    });
  }
}