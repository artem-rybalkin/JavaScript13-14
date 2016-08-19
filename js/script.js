'use strict';
$(function() {
// создали объект с вопросами
	var question = [
		{number: 'Вопрос№1', answer1: 'Вариант ответа№1', answer2: 'Вариант ответа№2', answer3: 'Вариант ответа№3', name: 'answ1', id: 1},
		{number: 'Вопрос№2', answer1: 'Вариант ответа№1', answer2: 'Вариант ответа№2', answer3: 'Вариант ответа№3', name: 'answ2', id: 2},
		{number: 'Вопрос№3', answer1: 'Вариант ответа№1', answer2: 'Вариант ответа№2', answer3: 'Вариант ответа№3', name: 'answ3', id: 3}
		];
//записали в локальное хранилище вопросы
	localStorage.setItem('ques', JSON.stringify(question));
//вычитываем из хранилища ыопросы
	var objects = localStorage.getItem('ques');
	objects = JSON.parse(objects);

// создаём объект с ответами
	var	rightAnswer1 = 'a1' ;
	var	rightAnswer2 = 'a2' ;
	var	rightAnswer3 = 'a3' ;
	var rightAnswer = [rightAnswer1, rightAnswer2, rightAnswer3];
// записали в локальное хранилище ответы
	localStorage.setItem('answ', JSON.stringify(rightAnswer));
//вычитываем из хранилища ответы
	rightAnswer = JSON.parse(localStorage.getItem('answ'));
// шобланизируем:)
	var template = $('#template').html();
	var content = tmpl(template, {data:objects});
	$('body').append(content);
	
// выполнение при нажатии на конпку
	$('#button').on('click', function(){
// записываем id всех выбраных чекбоксов в массив
		var checked = [];
		$("input:radio:checked").each(function(){checked.push($(this).attr('id'));}); 
// проверяем, если не выбран ни один пункт
		if(checked.length < 3) { 
			Modale('Выберите ответ');
	        return false;
	    }
// проверяем количество правильных ответов
	    var count = 0;
	    for ( var i = 0; i < checked.length; i++ ) {
	    	if ( checked[i] == rightAnswer[i] ) {
	    		count += 1 ;
	    	} else {
	    		Modale('wrong');
	    		break;
	    	}
	    }
	    if ( count == 3 ) {
	    	Modale('super good');
	    }  
		$("input:radio:checked").attr('checked', false);
	});


});