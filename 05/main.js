class Student {
  constructor(name, surname) {
    this.myname = name;
    this.mysurname = surname;
    this.school_subjects = {
      mathematic: [],
      physic: [],
      music: [],
    };
  }

  // add next grade to chosen subject
  addGrade = (subject, newGrade) => {
    if (this.school_subjects[subject]) this.school_subjects[subject].push(newGrade);
    else return console.log("Nie ma takiego przedmiotu");
  };

  averageGrades = (subject) => {
    const result = this.school_subjects[subject].reduce((accu, item) => accu + item);
    return result / this.school_subjects[subject].length;
  };

  // show average grades from all subjects
  averageAllGrades = () => {
    const allGrades = [...this.school_subjects.mathematic, ...this.school_subjects.music, ...this.school_subjects.physic];
    const result = allGrades.reduce((accu, item) => accu + item);
    return (result / allGrades.length).toFixed(1);
  };
}

const firstStudent = new Student("Artur", "Matysiak");

firstStudent.addGrade("physic", 4);
firstStudent.addGrade("music", 4);
firstStudent.addGrade("physic", 2);
firstStudent.addGrade("mathematic", 4);
firstStudent.addGrade("mathematic", 4);
firstStudent.addGrade("physic", 6);

const showAverage = firstStudent.averageGrades("physic");
const all = firstStudent.averageAllGrades();
console.log(all);
