// 1- add event listener to the case plus button
// get the value inside the case number field (input field)
// convert the number to an integer
// calcutate the new case number 
// set the value to the case number field    




document.getElementById('btn-case-plus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber +1;
    caseNumberField.value = newCaseNumber;
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber -1;
    caseNumberField.value = newCaseNumber;
})