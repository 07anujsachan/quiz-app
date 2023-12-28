import React from "react";
import { Link } from "react-router-dom";
// Component for displaying all the available categories.
class Category extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container2">
        <h1 className="cat-head">Choose Your Challenge </h1>
        <h2 className="select"> Select Category :- </h2>
        <div className="btn-warp">
          {this.props.category.map((category) => {
            return (
              <>
                <button
                  onClick={() => {
                    this.props.selectedCategory(category);
                  }}
                  className={
                    this.props.selectCategory === category
                      ? "active"
                      : "cat-btn"
                  }
                >
                  {" "}
                  {category.name}
                </button>
              </>
            );
          })}
        </div>
        <h2 className="select"> Select Difficulty :- </h2>
        <div className="btn-warp">
          {this.props.difficulty.map((difficulty) => {
            return (
              <>
                <button
                  onClick={() => {
                    this.props.selectedDifficulty(difficulty);
                  }}
                  className={
                    this.props.selectDifficulty === difficulty
                      ? "active"
                      : "cat-btn"
                  }
                >
                  {" "}
                  {difficulty}
                </button>
              </>
            );
          })}
        </div>
        <Link to="/quiz">
          <button className="start-btn"> Lets Start </button>
        </Link>
      </div>
    );
  }
}

export default Category;
