'use strict';
const test = require('ava').test;
const CountryCodes = require('../index.js');

const ukFixture = {
	'name': 'United Kingdom',
	'a2': 'GB',
	'a3': 'GBR',
	'num': '826',
	'itu': 'G',
	'gec': 'UK',
	'ioc': 'GBR',
	'fifa': 'ENG, NIR, SCO, WAL',
	'ds': 'GB',
	'wmo': 'UK',
	'gaul': '256',
	'marc': 'xxk',
	'dial': '44',
	'independent': 'Yes'
};

test('search for a country using name', t => {
	let uk = CountryCodes.findCountry({'name': 'United Kingdom'});
	t.deepEqual(uk, ukFixture);
});

test('search for a country which has multiple value for a given key', t => {
	let uk = CountryCodes.findCountry({'fifa': 'SCO'});
	t.deepEqual(uk, ukFixture);
});

test('try searching with an invalid key', t => {
	t.throws(() => CountryCodes.findCountry({'no-such-key': 'blah'}));
});

test('try searching with an invalid searchterm', t => {
	t.throws(() => CountryCodes.findCountry('hello error'));
});

test('no such country', t => {
	let na = CountryCodes.findCountry({'name': 'Mythical Unicorn Land'});
	t.deepEqual(na, null);
});

// casing of KV pair should not affect search
test('try mixed case key value pairs, should still be able to return correct country data', t => {
	let uk = CountryCodes.findCountry({'FIFA': 'sco'});
	t.deepEqual(uk, ukFixture);
});

// testing the exact match
test('search for a country using short DS code - EXACT MATCH', t => {
	let uk = CountryCodes.findCountry({'ds': 'GB'}, true);
	t.deepEqual(uk, ukFixture);
});

test('try searching with an invalid key - EXACT MATCH', t => {
	t.throws(() => CountryCodes.findCountry({'no-such-key': 'blah'}, true));
});

test('try searching with an invalid search term - EXACT MATCH', t => {
	t.throws(() => CountryCodes.findCountry('hello error', true));
});

test('no such country - EXACT MATCH', t => {
	let na = CountryCodes.findCountry({'name': 'Mythical Unicorn Land'}, true);
	t.deepEqual(na, null);
});
