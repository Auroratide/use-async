import React from 'react';
import useAsync from '../..';

export default () => {
  const asyncOperation = async () => 1;
  const { result, waiting, call } = useAsync(asyncOperation);

  return <>
    <button data-testid="button" onClick={call}>Make call</button>
    <div data-testid="content">
      {waiting && 'Waiting'}
      {result && `Result: ${result}`}
    </div>
  </>;
};