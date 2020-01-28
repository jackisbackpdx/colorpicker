import React from 'react';
import './App.css';
import './index.css';

class SquaresWithValues extends React.Component {
  render() {
    return (
        <button 
        className={this.props.value}
        onClick={this.props.onClick}>
        {this.props.value}
        </button>
      );
  }      
}

class ChangedColor extends React.Component {
  render() {
    return (
      <div className={this.props.value + '-changed'}>

      </div>
    )
  }
}

class MakeSquares extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colors: [ 'blue', 'yellow', 'red', 'red' ] }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    e.preventDefault();
          let color = this.state.colors.slice();
          color[3] = e.target.className;
          this.setState({colors: color})
  }

  renderColor(i) {
    return <ChangedColor value={this.state.colors[i]}/>
  }
  
  renderButton(i) {
    return <SquaresWithValues value={this.state.colors[i]}
            onClick={(e) => this.handleClick(e)}/>;          
  }

  render() {
    return (
      <div id='outside'>
      <h1>REACT COLOR PICKER</h1>
      <div className='choices'>
        {this.renderButton(0)}
        {this.renderButton(1)}
        {this.renderButton(2)}
      </div>
      <div id='changed'>
        {this.renderColor(3)}
      </div>
      </div>
    );
  }
}

export default MakeSquares;