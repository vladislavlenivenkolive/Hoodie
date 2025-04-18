import React, { useEffect, useState } from 'react';
import { getEntities } from './api';

function App() {
  const [entities, setEntities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEntities()
      .then(data => setEntities(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Hoodie Entities</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {entities.map((entity, idx) => (
            <li key={idx}>{entity.summary}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
