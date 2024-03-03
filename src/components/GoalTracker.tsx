import React from 'react';

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
            {goal.title} - ${goal.amount} by {goal.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalTracker;
