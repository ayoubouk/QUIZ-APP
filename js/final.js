class result{
	constructor(answersCorrect,nOfquestions){
		this.answer=answersCorrect;
		this.nQuestion=nOfquestions;
		this.CA=document.querySelector(".answerCorrect");
		this.NQ=document.querySelector(".nQuestion");
		this.tryaginBtn=document.querySelector(".Tryagin");
		this.resultFinal();	
	}

	resultFinal(){
		this.CA.innerHTML=this.answer;
		this.NQ.innerHTML=this.nQuestion;
		this.tryaginBtn.addEventListener("click",()=>location.assign("./index.html"))
	}

}

export default result;
