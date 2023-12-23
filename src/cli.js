import readlineSync from 'readline-sync';

//  get name from user
const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export default askUserName;
