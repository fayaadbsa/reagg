import React  from "react";
import { connect } from 'react-redux';


function ReduxPage(props) {
  
  function handleClick() {
    props.incrementCounter(1)
  }

  

  return (
    <>
      <h1>Redux Page</h1>
      <h3>Counter: {props.count}</h3>
      <button onClick={handleClick}>ADD</button>
    </>
  )
}

  // Action - Set State
  const mapDispatchToProps = {
    incrementCounter
  }

  function incrementCounter(num) {
    return {
      type: 'INCREMENT',
      num: num
    }
  }

  // Get - Get State
  function mapStateToProps(state) {
    return {
      count: state.count
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ReduxPage);
