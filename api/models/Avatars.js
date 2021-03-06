/**
 * Avatars.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  filename: {
		  type:"string",
		  required:true,
		  unique:true
	  },
	  data: {
		  type: "string",
		  required:true
	  },
	  user: {
		  collection: "users",
		  via:"avatar"
	  }

  }
};

