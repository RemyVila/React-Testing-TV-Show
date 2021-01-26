import React from 'react';
import { render, screen, wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow');

test('App renders', () => {
    render(<App />);
});

test('fetches async api call', async () => {
    render(<App />);

    const selectASeason = await screen.findByPlaceholderText(/select an option/i);
    userEvent.click(selectASeason);
    

    mockFetchShow.mockResolvedValueOnce({
        episodes: [
            {
            summary: 'hello',
            name: "Yo",
            season: 1,
            image: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg"
            }
        ]
    });
});