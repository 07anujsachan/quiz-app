import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ReportCard from "./ReportCard";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchQuestion();
  }
  render() {
    let answers = this.props.questions[this.props.activeQuestion]
      ? this.props.questions[
          this.props.activeQuestion
        ].incorrect_answers.concat(
          this.props.questions[this.props.activeQuestion].correct_answer
        )
      : "";
    console.log(answers);
    return (
      <>
        <div className="quiz-container">
          <div className="container3 flex">
            <div className="gif-div">
              <img className="gif" src="./animation.gif" alt="#" />
            </div>
            <div className="ques-div">
              <h3 className="ques-no">
                Question: {this.props.activeQuestion + 1}/10
              </h3>
              <h1 className="question">
                {" "}
                {this.props.questions[this.props.activeQuestion]
                  ? this.props.questions[this.props.activeQuestion].question
                  : ""}
              </h1>
              <div className="answers">
                {answers
                  ? answers.map((ans) => (
                      <button
                        onClick={() => {
                          this.props.handleSelectedAns(ans);
                          this.props.handleSelectedAnswers(ans);
                        }}
                        className={
                          this.props.selectedAns === ans
                            ? "selected"
                            : "ans-btn"
                        }
                      >
                        {ans}
                      </button>
                    ))
                  : ""}
              </div>
              <div className="dis-flx">
                {this.props.activeQuestion === 9 ? (
                  <Link to="/report">
                    <button
                      onClick={() =>
                        this.props.handleScore(
                          this.props.questions[this.props.activeQuestion]
                            ? this.props.questions[this.props.activeQuestion]
                                .correct_answer
                            : ""
                        )
                      }
                      className="next-btn"
                    >
                      {" "}
                      Submit
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      this.props.handleNextQues();
                      this.props.handleScore(
                        this.props.questions[this.props.activeQuestion]
                          ? this.props.questions[this.props.activeQuestion]
                              .correct_answer
                          : ""
                      );
                    }}
                    className="next-btn"
                  >
                    {" "}
                    Next Question
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Quiz;
