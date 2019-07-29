const cleaner = require('knex-cleaner');
// prevent FK errors when trying to truncate tables that have FK pointing to them

exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return cleaner.clean(knex);
};
