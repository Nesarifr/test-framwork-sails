/**
 * Carritos.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const Productos = require("./Productos");

module.exports = {
  tableName: 'carritos',
  attributes: {
    userid: {
      type: `string`,
      collection: `users`,
      via: `carritos`
    },
    productos: {
      collection: `productos`,
      via: `carritos`

    }
  },

};

