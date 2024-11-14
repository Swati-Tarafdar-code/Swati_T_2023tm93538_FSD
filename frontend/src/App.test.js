import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


import React from 'react'

import Login from './login'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Signup from './signup'

import Home from './home'



