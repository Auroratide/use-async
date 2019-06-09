import React from 'react';
import useAsync from '../..';

export default () => {
  const asyncOperation = async () => 1;
  const { result, waiting } = useAsync(asyncOperation).andCall();

  return <div data-testid="content">
    {waiting && 'Waiting'}
    {result && `Result: ${result}`}
  </div>;
};