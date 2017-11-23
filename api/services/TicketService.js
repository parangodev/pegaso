/**
 * TicketService
 *
 * @description :: Server-side logic for managing tickets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/service
 */


module.exports = {

	getTickets: function(){
		Date date = new Date();
		Ticket.find({
		  dateFrom: {'>='	:date},
		  dateTo: 	{'<='	:date},
		  quantity  {'>'	:0}
		}).exec(function (err, tickets) {
			if(err){return err;}
			console.log(tickets);
		});

		var data = {
			status: 1,
			message:'',
			result:[]
		}


		return;
	}

};