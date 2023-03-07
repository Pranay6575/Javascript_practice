function studentResult(subjectA, subjectB) {
   subjectA = prompt("Enter A percentage");
   subjectB = prompt("Enter B percentage");

   if (subjectA >= 55 && subjectB >= 45) {
      return "Student is Passed"
   }
   else if (subjectA < 55 && subjectB >= 55 && subjectA >= 45) {
      return "Student is Passed";
   }
   else if (subjectA >= 65 && subjectB < 45) {
      return "Student is allowed to Reappear of Examination"
   }
   else {
      return "Student Failed";
   }
}
console.log(studentResult());