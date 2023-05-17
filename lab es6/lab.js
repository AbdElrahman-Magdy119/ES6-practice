// task1

// var array=[1,3,4,5,6]
// for (const number in array) {
//     console.log(array[number]);
// }

// var array=[1,3,4,5,6]
// for (const number of array) {
//     console.log(number);
// }

//  task2
// var student = {
//         "Std_name":"abdo",
//         "University":"assuit",
//         "fac_faculty":"fci",
//         "final_grade":95
//     }

// console.log(`First name is ${student.Std_name} and University is
//  ${student.University} and faculty is ${student.fac_faculty} and final_grade is ${student.final_grade} `);



// task3
// function getMax(...args)
// {
//     let maxNumber= args[0];
//     for(let i=1;i<args.length;i++)
//     {
//         if(args[i]>maxNumber)
//         {
//             maxNumber=args[i];
//         }
//     }
//     return maxNumber;
// }

// var max1=getMax(10,20,30,1,0.-10,70,5);
// var max2=getMax(-1,3,0);
// var max3=getMax(90,9,8,7,80,-10,70,6,5,4,3,100,0);

// console.log(max1);
// console.log(max2);
// console.log(max3);


// task4  ************************************************
//  let students= new Set(['abdo','adel','dgher','hema']);
//  console.log(students);
//  students.add('tarek');
//  students.add('doha');
//  for(var item of students)
// {
//     console.log(item);
// }


// task5
// window.onload=function(){
//     alert("Welcome to ITI");
//     var fuc =prompt("please enter your faculty name");
//     var dep =prompt("please enter department");
//     alert(`the fucalty name is ${fuc} and the department is ${dep} `);
// }


// task6
// function swap1(a,b){

//     [a,b]=[b,a];

//     alert(`a is ${a} and  b is ${b}`)
// }
//  swap1(10,20);

//  function swap1(a,b){

//     let tmp = a;
//     a=b;
//     b=tmp;

//     alert(`a is ${a} and  b is ${b}`)
// }
//  swap1(10,20);


// task7
// function cal(x,y)
// {
//     var x,y,sum,div,mal;
//      sum=x+y;
//      div=x/y;
//      mal=x*y;

//      return[sum,div,mal]

// }
//  let [x,y,z]=cal(10,20);
//  alert(`sum is ${x} div is ${y} mal is ${z}`);



// task8
// let numbers=[1,2,3,4];
// let moreNumbers=[5,6,7,8];
// let allNumbers=[...numbers,...moreNumbers];

// for(let i=0;i<allNumbers.length;i++)
// {
//     console.log(allNumbers[i]);
// }


// task9
// let userRoles = new Map();
//  userRoles.set("jhon",{Grades:[
//     {"Coursename":"java","Grade":"Excellent"},
//     {"Coursename":"oop","Grade":"good"},
//     {"Coursename":"xml","Grade":"f"}]}
// );
// userRoles.set("abdo",{Grades:[
//     {"Coursename":"java","Grade":"Excellent"},
//     {"Coursename":"oop","Grade":"v.good"},
//     {"Coursename":"xml","Grade":"v.good"}]}
// );



// var i=0;
// var selct = document.getElementById("sel");
// var divv=document.getElementById("di")
// var a=new Array();
// for(let user of userRoles.keys())
// {
//     a[i]=user ;
//     i++;
// }

// var count=0;
// for(let userRole of userRoles.values())
// {

//    var op = document.createElement("option");
//    op.text=a[count];
//    selct.add(op);
//    op.setAttribute("value",a[count]);
//   count++;
// }




// function getdata()
// {
//     divv.innerHTML="";
//     var counter=0
//     for(let userRole of userRoles.values())
//     {
//          if(selct.value == a[counter])
//         {
//            for(var j=0;j<3;j++)
//            {
//                  divv.innerHTML+= userRole.Grades[j].Coursename+"    "+userRole.Grades[j].Grade +"<br>";
//           }
//         }
//         counter++;
//     }

// }
