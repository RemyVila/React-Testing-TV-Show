import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import fetchShow from './api/fetchShow';

test('App renders correctly', () => {
    render(<App />);
});
