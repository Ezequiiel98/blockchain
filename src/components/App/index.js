import React from 'react';

import { Provider as ProviderLogin } from '../../contexts/ContextLogin/ContextLogin';
import Footer from '../Footer';

import Main from './components/Main';

class App extends React.Component {
  state = {
    // eslint-disable-next-line react/no-unused-state
    successLogin: false,
    // eslint-disable-next-line react/no-unused-state
    setData: ({ successLogin }) => this.setState({ successLogin })
  };

  render() {
    return (
      <>
        <ProviderLogin value={this.state}>
          <Main />
        </ProviderLogin>
        <Footer />
      </>
    );
  }
}

export default App;
