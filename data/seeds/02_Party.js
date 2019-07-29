exports.seed = function(knex, Promise) {
	return knex('party').del().then(function() {
		return knex('party').insert([
			{
				id: 1,
				user_id: 1,
				party_name: 'Don promotion',
				n_of_guests: 200,
				date: '2019-09-10',
				theme: 'Hawaiian',
				budget: 2000
			},
			{
				id: 2,
				user_id: 2,
				party_name: 'Birthday Party',
				n_of_guests: 50,
				date: '2020-01-21',
				theme: 'White Party',
				budget: 1200
			},
			{
				id: 3,
				user_id: 3,
				party_name: 'Baby Shower',
				n_of_guests: 20,
				date: '2020-03-14',
				theme: 'Blue/Pink',
				budget: 400
			}
		]);
	});
};