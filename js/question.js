class question{
	constructor(questions){
		this.showAnswers();
		this.question=document.querySelector(".Question");
		this.answer1=document.querySelector(".response1");
		this.answer2=document.querySelector(".response2");
		this.answer3=document.querySelector(".response3");
		this.answer4=document.querySelector(".response4"); 
        this.isCorrect=0;
		this.correctAnswer=questions.correct_answer;
		this.answers=[this.correctAnswer,...questions.incorrect_answers];
		//show question
		this.question.innerHTML=questions.question;
		//show answers
		this.showAns();	
		//pour rendre les reponses non ordonnees
		this.ItemQuestions=document.querySelectorAll(".QuestionItem div");
		this.newAnswersList();
	}
	showAns(){
		this.answer1.innerHTML=this.answers[0];
		this.answer2.innerHTML=this.answers[1];
		this.answer3.innerHTML=this.answers[2];
		this.answer4.innerHTML=this.answers[3];
	}
	iscorrect(){
		let x=[document.querySelector("#response1"),document.querySelector("#response2"),document.querySelector("#response3"),document.querySelector("#response4")];
		let itemChecked=x.find(e=>e.checked);
		if(itemChecked){

			let id=itemChecked.getAttribute("id");
			if(this.correctAnswer==document.querySelector("."+id).innerText){
				this.isCorrect++;
			}
			
		}
           return this.isCorrect;
	}

	showAnswers(){
		document.querySelector(".QuestionItem").innerHTML=`
		<div  style="float: 
		left"><label class="response1">1</label> <input id="response1" type="radio" name="response"></div>
		<div style="float: 
		left"><label class="response2">2</label> <input id="response2" type="radio" name="response"></div>
		<div style="float: 
		left"><label class="response3">3</label> <input id="response3" type="radio" name="response"></div>
		<div  style="float: 
		left"><label class="response4">4</label> <input id="response4" type="radio" name="response"></div>
		`;
	}
    
	arrayShuffle(a) {
		var l = a.length, t, r;
		while (0 !== l) {
			r = Math.floor(Math.random() * l);
			l -= 1;
			t = a[l];
			a[l] = a[r];
			a[r] = t;
		}
		return a;
	}
    
   newAnswersList(){
   	    this.ItemQuestions=[...this.ItemQuestions];
		this.ItemQuestions=this.arrayShuffle(this.ItemQuestions);
		document.querySelector(".QuestionItem").innerHTML="";
		this.ItemQuestions.forEach(e=>document.querySelector(".QuestionItem").innerHTML+=e.innerHTML);
   }
	
}

export default question;