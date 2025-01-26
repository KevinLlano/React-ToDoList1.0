import React, { useState } from 'react';

interface ReminderProps {
  taskIndex: number;
  reminder: string;
  setReminder: (taskIndex: number, newReminder: string) => void;
}

const Reminder: React.FC<ReminderProps> = ({ taskIndex, reminder, setReminder }) => {
  const [newReminder, setNewReminder] = useState(reminder);

  const handleReminderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewReminder(e.target.value);
  };

  const handleSaveReminder = () => {
    setReminder(taskIndex, newReminder);
  };

  return (
    <div className="reminder-container">
      <input 
        type="text" 
        value={newReminder} 
        onChange={handleReminderChange} 
        placeholder="Set reminder"
      />
      <button onClick={handleSaveReminder}>Save Reminder</button>
    </div>
  );
};

export default Reminder;
