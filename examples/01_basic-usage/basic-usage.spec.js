import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from '@testing-library/react';

import Component from './Component';

describe('async-hook', () => {
  let wrapper;

  const clickButton = () => fireEvent.click(wrapper.getByTestId('button'));
  const waitForResult = async () => await waitForElement(() => wrapper.getByText(/Result/));
  const contentText = () => wrapper.getByTestId('content').textContent;
  
  it('works', async () => {
    wrapper = render(<Component />);
    
    clickButton();
    expect(contentText()).toBe('Waiting');

    await waitForResult();
    expect(contentText()).toBe('Result: 1');
  });

  afterEach(cleanup);
});