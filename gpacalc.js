var grade_value =[];
var credits_value=[];
function getValue(el){
    const grade_score=el.value;
    let val=0;
    switch (grade_score){
        case "O":
            val=10;
            grade_value.push(val);
            break;
        case "A+":
             val=9;
             grade_value.push(val);
            break;
        case "A":
             val=8;
              grade_value.push(val);
            break;
        case "B+":
             val=7;
            grade_value.push(val);
            break;
        case "B":
             val=6;
            grade_value.push(val);
            break;
        case "C":
             val=5;
            grade_value.push(val);
            break;
    }
    //console.log(val);
    showValue(val,el);
}
function showValue(value,selectElement){
    const para=selectElement
                        .closest("td")
                        .nextElementSibling
                        .querySelector("p");
                        para.textContent=value;
}

function getCredits(el){
    credits_value.push(Number(el.value));
} 
function calculateGpa(){
    let tot_cre=0,tot_val=0;
    for(let i=0;i<grade_value.length;i++){
        tot_cre+=credits_value[i];
        tot_val+=credits_value[i]*grade_value[i];
    }
    const res=document.getElementById("result");
    res.textContent="Your Gpa: "+tot_val/tot_cre;
}