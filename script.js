let characters = {
	'character1': {
		'first name': 'James', 
		'last name': 'Bond'
	}, 
	'character2': {
		'first name': 'Luke', 
		'last name': 'Skywalker'
	}, 
	'character3': {
		'first name': 'Jason', 
		'last name': 'Bourne'
	},
	'greetings': function (character) {
		alert('Hi ' + this[character]['first name'] + ' ' + this[character]['last name'] + '!');
	}
};


characters['greetings']('character1');




