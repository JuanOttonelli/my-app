import React, { Fragment } from 'react'
import './style.css';
import Nav from './components/Nav.jsx';
import Intera from './components/Intera.jsx';
import Desa from './components/Desa.jsx';



const cliqui = (aspect) => {
  alert(aspect);
}

function App() {

  return (
    <Fragment>

      <Intera></Intera>
      <Nav></Nav>
      <div className='myFakeCanvas'>
        
      </div>
      <Desa ></Desa>
      <div className='myFakeCanvas'></div>
        <Desa ></Desa>
      <div className='myFakeCanvas'>

      </div>
      <Desa></Desa>





    </Fragment>

  );
}

export default App;