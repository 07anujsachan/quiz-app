import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Category from "./component/Category";
import Quiz from "./component/Quiz";
import ReportCard from "./component/ReportCard";

let difficulty = ["easy", "medium", "hard"];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      difficulty: difficulty,
      selectedCategory: "",
      selectedDifficulty: "",
      questions: [],
      selectedAnswers: [],
      activeQuestion: 0,
      selectedAns: "",
      check: [],
      score: 0,
    };
  }
  handleSelectedAnswers = (ans) => {
    this.setState({
      selectedAnswers: this.state.selectedAnswers.concat(ans),
    });
  };

  handleScore = (ans) => {
    this.state.selectedAnswers.forEach((element2) => {
      console.log(ans, element2);
      if (ans !== element2) {
        this.setState({
          check: this.state.check.concat("❌"),
          score: this.state.score,
        });
      } else {
        this.setState({
          check: this.state.check.concat("✅"),
          score: this.state.score + 1,
        });
      }
    });
  };
// Fetches the questions based on selected category and difficulty level. 
  fetchQuestion = () => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${this.state.selectedCategory.id}&difficulty=${this.state.selectedDifficulty}`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ questions: data.results }));
  };
   
  fetchCategories = () => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => this.setState({ category: data.trivia_categories }));
  };

  handleNextQues = () => {
    this.setState({
      activeQuestion: this.state.activeQuestion + 1,
    });
    this.handleScore();
  };

  handleSelectedAns = (answer) => {
    this.setState({ selectedAns: answer });
  };

  componentDidMount() {
    this.fetchCategories();
  }

  handleselectCategory = (category) => {
    this.setState({ selectedCategory: category });
  };

  handleselectDifficulty = (difficulty) => {
    this.setState({ selectedDifficulty: difficulty });
  };
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category"
            element={
              <Category
                category={this.state.category}
                difficulty={this.state.difficulty}
                selectedCategory={this.handleselectCategory}
                selectedDifficulty={this.handleselectDifficulty}
                selectCategory={this.state.selectedCategory}
                selectDifficulty={this.state.selectedDifficulty}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                selectedCategory={this.state.selectedCategory}
                handleNextQues={this.handleNextQues}
                activeQuestion={this.state.activeQuestion}
                selectedAns={this.state.selectedAns}
                questions={this.state.questions}
                handleSelectedAns={this.handleSelectedAns}
                selectedDifficulty={this.state.selectedDifficulty}
                fetchQuestion={this.fetchQuestion}
                handleSelectedAnswers={this.handleSelectedAnswers}
                handleScore={this.handleScore}
              />
            }
          />
          <Route
            path="/report"
            element={
              <ReportCard
                selectedAnswers={this.state.selectedAnswers}
                questions={this.state.questions}
                check={this.state.check}
                handleScore={this.handleScore}
                score={this.state.score}
              />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
