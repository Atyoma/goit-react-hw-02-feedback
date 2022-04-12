import {Component} from 'react';
import Section from './Section';
import FeedbackOptions from "./FeedbackOptions";
import Statistics from './Statistics';
import Notification from './Notification';
import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  countTotalFeedback = () => {
      return Object.values(this.state).reduce((total, el) => total + el, 0); 
  }
  countPositiveFeedbackPercentage = () => (Math.round(this.state.good / this.countTotalFeedback() * 100));

  onFeedbackHandle = (evt) => {
    const stateName = evt.currentTarget.name;
    this.setState(prev => ({ [stateName]: prev[stateName] + 1 }));
  }
  reviews = () => Object.keys(this.state);
  
  render() {
    const {good, neutral, bad} = this.state
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.reviews()} onLeaveFeedback={this.onFeedbackHandle}/>
        </Section>
        
        <Section title="Statistics">
          {this.countTotalFeedback() ?
            <Statistics good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage} /> :
              <Notification message="There is no feedback"/> }
        </Section>
      </div>
    );
  }
};
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func
}
Section.propType = {
  title: PropTypes.string,
  children: PropTypes.node
}
Statistics.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  total: PropTypes.func,
  positivePercentage: PropTypes.func
}
Notification.propTypes = {
  message: PropTypes.string
}








