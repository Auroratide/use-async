import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from '@testing-library/react';

import Component from './Component';

describe('Basic Usage', () => {
  let wrapper;

  const clickButton = () => fireEvent.click(wrapper.getByTestId('button'));
  const waitForResult = async () => await waitForElement(() => wrapper.getByText(/Result/));
  const contentText = () => wrapper.getByTestId('content').textContent;
  
  it('should show the result when the operation resolves', async () => {
    wrapper = render(<Component />);
    
    clickButton();
    expect(contentText()).toBe('Waiting');

    await waitForResult();
    expect(contentText()).toBe('Result: 1');
  });

  afterEach(cleanup);
});