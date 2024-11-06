import React from 'react';

const RemoteDetail = React.lazy(() => import('remote1/App'));
const RemoteCatalog = React.lazy(() => import('remote2/App'));

const App = () => (
  <div>
    <h1>Host Application</h1>
    <React.Suspense fallback="Loading Button...">
      <RemoteDetail />
    </React.Suspense>
    <React.Suspense fallback="Loading Header...">
      <RemoteCatalog />
    </React.Suspense>
  </div>
);

export default App;