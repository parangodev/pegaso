/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 /**
	Este es el model de User
 **/

module.exports = {

	connection			: 'mysql',
	tableName 			: 'tblusers',


	attributes: { 
		id: {
			type			: 'integer',
			size			: 64,
			autoIncrement	: true,
			unique			: true,
			primaryKey		: true
			//required		: true

		},
		name: {
			type			: 'string',
			required		: true,
			size			: 100
		},
		email: {
			type			: 'string',
			required		: true,
			size			: 100,
			unique			: true
		},
		photo: {
			type			: 'string',
			required		: true,
		},
		password: {
			type			: 'string',
			size			: 100
		},
		countTickets:{
			type			: 'integer',
			defaultsTo		: 0,
			unique			: true
		}
	}

  
};

