/**
 * UsersController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function (req,res) {
		return res.send('Account login');
	},
	register: function (req,res) {
		return res.send('New User Registration');
	},
	forgot_username: function (req,res) {
		return res.send('Forgot Username');
	},
	forgot_password: function (req,res) {
		return res.send('Reset Password');
	},
	index: function (req,res) {
		return res.send('User List');
	},
	view_profile: function (req,res) {
		User.find({username:req}).poulate('posts').exec(function (err, user){
			if (err) { return res.serverError(err); }
			if (!user) { return res.notFound('Could not find that user!'); }
			return res.send(user);
		});
	},
	edit_profile: function (req,res) {
		return res.send('Edit Profile');
	},
	delete_user: function (req,res) {
		return res.send('User Deletion');
	}
	
	
};

