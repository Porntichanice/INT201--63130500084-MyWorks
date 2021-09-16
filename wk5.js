let quest = { id: 1, quest: 'what is it' }; //implicit class => let quest= new Object()

console.log(typeof quest);
class Question {
  constructor(id, question) {
    this._id = id;
    this._question = question;
  }
  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get question() {
    return this_question;
  }
  set question(question) {
    this._question = question;
  }
  displayQuestion() {
    return `id: ${this._id}, question: ${this.question} }`;
  }
  getQuestLength() {
    return this._question.length;
  }
}







const quest1 = {
    id: 1,
    question: 'What is your name?'
  
  };

  delete quest1.question;
  console.log(quest1);
  quest1.questions = 'What is your name?';
  console.log(quest1);

  //#1 independent variables, all are array
let ids = [1, 2];
let quests = ['what is your name?', 'where are you?'];
let answers = ['Umaporn', 'at home'];

//#2 array of objects, easy iterate all items under a single variable
let quest3 = [
  { id: 1, question: 'What is your name?', answer: 'Umaporn' },
  { id: 2, question: 'Where are you?', answer: 'at home' }
];

//#3 one object, each property stores with array
let quest4 = {
  ids: [1, 2],
  quests: ['what is your name?', 'where are you?'],
  answers: ['Umaporn', 'at home']
};