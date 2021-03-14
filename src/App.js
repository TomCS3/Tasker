import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Grocery Shopping',
        day: 'March 15th at 9:00am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Dentist Appointment',
        day: 'March 15th at 1:00pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Swimming Club',
        day: 'March 17th at 7:00pm',
        reminder: false,
    },
  ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ?
      { ...task, reminder: !task.reminder } : task
    ))
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}
        />
        ) : (
          'No Tasks'
        )}

    </div>
  )
}

export default App
