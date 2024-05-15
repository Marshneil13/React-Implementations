import logo from './logo.svg';
import './App.css';
import Buttoncounter from './components/counter/Buttoncounter';
import Pagination from './components/Pagination';
import CounterDisplay from './components/counter-hook/CounterDisplay';
import PureComponentDisplay from './components/pure-component/PureComponentDisplay';
import HOComponent from './components/hoc/HOComponent';
import InputComponent from './components/hoc/InputName';
import InputName from './components/hoc/InputName';
import InputAddress from './components/hoc/InputAddress';

function App() {

  //Enhanced component HOC example

  return (
    <div className="App">
      {/* <PureComponentDisplay/> */}
      {/* <Buttoncounter/>
      <Pagination/>
      <CounterDisplay/> */}
      {/* HOC EXAMPLE BELOW */}
      <InputName/>
      <InputAddress/>
    </div>
  );
}

export default App;
