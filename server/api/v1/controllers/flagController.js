const flags = [
  {
    id: 1,
    property_id: 2,
    created_on: 'bro',
    reason: 'bro',
    description: 'bro you are wilding'
  }
];
const { Flagschema } = require('../models/flag');

const { dateTime } = require('../models/date');

const Validator = require('jsonschema').Validator;

const v = new Validator();
module.exports = {
  async create(req, res) {
    try {
      const id_auto_inc = flags[flags.length - 1].id + 1;
      const { property_id, description, reason } = req.body;
      const flag = {
        id: id_auto_inc,
        property_id,
        description,
        reason,
        created_on: dateTime
      };

      const Flag = v.validate(flag, Flagschema);
      if (Flag.errors.length !== 0) throw Flag.errors;
      flags.push(flag);

      await res.status(200).send({
        status: 'success',
        array: flags.length,
        data: flags
      });
    }
    catch (error) {
      await res.status(500).send({
        message: `error: ${error}`
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const emailvalid = await flags.find(user => user.email === email);
      if (!emailvalid) {
        throw res.status(403).send({
          status: 'error',
          error: 'invalid email or password'
        });
      }
      const passwordValid = emailvalid.password === password;
      if (passwordValid == false) {
        throw res.status(403).send({
          status: 'error',
          error: 'invalid email or password'
        });
      }
      res.status(200).send({
        status: 'success',
        data: emailvalid
      });
    }
    catch (error) {
      res.status(403).send({
        status: 'error',
        error: `invalid email or password:   ${error}`
      });
    }
  },
  async update(req, res) {
    try {
      const user = [];
      const bro = _.chain(flags)
        .find({
          id: 1
        })
        .merge({
          email: 'muhireboris@yahoo.fr',
          first_name: 'my nigga'
        });
      res.status(200).send({
        status: 'success',
        data: bro,
        dataUser: flags
      });
    }
    catch (error) {
      await res.status(500).send({
        message: `error: ${error}`
      });
    }
  }
};
