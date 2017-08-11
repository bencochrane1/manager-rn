import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {

  componentWillMount() {

    const config = {
      apiKey: "AIzaSyCUcN1SmGDpadZyXHaBOyE6DqeDvE4hov8",
      authDomain: "manager-f1e7a.firebaseapp.com",
      databaseURL: "https://manager-f1e7a.firebaseio.com",
      projectId: "manager-f1e7a",
      storageBucket: "manager-f1e7a.appspot.com",
      messagingSenderId: "772936065923"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    );
  }
}