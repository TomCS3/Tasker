import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App
