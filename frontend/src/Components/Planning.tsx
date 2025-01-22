// src/components/Planning.tsx
import React, { useState } from 'react';

const Planning: React.FC = () => {
  const [appointments, setAppointments] = useState<string[]>([]); // Liste de rendez-vous

  const addAppointment = () => {
    const newAppointment = prompt('Enter appointment details:');
    if (newAppointment) {
      setAppointments([...appointments, newAppointment]);
    }
  };

  const removeAppointment = (index: number) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Planning</h2>
      <button onClick={addAppointment}>Add Appointment</button>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            {appointment} <button onClick={() => removeAppointment(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Planning;
