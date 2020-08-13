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
      text: 'Exhale Slowly',
      grow: 'shrink'
    })
  }

  breathIn = () => {
    this.setState({
      text: 'Inhale Slowly',
      grow: 'grow'
    })
  }

  holdBreath = () => {
    this.setState({
      text: 'Hold'
    })
  }


  render() {
    const {text, grow} = this.state;
    return (
      <div className="App">
        <PageTitle />
        <ClockContainer message={text} grow={grow}/>
      </div>
    );
  }
}



export default App;
