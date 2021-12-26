import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            login({
              name: prompt("enter name"),
              age: prompt("enter age"),
              email: prompt("enter email"),
            })
          );
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Login;
