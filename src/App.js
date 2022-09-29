import './App.css';
import Exercise from './Components/Exercise/Exercise';
import Name from './Components/Name/Name';
import Question from './Components/Question/question';

function App() {
  return (
    <div className="App container">
      <Name></Name>
      <Exercise></Exercise>
      <Question></Question>
    </div>
  );
}

export default App;
