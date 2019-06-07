const { useState } = require('react');

module.exports = fn => {
  const [ result, setResult ] = useState();
  const [ error, setError ] = useState();
  const [ waiting, setWaiting ] = useState(false);

  const call = async () => {
    setWaiting(true);
    setResult(await fn().catch(err => setError(err)));
    setWaiting(false);
  };

  return {
    result,
    waiting,
    error,
    call
  };
}