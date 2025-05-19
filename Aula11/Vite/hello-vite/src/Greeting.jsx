import React from 'react';

function UserGreeting() {
  return <h1>Bem-vindo!</h1>;
}

function GuestGreeting() {
  return <h1>Por favor, faça login.</h1>;
}

function Greeting(props) {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;

}

// function Greeting(props) {
// const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//    return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }
export default Greeting;