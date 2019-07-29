exports.seed = function(knex, Promise) {
	return knex('mood_board').del().then(function() {
		return knex('mood_board').insert([
			{ id: 1, party_id: 1, url_picture: 'https://bit.ly/2LLQzo5' },
			{ id: 2, party_id: 1, url_picture: 'https://bit.ly/2K7wmpO' },
			{ id: 3, party_id: 1, url_picture: 'https://bit.ly/2OnPlBK' },
			{ id: 4, party_id: 2, url_picture: 'https://bit.ly/32YBuF1' },
			{ id: 5, party_id: 2, url_picture: 'https://bit.ly/2YvWfJ4' },
			{ id: 6, party_id: 2, url_picture: 'https://bit.ly/2MnQjeL' },
			{ id: 7, party_id: 3, url_picture: 'https://bit.ly/2ymqW4w' },
			{ id: 8, party_id: 3, url_picture: 'https://bit.ly/2LMWObs' },
			{ id: 9, party_id: 3, url_picture: 'https://bit.ly/2VL8HzO' }
		]);
	});
};
