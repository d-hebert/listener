import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  // testing begin
  window.login = login
  window.logout = logout
  window.signup = signup
  // testing end
  const root = document.getElementById('root');
  ReactDOM.render(<h2>hello from 'frontend/listener.jsx'</h2>, root)
});