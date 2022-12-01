import React from 'react';
import Container from './Container';
import { GithubUser } from './GithubUser';
import { GithubUserList } from './GithubUserList';


export class App extends React.Component {
  render() {
    return (
      <div>
        <Container title={<h1>My App</h1>}>
          <GithubUser username="philip-morris-89" />
          <GithubUserList />
        </Container>
      </div>
    )
  }
}