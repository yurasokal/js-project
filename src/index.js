import './styles/index.scss';

const userStack = {
  language: 'JavaScript',
  library: 'ReactJS'
}

const user = {
  name: 'Yurii',
  age: '28',
  ...userStack
}

console.log(user);