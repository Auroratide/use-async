import React from 'react';
import {
  render,
  waitForElement,
  cleanup
} from '@testing-library/react';

import Component from './Component';

describe('Call on Mount', () => {
  let wrapper;

  const waitForResult = async () => await waitForElement(() => wrapper.getByText(/Result/));
  const contentText = () => wrapper.getByTestId('content').textContent;
  
  it('should automatically call the operation when the component mounts', async () => {
    wrapper = render(<Component />);
    expect(contentText()).toBe('Waiting');

    await waitForResult();
    expect(contentText()).toBe('Result: 1');
  });

  afterEach(cleanup);
});