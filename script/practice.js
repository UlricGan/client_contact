$(document).ready(function(){
	var Client=Backbone.Model.extend({

		defaults: function(){
			return {
				name : 'empity',
				phone: 'empity',
				email: 'empity',
				address: 'empity'
			};
		}

	});


	var ClientGroup=Backbone.Collection.extend({
		model: Client
	});


	var NameItem=Backbone.Model.extend({
		defaults: function(){
			return {
				name: 'empity'
			};
		}
	});

	var Results=Backbone.Collection.extend({
		model: NameItem,

		url: 'php/search.php'
	});

	var clients=new ClientGroup();

	var ClientView=Backbone.View.extend({

		tagName: 'div',

		template: _.template($('#client-view').html()),

		initialize: function(){
			this.listenTo(this.model, 'change', this.render);
		},

		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}

	});

	var NameList=Backbone.View.extend({

		tagName: 'li',

		events: {
			'click' : 'showDetail'
		},

		initialize: function(){
			this.listenTo(this.model, 'change', this.render);
		},

		render: function(){
			this.$el.html(this.model.get('name'));
			return this;
		},

		showDetail: function(){
			var clientDetail=new ClientView({model: this.model});
			this.$('#detail').html(clientDetail.render().el);
		}
	});

	var ClientContact=Backbone.View.extend({

		el: 'body',

		events: {
			'keyup #cname' : 'showResult',
			'click #add' : 'addClient'
		},

		initialize: function(){
			this.listenTo(clients, 'add' , this.appendClient);
			this.render();
		},

		render: function(){
			this.searchResults=new Results();
			this.searchResults.fetch();
			this.searchResults.forEach(function(model){
				//console.log(model.get('name'));
				var listView= new NameList({model: model});
				this.$('.list-group').append(listView.render().el);
			});
			console.log('dd');
			console.log(this.searchResults.url);
			console.log(this.searchResults);
		}

	});

	var contactApp= new ClientContact();

});