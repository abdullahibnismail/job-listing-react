import {useState} from 'react'


import TagBar from "./components/tagBar/TagBar";
import Card from "./components/jobCard/Card";


function App() {
  const [propsdata, setpropsdata] = useState([])
  const [deepfilter, setDeepFilter] = useState([])
  const [againfilter, setAgainFilter] = useState([])
  return (
    <div className="App font-league">
      <div className="header bg-headerMob md:bg-header"></div>
      {/* <div className="bg-background absolute top-[156px] h-full w-full"> */}
      <div className="bg-background w-full absolute ">
        {propsdata.length===0?null:<TagBar stateData={propsdata} setpropsdata={setpropsdata} setDeepFilter={setDeepFilter} deepfilter={deepfilter} againfilter={againfilter} setAgainFilter={setAgainFilter}/>}
        
        <Card addData={setpropsdata} stateData={propsdata} setDeepFilter={setDeepFilter} deepfilter={deepfilter} againfilter={againfilter} setAgainFilter={setAgainFilter} />
      </div>
    </div>
  );
}

export default App;
