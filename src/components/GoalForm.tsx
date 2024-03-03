import React, { useState } from 'react';

interface GoalFormProps {
  onAddGoal: (
    goal:{
      title: string;
      amount: number;
      date: string
    }
    ) => void;
}

const GoalForm: React.FC<GoalFormProps> = ({ onAddGoal }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onAddGoal({
      title,
      amount: Number(amount),
      date,
    });

    // Clear the form
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title" className="label">Goal</label>
        <input id="title"
               type="text"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount Needed (£)</label>
        <input id="amount"
               type="number"
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Target Date</label>
        <input id="date"
               type="date"
               value={date}
               onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default GoalForm;
