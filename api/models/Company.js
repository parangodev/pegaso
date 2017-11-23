/**
 * Company.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	connection			: 'mysql',
	tableName 			: 'tblcompany',

	attributes: {
		id: {
			type			: 'integer',
			size			: 64,
			autoIncrement	: true,
			unique			: true,
			primaryKey		: true
		},
		name: {
			type			: 'string',
			required		: true,
			size			: 100
		},
		descripcion: {
			type			: 'longtext',
			size			: 400,
			required		: true
		},
		posx: {
			type			: 'float',
		},
		posy: {
			type			: 'float',
		},
		photo: {
			type			: 'string'
		}
	}
};

