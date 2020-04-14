import React from 'react';

import { Provider as ProviderLogin } from '../../contexts/ContextLogin/ContextLogin';

import Main from './components/Main';

class App extends React.Component {
  state = {
    successLogin: false,
    setData: ({ successLogin }) => this.setState({ successLogin })
  };

  render() {
    return (
      <ProviderLogin value={this.state}>
        <Main />
      </ProviderLogin>
    );
  }
}

export default App;
