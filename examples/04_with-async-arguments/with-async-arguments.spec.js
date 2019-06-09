import React, { useState } from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from '@testing-library/react';

import Component from './Component';

describe('With Async Arguments', () => {
  let wrapper;

  const changeTo2 = () => fireEvent.click(wrapper.getByTestId('make-2'));
  const waitForResult = async () => {
    await waitForElement(() => wrapper.getByText(/Waiting/));
    await waitForElement(() => wrapper.getByText(/Result/));
  };
  const contentText = () => wrapper.getByTestId('content').textContent;

  const WrappingComponent = () => {
    const [ n , setN ] = useState(1);

    return <>
      <button data-testid="make-2" onClick={() => setN(2)}>Make 2</button>
      <Component n={n} />
    </>;
  };
  
  it('works', async () => {
    wrapper = render(<WrappingComponent />);
    await waitForResult();
    expect(contentText()).toBe('Result: 1');
    
    changeTo2();
    await waitForResult();
    expect(contentText()).toBe('Result: 2');
  });

  afterEach(cleanup);
});