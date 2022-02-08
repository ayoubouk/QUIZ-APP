import question from "./question.js";
import result from "./final.js";
class quiz{
	constructor(q){
		this.compteur=document.querySelector(".counter");
		this.nextBtn=document.querySelector(".nextBtn");		
		this.ListQuestions=q;
		this.compteurAnswerCorrect=0;
		this.i=q.length;
		this.nextQuestion();
		this.nextBtn.addEventListener("click",()=>this.nextQuestion());
		this.qt;
	}
	nextQuestion(){

		if(this.i>=0){

			if(this.i!==this.ListQuestions.length){
				this.compteurAnswerCorrect+=this.qt.iscorrect();
				console.log(this.compteurAnswerCorrect);}

				if(this.i!==0){
					this.compteur.innerHTML=this.ListQuestions.length-this.i+1;		
					this.qt=new question(this.ListQuestions[this.ListQuestions.length-this.i]);
				}
				else 
				this.showFinal();

				this.i--;
			}
		}
		 showFinal(){
	 	            document.querySelector(".QuizSetting").style.display="none";
					document.querySelector(".QuizMain").style.display="none";
					document.querySelector(".result").style.display="block";
					new result(this.compteurAnswerCorrect,this.ListQuestions.length);
	 }

	}

	export default quiz;