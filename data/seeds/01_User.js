exports.seed = function(knex, Promise) {
	return knex('users').del().then(function() {
		return knex('users').insert([
			{ id: 1, username: 'Winnie', password: '1234' },
			{ id: 2, username: 'Don', password: '1234' },
			{ id: 3, username: 'Austen', password: '1234' }
		]);
	});
};