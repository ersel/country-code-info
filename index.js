'use strict';
const countries = require('./data/countries.json');

function isObject(obj) {
	return obj !== null && typeof obj === 'object';
}

function isValidKey(key) {
	const validKeys = [
		'name',
		'a2',
		'a3',
		'num',
		'itu',
		'gec',
		'ioc',
		'fifa',
		'ds',
		'wmo',
		'gaul',
		'marc',
		'dial',
		'independent'
	];
	if(validKeys.indexOf(key) > -1) {
		return true;
	}
	else {
		return false;
	}
}

function findCountry(searchTerm) {
	if(isObject(searchTerm)){
		let keyOriginal = Object.keys(searchTerm)[0];
		let key = new String(Object.keys(searchTerm)[0]).toLowerCase();
		let value = new String(searchTerm[keyOriginal]).toLowerCase();
		if(isValidKey(key)){
			for(let i = 0; i < countries.length; i++){
				let searchedKey = countries[i][key].toLowerCase();
				if(searchedKey.indexOf(value) > -1){
					return countries[i];
				}
			}
			return null;
		}
		else {
			throw new Error('invalid key');
		}
	}
	else {
		throw new Error('invalid search term, should be an object with a single key:value pair');
	}
}

module.exports = {
	findCountry
};
