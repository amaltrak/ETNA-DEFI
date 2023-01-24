import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Navbarr from "../components/Navbar";

const Connexion = (props) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (para) => {
    para.preventDefault();

    const config = {
      body: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        "https://auth.etna-alternance.net/identity",
        {
          email,
          password,
        },
      config)
      .then((res) => {
        if (res.status === 200) {
          props.setMessage("");
          props.setError("");

        }
      })
    return router.push('/');
  };

  return (
    <>
    <Navbarr />
      <form onSubmit={onSubmit}>
        <div className="box-log">
          <div className="form">
            <h2>SIGN IN</h2>

            {props.error && props.error !== "" ? (
              <div className="error_container">
                <h1 className="error_title">{props.error}</h1>
              </div>
            ) : (
              <></>
            )}

            {props.message && props.message !== "" ? (
              <div className="error_container">
                <h1 className="success_title">{props.message}</h1>
              </div>
            ) : (
              <></>
            )}
            <div>Email</div>
            <div className="inputBox">
              <input
                type="email"
                onChange={(para) => setEmail(para.target.value)}
                value={email}
                required
              />
            </div>
            <div>Password</div>
            <div className="inputBox">
              <input
                type="Password"
                onChange={(para) => setPassword(para.target.value)}
                value={password}
                required
              />
              <i></i>
            </div>
            <Link href="/">
            <input
              className="c"
              type="submit"
              value="Login"
            />
            </Link>

            <div className="redirect-register">
              <Link href="/Register">SIGN UP</Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Connexion;