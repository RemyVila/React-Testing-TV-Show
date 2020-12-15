import React from 'react';
import { render, screen } from "@testing-library/react";
import Episodes from './Episodes';
import userEvent from '@testing-library/user-event';

test('Episodes component renders correctly', () => {
    render(<Episodes episodes={[{
        id: 1,
        season: 1,
        number: 3,
        summary: '<p> Ayo </p>'
    }]} />);

    const epInfo = screen.getByText(/season 1, episode 3/i);
    expect(epInfo).toBeInTheDocument();
});