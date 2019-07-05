
 // Person
 let Propertyschema = {
   "type": "object",
   "properties": {

     "address": {
       "type": "string"
     },
     "id": {
       "type": "number"
     },
     "email": {
       "type": "string"
     },
     "first_name": {
       "type": "string"
     },
     "last_name": {
       "type": "string"
     },
     "password": {
       "type": "string"
     },
     "confirm_password": {
       "type": "string"
     },
     "phone_number": {
       "type": "string"
     },
     "is_admin": {
       "type": "boolean"
     }
   }
 };


 module.exports = {
   Propertyschema
 };