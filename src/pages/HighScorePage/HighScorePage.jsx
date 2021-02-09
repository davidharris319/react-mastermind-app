import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './HighScorePage.css';
import {formatTime} from '../../services/formatTime';
import scoreAPI from '../../services/scores-api';


class HighScoresPage extends Component {


  async componentDidMount() {
    const scores = await scoreAPI.index();
    this.props.handleUpdateScores(scores);
  }

  render() {
    const scoreRows = this.props.scores.map((score, idx) => (
    <tr key={idx}>
      <td><span className="badge">{idx +1}</span></td>
      <td>{score.initials}</td>
      <td>{score.numGuesses}</td>
      <td>{formatTime(score.seconds)}</td>
    </tr>
  ));

    return (
      <div className='high-score'>
        <header className='header-footer'>High Scores</header>
        {this.props.scores.length ?
          <table className="table text-info">
            <thead>
            <tr><th width={80}>#</th><th width={100}>Initials</th><th width={100}>Guesses</th><th>Seconds</th></tr>
            </thead>
            <tbody>
              {scoreRows}
            </tbody>
          </table>
          :
          <h4>No High Scores Yet</h4>
      }
        <div>
          <Link className='btn btn-default' to='/'>Back To Game</Link>
        </div>
      </div>
    );
  };



}

export default HighScoresPage;