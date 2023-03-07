/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    tableName: 'users',
    attributes: {
    email:{
        type:`string`,
        unique:true,
        required:true
    },
    password:{
        type:`string`,
        required:true
    },
    nombre:{
        type:`string`,    
        required:true
    },
    edad:{
        type:`number`,
        required:true
    },
    telefono:{
        type:`string`,
        required:true
    },
    fotoUrl:{
        type:`string`,
        required:true
    },
    carritos:{
        collection: `carritos`,
        via: `userid`
    }
    },

};

