/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 99 // тестовое значение, можно изменять
let grade
// your code
if (score<50){
    grade = 'F';
} else if (score<70){
    grade = 'D';
}else if (score<80){
    grade = 'C';
}else if (score<90){
    grade = 'B';
}else if (score <101 ){
    grade = 'A';
}else{
    console.log("Wrong input")
}


