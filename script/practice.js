$(document).ready(function(){
	var Client=Backbone.Model.extend({

		defaults: function(){
			return {
				id: '',
				name : '',
				phno: '',
				email: '',
				address: ''
			};
		},

		url: 'people/'+this.id

	});


	var ClientGroup=Backbone.Collection.extend({
		models: Client,
		url: 'people'
	});



	/*var clients=new ClientGroup([{name:'d'+
		'd',phone:23,email:'ddda',address:'ddsd'},{name:'ff'+
		'f',phone:23,email:'ddda',address:'ddsd'}]);*/
	var clients=new ClientGroup();

	var DetailView=Backbone.View.extend({
		tagName:'div',

		template: _.template($('#client-view').html()),

		events: {
			'click .operate' : 'editDetail',
			'click .saveIt' : 'saveDetail',
			'click #delete' : 'deleteDetail'
		},

		initialize: function(){
			this.listenTo(this.model, 'remove', this.render);
		},

		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		editDetail: function(){
			this.$('.showInfo').addClass('editInfo').removeClass('showInfo');
			$('.operate').text('保存').addClass('saveIt').removeClass('operate');
		},

		saveDetail: function(){
			this.model.set('name',this.$('#editName').val());
			this.model.set('phno',this.$('#editPhone').val());
			this.model.set('email',this.$('#editEmail').val());
			this.model.set('address',this.$('#editAddress').val());
			this.model.save();
			$('.editInfo').addClass('showInfo').removeClass('editInfo');
			$('.saveIt').text('编辑').addClass('operate').removeClass('saveIt');
		},

		deleteDetail: function(){
			this.model.destroy();
			$('#detail').html('');
		}
	});


	var ItemView=Backbone.View.extend({
		tagName:'li',

		template: _.template($('#client-list').html()),

		events: {
			'click .list_name': 'showDetail'
		},

		initialize: function(){
			this.listenTo(clients, 'change:name', this.render);
			this.listenTo(this.model, 'change', this.showDetail);
		},

		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		showDetail: function(){
			$('.clicked').removeClass('clicked');
			this.$('.list_name').addClass('clicked');
			var clientDetail=new DetailView({model:this.model});
			$('#detail').html(clientDetail.render().el);
		}

	});


	var App=Backbone.View.extend({
		el: 'body',

		initialize:function(){
			this.listenTo(clients, 'change', this.render);
			this.listenTo(clients, 'remove', this.render);
			this.listenTo(clients, 'all', this.render);
			clients.fetch();
		},

		render:function(){
			$('.list-group').html('');
			clients.forEach(function(client){
				console.log("dd");
				var item=new ItemView({model:client});
				$('.list-group').append(item.render().el);
			});
		}
	});

	var myApp=new App();
});