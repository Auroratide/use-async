import React from 'react';
import useAsync from '../..';

export default ({ n }) => {
  const asyncOperation = async n => n;
  const { result, waiting } = useAsync(asyncOperation)
    .withArgs(n)
    .andCall();

  return <div data-testid="content">
    {waiting && 'Waiting'}
    {result && `Result: ${result}`}
  </div>;
};