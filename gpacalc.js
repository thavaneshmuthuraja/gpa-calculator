var grade_value =[];
var credits_value=[];
function getValue(el){
    const grade_score=el.value;
    const index=el.dataset.index;
    let val=0;
    switch (grade_score){
        case "O":
            val=10;
            break;
        case "A+":
             val=9;
            break;
        case "A":
             val=8;
            break;
        case "B+":
             val=7;
            break;
        case "B":
             val=6;
            break;
        case "C":
             val=5;
            break;
    }
    //console.log(val);
    if(grade_score===""){
    grade_value[index]=undefined;
    showValue(undefined,el);
}else {
        grade_value[index]=val;
        showValue(val,el);

    }
}
function showValue(value,selectElement){
    const para=selectElement
                        .closest("td")
                        .nextElementSibling
                        .querySelector("p");
                        para.textContent=value;
}

function getCredits(el){
    const index=el.dataset.index;
    credits_value[index]=Number(el.value);
} 
function calculateGpa(){
    let tot_cre=0,tot_val=0;
    const res=document.getElementById("result");
    for(let i=0;i<6;i++){
          if (
            typeof grade_value[i] !== "number" ||
            typeof credits_value[i] !== "number"
        ) {
            document.getElementById("result").textContent =
                "Please select grade and credits for all courses";
            return;
        }
        tot_cre+=credits_value[i];
        tot_val+=credits_value[i]*grade_value[i];
    }
    res.textContent="Your Gpa: "+(tot_val/tot_cre).toFixed(3);
}