// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0, inputWord: ''}

  onChangeLettersLength = event => {
    this.setState({inputWord: event.target.value})
    this.setState({letterCount: this.inputWord.length})
  }

  render() {
    const {letterCount, inputWord} = this.state
    console.log(inputWord)
    console.log(letterCount)

    return (
      <div className="Main-container">
        <div className="Content-container">
          <div>
            <h1>Calculate the Letters you Enter</h1>
            <p>Enter the phrase</p>
            <input
              id="input"
              type="text"
              className="Search-input"
              onChange={this.onChangeLettersLength}
              value={inputWord}
              placeholder="Enter the phrase"
            />
            <label for="input">Enter the phrase</label>
            <div className="Letters-length">
              <p>No.of Letters: {inputWord.length}</p>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
                alt="letters calculator"
                className="Image"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
