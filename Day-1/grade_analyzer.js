const students = [
  { name: "Alice", score: 81 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 43 },
  { name: "David", score: 74 },
  { name: "Yash", score: 90 },
  { name: "Parth", score: 85 },
  { name: "Het", score: 71 },
  { name: "Shivam", score: 23 },
  { name: "Dev", score: 59 },
  { name: "Deep", score: 88 }
];

function getAverage(students) {
  let total = 0;

  for (let i = 0; i < students.length; i++) {
    total = total + students[i].score;
  }

  let average = total / students.length;
  return average;
}

function Highest(students) {
  let highest = students[0].score;
  let sname1 = students[0].name;

  for (let i = 1; i < students.length; i++) {
    if (students[i].score > highest) {
      highest = students[i].score;
      sname1 = students[i].name;
    }
  }

  let obj1 = { highest: highest, name: sname1 };
  return obj1;
}

function Lowest(students) {
  let lowest = students[0].score;
  let sname2 = students[0].name;

  for (let i = 1; i < students.length; i++) {
    if (students[i].score < lowest) {
      lowest = students[i].score;
      sname2 = students[i].name;
    }
  }

  let obj2 = { lowest: lowest, name: sname2 };
  return obj2;
}

function GradeCount(students) {
  let grade = { A: 0, B: 0, C: 0, D: 0, F: 0 };

  for (let i = 0; i < students.length; i++) {
    let score = students[i].score;

    if (score >= 90) {
      grade.A = grade.A + 1;
    } else if (score >= 80) {
      grade.B = grade.B + 1;
    } else if (score >= 70) {
      grade.C = grade.C + 1;
    } else if (score >= 60) {
      grade.D = grade.D + 1;
    } else {
      grade.F = grade.F + 1;
    }
  }

  return grade;
}


function Retake(students) {
  let sname3 = [];

  for (let i = 0; i < students.length; i++) {
    if (students[i].score < 60) {
      sname3.push(students[i].name);
    }
  }

  return sname3;
}

const average = getAverage(students);
const highest = Highest(students);
const lowest = Lowest(students);
const grades = GradeCount(students);
const retakes = Retake(students);

console.log("Average Score:", average);
console.log("Highest:", highest.name, highest.highest);
console.log("Lowest:", lowest.name, lowest.lowest);
console.log("Grade Count:", grades);
console.log("Retake Students:", retakes);
