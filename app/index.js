import React from 'react'
import ReactDOM from 'react-dom'
import { Container } from 'reactstrap'

class App extends React.Component {
  render() {
    return (
      <Container>
        Hacker News
      </Container>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)