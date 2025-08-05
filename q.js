const choices=document.querySelectorAll(".gap")
let count=0;
const scoreboard=document.getElementById("score")
const msg1=document.getElementById("msg1")
const msg2=document.getElementById("msg2")
const msg3=document.getElementById("msg3")
const msg4=document.getElementById("msg4")
const msg5=document.getElementById("msg5")
const msg6=document.getElementById("msg6")


const correctans=["cat","coffee","winter","text","savour","introvert"]

const correct=(fav)=>{
    if(fav=="cat"){
        msg1.innerHTML="✅correct!! I love cats"
    }
    else if(fav=="coffee"){
        msg2.innerHTML="✅Correct,coffee is rainy day is the best...."
    }
    else if(fav=="winter"){
        msg3.innerHTML="✅Correct,who doesnt love to sleep in winter"
    }
    else if(fav=="text"){
        msg4.innerHTML="✅correct,texting is wayy better"
    }
    else if(fav=="savour"){
        msg5.innerHTML="✅correct,anytime anyday"
    }
    else if(fav=="introvert"){
        msg6.innerHTML="✅correct,i wanna stay home forever"
    }
}
    

    const wrong=(notfav)=>{
        if(notfav=="dog"){
        msg1.innerHTML="❌Incorrect,i prefer cats"
    }
    else if(notfav=="tea"){
        msg2.innerHTML="❌Incorrect,i prefer coffee"

    }
    else if(notfav=="summer"){
        msg3.innerHTML="❌InCorrect,summer sucks man..."
    }
    else if(notfav=="call"){
        msg4.innerHTML="❌Incorrect,calls are awkward"
    }
    else if(notfav=="sweet"){
        msg5.innerHTML="❌Incorrect,ewwww i dont like sweet things"
    }
    else if(notfav=="extrovert"){
        msg6.innerHTML="❌Incorrect,i wanna stay home forever"
    }

    
}




choices.forEach((control) => {
    control.addEventListener("click",()=>{
        const group=control.parentElement;

        if(group.classList.contains("answered")){
               return;
        }

        const major =control.getAttribute("id")
     if(correctans.includes(major)){
        correct(major)
       control.style.backgroundColor="green"
       count++
       
     }
     else{
        wrong(major)
      control.style.backgroundColor="red"
    
     }

   
     group.classList.add("answered")
     scoreboard.innerHTML=`YOUR SCORE : ${count} out of 6`
     
    

     
    })
});


/*✨ What Changed & Why It’s Better:
Improvement	Why it’s Better
✅ Used objects ({}) instead of if/else	Faster and cleaner than long if-chains
✅ Reduced repetitive code	Less manual typing, easier to maintain
✅ Grouped related HTML	Easier to scale and debug
✅ Used data-* attributes	Keeps HTML and JS connected but separate in logic*/