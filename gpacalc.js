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
    credits_value.push(el.value);
} 
