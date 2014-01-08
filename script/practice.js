$(document).ready(function(){
	var Client=Backbone.Model.extend({

		defaults: function(){
			return {
				name : '',
				phno: '',
				email: '',
				address: ''
			};
		},

		id: null
		//url: 'people'

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
			'click .addIt' : 'addClient',
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
			this.getInfo();
			this.model.save();
			$('.editInfo').addClass('showInfo').removeClass('editInfo');
			$('.saveIt').text('编辑').addClass('operate').removeClass('saveIt');
		},

		addClient: function(){
			this.getInfo();
			clients.create(this.model);
			clients.fetch({id: null});
			//console.log(this.model);
			//console.log(clients);
			$('.editInfo').addClass('showInfo').removeClass('editInfo');
			$('.addIt').text('编辑').addClass('operate').removeClass('addIt');
			var addItem=new ItemView({model:this.model});
			addItem.showDetail();
		},

		deleteDetail: function(){
			this.model.destroy();
			$('#detail').html('');
		},

		getInfo: function(){
			this.model.set('name',this.$('#editName').val());
			this.model.set('phno',this.$('#editPhone').val());
			this.model.set('email',this.$('#editEmail').val());
			this.model.set('address',this.$('#editAddress').val());
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
			//this.listenToOnce(clients, 'add', this.showDetail);
			this.listenTo(this.model, 'change', this.showDetail);
			this.listenTo(this.model, 'remove', this.remove);
		},

		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},

		showDetail: function(){
			//console.log(this.model);
			//console.log('lll');
			$('.clicked').removeClass('clicked');
			//console.log(this.$('.list_name'));
			this.$('.list_name').addClass('clicked');
			var clientDetail=new DetailView({model:this.model});
			$('#detail').html(clientDetail.render().el);
		},



	});


	var App=Backbone.View.extend({
		el: 'body',

		events: {
			'keyup #cname' : 'searchName',
			'click #add' : 'showAdd'
		},

		initialize:function(){
			this.listenTo(clients, 'add', this.addOne);
			this.listenTo(clients, 'reset', this.addAll);
			clients.fetch();
		},

		render:function(){
			//$('.list-group').html('');
			//console.log('render');
		},

		addOne: function(client){
			console.log('addOne');
			var item=new ItemView({model:client});
			$('.list-group').append(item.render().el);
			//console.log(clients);
		},

		addAll: function(){
			console.log('addAll');
			clients.each(this.addOne);
		},

		searchName: function(){
			var searchValue=$('#cname').val(),
				searchResult=[],
				regValue='',
				matchValue;
			if(!searchValue){
				$('.list-group').html('');
				clients.each(this.addOne);
			}else{

				console.log(searchValue);
				for(var i=0; i<searchValue.length; i++){
					regValue+='['+searchValue[i]+']+\\w*';
				}
				console.log(regValue);
				matchValue=new RegExp(regValue);
				console.log(matchValue);
				clients.each(function(client){
					if(client.get('name').search(matchValue)!=-1){
						searchResult.push(client);
					}
				});
				$('.list-group').html('');
				searchResult.forEach(this.addOne);
			}
		},

		showAdd: function(){
			var newClient=new Client();
			var addView=new DetailView({model:newClient});
			//console.log(addView);
			$('#detail').html(addView.render().el);
			$('.showInfo').addClass('editInfo').removeClass('showInfo');
			$('.operate').text('保存').addClass('addIt').removeClass('operate');
		}
	});

	var myApp=new App();
});