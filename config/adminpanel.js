'use strict';

module.exports.adminpanel = {
    instances: {

        users: {

            title: 'Users',
            model: 'Users',

            list: {
                fields: {
					username: 'Username',
                    email: 'Email',
                    location: 'Location',
                    admin: 'Admin',
                    createdAt: 'Created'
                }
            },

            edit: {
                fields: {
					username: 'Username',
                    email: 'Email',
		    location: 'Location',
                    admin: {
                        title: 'Admin',
                        disabled: true
                    }
                }
            }
        },
        boards: {

            title: 'Boards',
            model: 'Boards',

            list: {
                fields: {
                    id: 'ID',
					name: 'Name',
                    shortcut: 'Shortcut',
                    description: 'Description',
                    createdAt: 'Created'
                }
            },

            edit: {
                fields: {
					name: 'Name',
                    shortcut: 'Shortcut',
					description: 'Description'
                }
            }
		},
        roles: {

            title: 'Roles',
            model: 'Role',

            list: {
                fields: {
                    id: 'ID',
					name: 'Name',
                    active: 'Active'
                }
            },

            edit: {
                fields: {
					name: 'Name',
                    active: 'Active'
                }
            }
        },
        permissions: {

            title: 'Permissions',
            model: 'Permission',

            list: {
                fields: {
                    id: 'ID',
					model: 'Model',
                    action: 'Action'
                }
            },

            edit: {
                fields: {
					model: 'Model',
                    action: 'Action'
                }
            }
        }
    }
};
