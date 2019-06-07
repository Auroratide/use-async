import React from 'react';
import useAsync from '../..';

export default () => {
  const asyncOperation = async () => { throw 1; };
  const { result, waiting, error, call } = useAsync(asyncOperation);

  return <>
    <button data-testid="button" onClick={call}>Make call</button>
    <div data-testid="content">
      {waiting && 'Waiting'}
      {error && `Error: ${error}`}
      {result && `Result: ${result}`}
    </div>
  </>;
};