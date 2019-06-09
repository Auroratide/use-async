const { useState, useEffect } = require('react');

module.exports = (fn) => {
  const [ result, setResult ] = useState();
  const [ error, setError ] = useState();
  const [ waiting, setWaiting ] = useState(false);

  const call = async (...args) => {
    setWaiting(true);
    setResult(await fn(...args).catch(err => setError(err)));
    setWaiting(false);
  };

  return {
    result,
    waiting,
    error,
    call,
    withArgs(...args) {
      this.args = args;
      this.call = () => call(...args);
      return this;
    },
    andCall() {
      useEffect(() => { this.call() }, this.args || []);
      return this;
    }
  };
}