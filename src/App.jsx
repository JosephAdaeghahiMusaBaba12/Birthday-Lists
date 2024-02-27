import { useState } from 'react'
import List from "./List"
import data from './data'


function App() {
  const [people, setPeople] = useState(data)

  return(
    <main>
      <section className="container">
        <h3 className="title">{people.length} birthdays today</h3>
        <List people={people}/>
        <button type="button" className="btn" onClick={()=> setPeople([])}>clear</button>
      </section>
    </main>
  )
}

export default App
