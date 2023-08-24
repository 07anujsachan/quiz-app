import React from "react";
 import { Link } from "react-router-dom";
class Home extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="container intro-page">
        <h1 className="quiz-head"> Quiz </h1>
        <h1 className="q-mrk"> ?</h1>
        <img className="intro-img" src="./intro.jpg" alt="" />
        <p className="intro-para">
          " Welcome to our Quiz Master app! Embark on a journey of knowledge and
          challenge your intellect with a diverse range of questions. "
        </p>

         <Link to="/category">
        <button className="intro-btn"> 🎉 Let The quizzing begin! 🎉</button>
         </Link>
      </div>
    );
  }
}

export default Home;
