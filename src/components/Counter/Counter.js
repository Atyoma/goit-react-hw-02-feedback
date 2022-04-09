// export default function Container({ children }) {
//   return <div className={s.container}>{children}</div>;
// }

import React from 'react';
import s from './container.module.css';
import Controls from './Controls';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  addingGood = () => {
    // event
    // console.log('add Good');
    // const target = e.target;
    // console.log(target);

    // this.setState({ good: this.state.good + 1 }); //обновление от регистрации

    this.setState(prevState => {
      return { good: prevState.good + 1 }; //обновление от текущего значения
    });
  };

  addingNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  addingBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state.good) {
      return Math.round((100 / this.countTotalFeedback()) * this.state.good);
    } else return '0';
  };

  render() {
    return (
      <div className={s.container}>
        <h1>Please leave feedback</h1>
        <Controls
          onGood={this.addingGood}
          onNeutral={this.addingNeutral}
          onBad={this.addingBad}
        />
        <div>
          <h2>Statistics</h2>
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
          <p>Total:{this.countTotalFeedback()}</p>
          <p>
            Positive feedback:
            {this.countPositiveFeedbackPercentage()}%
          </p>
        </div>
      </div>
    );
  }
}
export default Counter;
