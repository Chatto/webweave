/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  username: {
		type: "string",
	    required: true,
	    unique: true
	  },
      email: {
		type: "string",
		required: true,
		unique: true,
	  },
	  admin: {
		type: "boolean",
		required: true,
		defaultsTo: false
	  },
	  location: {
		type: 'string',
		required: true,
		defaultsTo: "Cyberspace"
	  },
	  posts: {
		  collection: "posts",
		  via: "author"
	  },
	  threads: {
		  collection: "threads",
		  via: "author"
	  }
  }
};

