var models = require('../models/models.js');

//get /quizes/question
exports.question = function(req, res) {
	models.Quiz.findAll().success(function(quiz){
		res.render('quizes/question', {pregunta: 'Capital de Italia'});
	})
};

//GET /quizes/answer
exports.answer = function(req, res){
	models.Quiz.findAll().success(function(quiz){
		if (req.query.respuesta === quiz[0].respuesta){
			res.render('quizes/answer', {respuesta: 'Correcto'});
		} else {
			res.render('quizes/answer', {respuesta: 'Incorrecto'});
		}
	})
};


// GET /quizes/author
exports.author = function(req,res){
	res.render('author',{autor :'Blanca Fernandez'});
};
