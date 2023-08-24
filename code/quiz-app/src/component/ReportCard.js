import React from "react";
class ReportCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.check);
    return (
      <div className="rep-container">
        <div className="flex space-btw">
          <h1 className="rep-head"> ReportCard </h1>
          <h2 className="score">Score: {this.props.score}</h2>
        </div>

        <div className="flex">
          <div className="rep-ques">
            {" "}
            <p className="border1"> Question</p>
          </div>
          <div className="rep-cans">
            {" "}
            <p className="border1"> Correct Answer</p>
          </div>
          <div className="rep-ans">
            {" "}
            <p className="border1"> Your Answer</p>
          </div>
          <div className="rep-tick">
            {" "}
            <p className="border1"> Result</p>
          </div>
        </div>
        <div className="flex ">
          <div className="rep-ques">
            {this.props.questions.map((ques, i) => (
              <div className="border">
                <span>{i + 1}</span>
                <span>{ques.question}</span>
              </div>
            ))}
          </div>
          <div className="rep-cans">
            {this.props.questions.map((ques) => (
              <>
                <p className="border">{ques.correct_answer}</p>
              </>
            ))}
          </div>
          <div className="rep-ans">
            {this.props.selectedAnswers.map((ans) => (
              <p className="border">{ans}</p>
            ))}
          </div>
          <div className="rep-tick">
            {this.props.check.map((check) => (
              <div className="border">{check}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ReportCard;
