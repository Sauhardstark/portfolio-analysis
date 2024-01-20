import './App.css';
import { useState, useEffect } from "react";
import MyChart from './MyChart';

function App() {
  const [searchval, setSearchval] = useState();
  const [searchResult, setSearchResult] = useState();
  const [display, setDisplay] = useState();

  const setText = (input) => {
    console.log("Current Input received: "+input)
    setSearchval(input)
    handleSubmit(input)
  }

  const handleSubmit = (input) => {
    console.log("Search: "+input)
    fetch(`https://api.mfapi.in/mf/search?q=${input}`)
      .then((response) => response.json())
      .then((data) =>  {
        console.log("API resp data: "+data)
        setSearchResult(data)        
      })
    
  };
  useEffect(() => {
    console.log("SearchResults "+searchResult)
    const displayDivs = () => {
      if (searchResult === undefined) return
      console.log(searchResult);
      const jobList = searchResult.map(j =>
        <div>
          <div>{j.schemeName}</div>
        </div>
      )
      return (
        <div>{jobList}</div>
      );
    }
    setDisplay(displayDivs())
  }, [searchResult]);

  

  return (
    <div className="App">
      <header className="App-header">
        Search Mutual Funds 
        
        <br></br>
        <input 
          type="text"
          id="mfsearch"
          class="actions"
          onChange={(event) => setText(event.target.value)}
        ></input>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <div>{display}</div>
        <div>
          <MyChart/>
        </div>
        
      </header>
    </div>
  );
}

export default App;
