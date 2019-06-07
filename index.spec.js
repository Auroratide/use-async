import React from 'react';
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from '@testing-library/react';
import useAsync from '.';

describe('async-hook', () => {
  const asyncOperation = async () => 1;

  const Component = () => {
    const { result, waiting, call } = useAsync(asyncOperation);

    return <div>
      <button onClick={call}>Make call</button>
      <div className="result">
        {waiting && 'Not Complete'}
        {result && `Result: ${result}`}
      </div>
    </div>;
  };

  afterEach(cleanup);

  it('works', async () => {
    const { getByText } = render(<Component />);
    
    fireEvent.click(getByText(/Make call/));
    expect(getByText(/Not Complete/).textContent).not.toBe(undefined);
    const result = await waitForElement(() => getByText(/Result/));

    expect(result.textContent).toBe('Result: 1');
  });
});