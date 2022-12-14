//q1 make a string out of array
{
const fruits = ['apple', 'banana', 'orange'];

const sfruit = fruits.join('+');

//console.log(sfruit);
console.log(fruits.toString());
}

// Q2. make an array out of a string
{
    const fruits = 'π, π₯, π, π';
    const result = fruits.split(',');
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());  //array μμ²΄ λ΄μ­μ λ°κΎΈλ κ±°μ
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2,5);
    console.log(result);
}

class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }

  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
// Q5. find a student with the score 90

/* 
{
    const result = students.find(function(student, index){
       return student.score === 90; 
    });
    console.log(result);
}
*/
{
    const result = students.find((student) => student.score === 90); 
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const arr1 = new Array();
    const result = students.forEach(function(student) {
        console.log(student.enrolled);  
        if (student.enrolled === true) {
            arr1.push(student);
        }
    });
    console.log(arr1);   
}
{
    const arr2 = students.filter((student) => student.enrolled);
    console.log(arr2);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.forEach((student) => console.log(student.score));
    console.log(result)
}
{
    const result = students.map((student) => student.score);
    console.log(result)
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some(student => student.score < 50);
    console.log(result);
    //every and ! μ¬μ© ==> κ·Έλ¬λ κ°λμ± λ¨μ΄μ Έ μλ₯Ό μ νΈν¨
    const result2 = !students.every(student => student.score >= 50);
    console.log(result2);

}   

// Q9. compute students' average score
// rerurnν κ°μ΄ λ€μμ prevμ λ€μ΄κ°λ€ 
// 0μΌλ‘ μ΄κΈ°ν ν 
{
    const result = students.reduce((prev, curr) => prev + curr.score,0);
    console.log(result/students.length)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student) => student.score)  //μ μλ‘ λ³ν
    .filter((score) => score >= 50 )    //50μ  μ΄μ
    .join();                            //string λ³ν
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
      .map((student) => student.score)
      .sort((a,b) => a - b)
      .join();
      console.log(result); 
}