/**
 * Ticket.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	connection			: 'mysql',
	tableName 			: 'tblticket',


	attributes: { 
		id: {
			type			: 'integer',
			size			: 64,
			autoIncrement	: true,
			unique			: true,
			primaryKey		: true
		},
		title: {
			type			: 'string',
			required		: true,
			size			: 100
		},
		dateFrom: {
			type			: 'date',
			required		: true
		},
		dateTo: {
			type			: 'date',
			required		: true,
		},
		image: {
			type			: 'string',
			required		: true,
		},
		descripcion: {
			type			: 'longtext',
			size			: 400,
			required		: true
		},
		discount:{
			type			: 'integer',
			required		: true
		},
		companyId:{
			model			: 'company',
			via    			: 'id'
		},



		// Asociacion con la tabla de company

	}
};

