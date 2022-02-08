 // https://opentdb.com/api.php?amount=10&category=21&difficulty=easy
import quiz from "./quiz.js";
class setting{
	constructor(){
		this.category=document.querySelector(".category");
		this.tab=[document.querySelector("#easy"),document.querySelector("#medium"),document.querySelector("#hard")];
		this.num=document.querySelector("#number");
		this.submit=document.querySelector("#StartQuiz");			
		this.submit.addEventListener("click",()=>this.data());

	}


	data=async ()=>{ 	
	// recuperer l'id  de la category choisi
	let category=this.category.value;
	var resultCategory;
	document.querySelectorAll(".category option").forEach(
		e=>{if(e.value==category){resultCategory=e.id; }});

    // recuperer le nombre des questions
    let num=this.num.value;

     // filtrer le button selectioné
     let difficulty=this.tab.filter(e=>e.checked);
    //les questions
    let questions;
    
    if(difficulty.length>0 && num>4){
    	let url=`https://opentdb.com/api.php?amount=${num}&category=${resultCategory}&difficulty=${difficulty[0].id}`;
    	await fetch(url).then((response)=>response.json()).then((data)=>{questions=data.results;console.log(questions,"l");});
    	document.querySelector(".QuizSetting").style.display="none";
    	document.querySelector(".QuizMain").style.display="block";
    	new quiz(questions);
    }
    else{
    	alert("please enter numbre of questions >4 and the Difficulty")
    }

}

}
new setting;



