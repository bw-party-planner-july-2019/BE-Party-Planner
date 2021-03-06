const db = require('../dbConfig.js');

module.exports = {
	add,
	find,
	findBy,
	findById
};

function find() {
	return db('users').select('id', 'username', 'password');
}

function findBy(filter) {
	return db('users').where(filter);
}

async function add(user) {
	const [ id ] = await db('users').insert(user).returning('id');
    const newUser = await findById(id);
    return newUser
}

function findById(id) {
	return db('users').where({ id }).first();
}
