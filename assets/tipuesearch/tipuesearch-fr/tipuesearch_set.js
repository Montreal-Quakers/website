
/*
Tipue Search 6.1
Copyright (c) 2017 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = [];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 20},
     {'url': 'http://www.tipue.com/search', 'score': 30},
     {'url': 'http://www.tipue.com/is', 'score': 10}
]};


// Illogical stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'montréal', 'stem': 'montreal'},
     {'word': 'montreal', 'stem': 'montréal'},
     {'word': 'québec', 'stem': 'quebec'},
     {'word': 'quebec', 'stem': 'québec'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Related searches

var tipuesearch_related = {'searches': [
     {'search': 'tipue', 'related': 'Tipue Search'},
     {'search': 'tipue', 'before': 'Tipue Search', 'related': 'Getting Started'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'jQuery'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'Blog'}
]};


// Internal strings

var tipuesearch_string_1 = 'Sans titre';
var tipuesearch_string_2 = 'Sans titre';
var tipuesearch_string_3 = 'Sans titre';
var tipuesearch_string_4 = 'Sans titre';
var tipuesearch_string_5 = 'résultats';
var tipuesearch_string_6 = 'Retour';
var tipuesearch_string_7 = 'Plus';
var tipuesearch_string_8 = "Rien n'a été trouvé.";
var tipuesearch_string_9 = ''; // Used to be: 'Common words are largely ignored.'
var tipuesearch_string_10 = 'Recherche trop court';
var tipuesearch_string_11 = 'Devrait être un caractère ou plus.';
var tipuesearch_string_12 = 'Devrait être';
var tipuesearch_string_13 = 'caractères ou plus.';
var tipuesearch_string_14 = 'secondes';
var tipuesearch_string_15 = 'Recherches reliées à';

// Internals


// Timer for showTime

var startTimer = new Date().getTime();
