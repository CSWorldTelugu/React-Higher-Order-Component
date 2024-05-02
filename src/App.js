import React from "react";

function AuthCheck(Component) {
  let authenticated = true;

  return (props) => {
    if (authenticated) {
      return <Component {...props} />;
    } else {
      return <Login />;
    }
  };
}

function User(props) {
  return (
    <>
      <h1>This is User Component</h1>
      <h2>Hello {props.username}</h2>
    </>
  );
}

function Login() {
  return <h1>This is Login Component</h1>;
}

const AuthChecked = AuthCheck(User);

function App() {
  return <AuthChecked username={"john"} />;
}

export default App;
