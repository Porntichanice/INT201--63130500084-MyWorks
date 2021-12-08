//1.
const myFunc = function (instructor, ta, ...students) {
    let greeting = 'Hello';
    return students;
  };

//2.
  function echo(text) {
    return text;
  }
  
//3.
function sayHi(greeting, name) {
    return `${greeting}, ${name}`;
  }

  //4.
  function getClass() {
    return `INT201`;
  }

  const myFunc = function (instructor = 'unknown', numsOfStd = 0) {
    console.log(instructor);
    console.log(numsOfStd);
    return instructor;
  };
  
  myFunc(5);