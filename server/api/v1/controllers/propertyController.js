const properties = [{
  "id": 1,
  "address": "bro",
  "owner": 1,
  "status": "bro",
  "price": 2.0847,
  "state": "bro",
  "city": "bro",
  "type": "bro",
  "created_on": "2018-11-13T20:20:39+00:00",
  "image_url": "https://www.google.be/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  "ownerEmail": "muhireboris@yahoo.fr",
  "ownerPhoneNumber": "0798734567"
}];
const {
  Propertyschema
} = require('../models/property');

const _ = require('lodash');

const Validator = require('jsonschema').Validator;
const v = new Validator();
module.exports = {
  async add(req, res) {
    try {
      const id_auto_inc = properties[properties.length - 1].id + 1;
      const {
        address,
        owner,
        status,
        price,
        state,
        city,
        type,
        created_on,
        ownerEmail,
        ownerPhoneNumber
      } = req.body;
      const property = {
        id: id_auto_inc,
        address,
        owner,
        status,
        price,
        state,
        city,
        type,
        created_on,
        ownerEmail,
        ownerPhoneNumber
      };

      const Property = v.validate(property, Propertyschema);
      if (Property.errors.length !== 0) throw Property.errors;
      properties.push(Property.instance);

      await res.status(200).send({
        "status": "success",
        "array": properties.length,
        "data": properties
      });
    } catch (error) {
      await res.status(500).send({
        message: `error: ${error}`
      });
    }
  },
  async get(req, res) {
    try {
      const {
        id
      } = req.params;
      const validId = properties.find( property => property.id == id);

      if (validId == undefined) throw res.status(404).send({
        "status": "error",
        "error": `the property doesn't exist`
      });
      res.status(200).send({
        "status": "success",
        "data": validId
      });

    } catch (error) {
      res.status(500).send({
        "status": "error",
        "error": `Error fetching property:   ${error}`
      });
    }
  },
  async update(req, res) {
    try {
      const search = _.chain(properties).find({
        id: 1
      }).merge({
        owner: 2,
        price: 3.809
      });
      res.status(200).send({
        "status": "success",
        "data": search,
        "dataProperty": properties
      });
    } catch (error) {
      await res.status(500).send({
        message: `error: ${error}`
      });
    }
  },
  async delete(req, res) {
    try {
      const {
        id
      } = req.params;
      const validId = properties.find(property => property.id == id);

      if (validId == undefined) throw res.status(404).send({
        "status": "error",
        "error": `the property doesn't exist`
      });
      const del = properties.splice(validId);
      res.status(200).send({
        "status": "success",
        "data": {
          "message": `${del.length} items successfully deleted`
        }
      });

    } catch (error) {
      res.status(500).send({
        "status": "error",
        "error": `Error fetching property:   ${error}`
      });
    }
  },
};