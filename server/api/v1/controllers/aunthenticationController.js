const users = [{
  "id": 1,
  "address": "bro",
  "email": "bro",
  "first_name": "bro",
  "last_name": "bro",
  "password": "bro",
  "confirm_password": "bro",
  "phone_number": "bro",
  "is_admin": true
}];
const { schema } = require('../models/auth');

const _ = require('lodash');

const Validator = require('jsonschema').Validator;
const v = new Validator();
module.exports = { 
  async register(req, res) {
    try {
      const id_auto_inc = users[users.length - 1].id + 1;
      const {
        address,
        email,
        first_name,
        last_name,
        password,
        confirm_password,
        phone_number,
        is_admin
      } = req.body;
      const user = {
        id: id_auto_inc,
        address,
        email,
        first_name,
        last_name,
        password,
        confirm_password,
        phone_number,
        is_admin
      };
      
      const User = v.validate(user, schema);
      if (User.errors.length !== 0) throw User.errors;
      users.push(user);
      
      console.log(id_auto_inc +'   ' + users);
      await res.status(200).send({
        "status": "success",
        "array": users.length,
        "data": users
      });
    } catch (error) {
      await res.status(500).send({
        message: `error: ${error}`
      });
    }
  },
  async login(req, res) {
    try {
      const {
        email,
        password
      } = req.body;
      const emailvalid = users.find( user=>user.email === email);
      if (!emailvalid) throw res.status(403).send({
        "status": "error",
        "error": `invalid email or password`
      });
      const passwordValid = emailvalid.password === password;
      if (passwordValid == false) throw res.status(403).send({
        "status": "error",
        "error": `invalid email or password`
      });
      res.status(200).send({
        "status": "success",
        "data": emailvalid
      });

    } catch(error) {
      res.status(403).send({
        "status": "error",
        "error": `invalid email or password:   ${error}`
      });
    }
  },
  async update (req, res) {
  try {  const user = [];
    const bro = _.chain(users).find({id: 1}).merge({email: "muhireboris@yahoo.fr",first_name: "my nigga"});
    res.status(200).send({
      "status":"success",
      "data": bro,
      "dataUser": users
  });
} catch(error) {
  await res.status(500).send({
    message: `error: ${error}`
  });
}
  }
};