import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from '@testing-library/react';

import Component from './Component';

describe('Error Handling', () => {
  let wrapper;

  const clickButton = () => fireEvent.click(wrapper.getByTestId('button'));
  const waitForError = async () => await waitForElement(() => wrapper.getByText(/Error/));
  const contentText = () => wrapper.getByTestId('content').textContent;
  
  it('should show the error when the operation fails', async () => {
    wrapper = render(<Component />);
    
    clickButton();
    expect(contentText()).toBe('Waiting');
    
    await waitForError();
    expect(contentText()).toBe('Error: 1');
  });

  afterEach(cleanup);
});