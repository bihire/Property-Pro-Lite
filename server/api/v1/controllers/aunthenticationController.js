module.exports = { 
  async register(req, res) {
    try {
      await res.status(200).send({
        message: "you are here"
      });
    } catch (error) {
      await res.status(200).send({
        message: "error trying to register"
      });
    }
  },
};