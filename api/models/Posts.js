/**
 * Posts.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
		subject: {
			type: "text",
			required: true
		},
		post_content: {
			type: "text",
			required:true
		},
		author: {
			model: "users"
		},
		thread: {
			model: "threads"
		}

  }
};

