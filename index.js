const { useState } = require('react');

module.exports = fn => {
  const [ result, setResult ] = useState();
  const [ waiting, setWaiting ] = useState(false);

  const call = async () => {
    setWaiting(true);
    setResult(await fn());
    setWaiting(false);
  };

  return {
    result,
    waiting,
    call
  }
}