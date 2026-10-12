let customerId = "C101";
let employmentType = "Salaried";
let income = 40000;
let loanAmount = 200000;
let emi = 8000;
let creditScore = 780;
let eligibility = "Not Eligible";
let category = "Not Eligible";
let remarks = "";


if (emi > income * 0.5) {
    remarks = "Existing EMI is too high";
}
else if (
    employmentType === "Salaried" &&
    income >= 30000 &&
    creditScore >= 750
) {
    eligibility = "Eligible";
    category = "Standard";
    remarks = "Meets standard loan requirements";
}
else if (creditScore >= 650 && creditScore <= 749) {
    eligibility = "Eligible";
    category = "Restricted";
    remarks = "Meets restricted loan requirements";
}
else {
    remarks = "Minimum requirements not satisfied";
}

console.log("Customer ID:", customerId);
console.log("Employment Type:", employmentType);
console.log("Monthly Income: Rs.", income);
console.log("Requested Loan Amount: Rs.", loanAmount);
console.log("Credit Score:", creditScore);
console.log("Existing EMI: Rs.", emi);
console.log("Loan Eligibility:", eligibility);
console.log("Eligibility Category:", category);
console.log("Remarks:", remarks);
console.log("Note: This is only a preliminary result, not loan approval.");