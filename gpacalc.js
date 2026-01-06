var grade_value =[];
var credits_value=[];
function getValue(el){
    const grade_score=el.value;
    switch (grade_score){
        case "o":
            grade_value.push(10);
            break;
        case "A+":
             grade_value.push(9);
            break;
        case "A":
              grade_value.push(8);
            break;
        case "B+":
            grade_value.push(7);
            break;
        case "B":
            grade_value.push(6);
            break;
        case "C":
            grade_value.push(5);
            break;
    }
}
function getId(el){
    getValue(el);
    getCredits(el);
}
function getCredits(el){
    credits_value.push(el.value);
} 
