import React from 'react';
import PageTitle from './components/PageTitle';
import ClockContainer from './components/ClockContainer';

class App extends React.Component {

  state = {
    totalTime: 18000,
    breathTime: 7000,
    holdTime: 4000,
    text: '',
    grow: ''
  }

  componentDidMount = () => {
    this.breathAnimation()
    setInterval(this.breathAnimation, 18000)
  }
  

  breathAnimation = () => {
    console.log('ran')
    const { breathTime, holdTime } = this.state;
    this.breathIn()

    setTimeout(() => {
      this.holdBreath()
      setTimeout(this.breathOut, holdTime)
    }, breathTime)
  }


  breathOut = () => {
    this.setState({
      text: 'Breath Out',
      grow: 'shrink'
    })
  }

  breathIn = () => {
    this.setState({
      text: 'Breath In',
      grow: 'grow'
    })
  }

  holdBreath = () => {
    this.setState({
      text: 'Hold'
    })
  }


  render() {
    const {totalTime, breathTime, holdTime, text, grow} = this.state;
    return (
      <div className="App">
        <PageTitle />
        <ClockContainer message={text} grow={grow}/>
      </div>
    );
  }
}



export default App;
