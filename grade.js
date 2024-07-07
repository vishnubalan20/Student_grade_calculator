function calculateGrades() {
  let grades = [];
  for (let i = 1; i <= 5; i++) {
      let grade = parseFloat(document.getElementById(`subject${i}`).value);
      if (isNaN(grade) || grade < 0 || grade > 100) {
          alert("Please enter valid marks between 0 and 100 for all subjects.");
          return; // Stop further execution
      }
      grades.push(grade);
  }
  
  let fail = false;
  for (let grade of grades) {
      if (grade < 35) {
          fail = true;
          break;
      }
  }
  
  if (fail) {
      let resultElement = document.getElementById("result");
      resultElement.innerHTML = `<div class="error-message">You are Fail!!!<br> Please check marks, at least one subject is less than 35.</div>`;
  } else {
      let total = 0;
      for (let grade of grades) {
          total += grade;
      }
      let average = total / grades.length;
      let letterGrade;
      
      if (average >= 90) {
          letterGrade = 'A';
      } else if (average >= 80) {
          letterGrade = 'B';
      } else if (average >= 70) {
          letterGrade = 'C';
      } else if (average >= 60) {
          letterGrade = 'D';
      } else {
          letterGrade = 'F';
      }
      
      let resultElement = document.getElementById("result");
      resultElement.innerHTML = `
          <div class="success-message">
              <h2>Results</h2>
              <p>Total Marks: ${total.toFixed(2)}</p>
              <p>Average Grade: ${average.toFixed(2)} (${letterGrade})</p>
          </div>`;
  }
}
