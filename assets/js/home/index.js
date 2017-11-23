new Vue({
  el: '#cards',
  created:function(){
  	this.getTickets()
  },
  data:{
  	status: false,
  	tickets:[]
  },
  methods:{
  	getTickets: function(){
  		var urlTickets = '/getTickets';
  		this.$http.post(urlTickets).then(function(response){
  			console.log(response);
  			this.status
  			this.tickets = response.data;
  		});
  	}
  }
  
});


Vue.component('ticket-card', {
  props:['title', 'descripcion', 'discount', 'image'],
  template:`
			<div class="col s4">
		      	<div class="card" style="overflow: visible;">
		              <div class="card-image waves-effect waves-block waves-light">
		                <img class="activator" :src="image">
		              </div>
		              <div class="card-content">
		                <span class="card-title activator grey-text text-darken-4">{{title}} {{discount}}</span>
		              </div>
		              <div class="card-reveal" style="display: none; transform: translateY(0px);">
		                <span class="card-title grey-text text-darken-4">{{title}} {{discount}}<i class="material-icons right">X</i></span>
		                <p>{{descripcion}}</p>
		              </div>

		              <div class="card-action">
		                <a href="#!">Lo quiero!</a>
		              </div>
		        </div>
		    </div>`
});





