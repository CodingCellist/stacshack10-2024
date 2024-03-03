import React from 'react';
import coinSprite from '../assets/media/pound-coin.png';
import chestClosed from '../assets/media/chest-closed.png'

interface Goal {
  title: string;
  amount: number;
  date: string;
}

interface GoalTrackerProps {
  goals: Goal[];
}

const GoalTracker: React.FC<GoalTrackerProps> = ({ goals }) => {
  // generate a list item for each goal
  return (
    <div>
      <h2>Your Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index} className="goal-item">
            <img src={chestClosed} alt="8-bit-style closed treasure chest" className="tiny-icon"/>
            {goal.title} -
            <img src={coinSprite} alt="8-bit-style GBP coin" className="tiny-icon" />
            {goal.amount} by {goal.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalTracker;
