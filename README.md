# use-async

**use-async** is just another React hook for handling asynchronous operations in a stateful way! It automatically juggles three potential states an operation can be in (_waiting, done, and error_), providing these as variables which your component can conditionally render upon.

```jsx
import useAsync from '@auroratide/use-async';
import api from './api';

const PostListPage = () => {
  const { result, waiting, error, call } = useAsync(api.get);

  return <>
    <button onClick={call}>Get Data</button>
    {waiting && <Loading />}
    {error && <ErrorPage error={error} />}
    {result && <PostList posts={result} />}
  </>;
}
```

## How to use

To see how to use this library, check out the `examples` folder for sample usages! The goal is to _actually_ use tests as documentation by reframing the paradigm into thinking of our tests as "example usages". This means you can learn how to use the library directly from the code, and this means less written documentation that's prone to becoming out-of-date.
