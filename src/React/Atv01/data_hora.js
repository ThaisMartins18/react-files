import React from 'react';
import { Link } from 'react-router-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>Relógio</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <Link to="http://localhost:3000/"  className="btn btn-primary">Retornar a página inicial</Link>
      </div>
    );
  }
}

export default Clock;