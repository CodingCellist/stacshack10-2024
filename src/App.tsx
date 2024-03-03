import React, { useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalTracker from './components/GoalTracker';

interface Goal {
  title: string;
  amount: number;
  date: string;
}

const App: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const addGoalHandler = (goal: Goal) => {
    setGoals((prevGoals) => [...prevGoals, goal]);
  };

  return (
    <div>
      <GoalForm onAddGoal={addGoalHandler} />
      <GoalTracker goals={goals} />
    </div>
  );
};

export default App;
