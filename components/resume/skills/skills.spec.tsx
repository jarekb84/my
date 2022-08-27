import React from 'react';
import { render, screen } from '@testing-library/react';

import Skills from './skills';

describe('Skills', () => {
    it('should return a list of skills', () => {
        const testSkills = ['foo', 'bar'];

        render(<Skills skills={testSkills} />);

        expect(screen.getByText('foo')).toBeTruthy();
        expect(screen.getByText('bar')).toBeTruthy();
    });
});