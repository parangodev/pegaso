/**
 * TicketController
 *
 * @description :: Server-side logic for managing tickets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');


module.exports = {
	ticketsAdd: function(req,res){
	    res.view('tickets/ticketsAdd',{
	      user: req.user
	    });
	},

	getTickets:function(req,res){
		console.log('llegue');

		var tickets = [
			{title: "Hamburhesas", discount:"20%", descripcion:'ESto es una prueba', image: "http://cdn.gq.com.mx/uploads/images/thumbs/mx/gq/2/s/2017/31/hamburguesa_3810_1200x630.jpg"},
			{title: "Perros", discount:"10%", descripcion:'ESto es una prueba', image: "http://cdn.gq.com.mx/uploads/images/thumbs/mx/gq/2/s/2017/31/hamburguesa_3810_1200x630.jpg"},
			{title: "Maicitos", discount:"5%", descripcion:'ESto es una prueba', image: "http://cdn.gq.com.mx/uploads/images/thumbs/mx/gq/2/s/2017/31/hamburguesa_3810_1200x630.jpg"},
			{title: "Hamburhesas", discount:"20%", descripcion:'ESto es una prueba', image: "http://cdn.gq.com.mx/uploads/images/thumbs/mx/gq/2/s/2017/31/hamburguesa_3810_1200x630.jpg"},
			{title: "Perros", discount:"10%", descripcion:'ESto es una prueba', image: "http://cdn.gq.com.mx/uploads/images/thumbs/mx/gq/2/s/2017/31/hamburguesa_3810_1200x630.jpg"},
			{title: "Maicitos", discount:"5%", descripcion:'ESto es una prueba', image: "http://cdn.gq.com.mx/uploads/images/thumbs/mx/gq/2/s/2017/31/hamburguesa_3810_1200x630.jpg"}
		]

		return res.json(tickets);
	}
};

