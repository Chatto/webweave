/**
 * Navlinks.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  title: {
		  type: "string",
		  required: true,
		  unique: true
	  },
	  icon: {
		  type: "string"
	  },
	  link: {
		  type: "string",
		  required: true,
		  unique: true
	  },
	  ord: {
		type: "integer"
	  }

  }
};

