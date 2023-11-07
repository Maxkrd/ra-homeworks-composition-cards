import './App.css'
import { Cards } from './components/Cards';
const data = [
  {
    id: 1,
    header: 'Card title',
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content',
    button: 'Go somewhere'
  },
  {
    id: 2,
    header: 'Special title treatment',
    text: 'With supporting text below as a natural lead-in to additional content',
    button: 'Go somewhere'
  }
];

function App() {
  
  return (
    <div className="app">
      <Cards cardsContent={data} />
    </div>
  )
}

export default App
