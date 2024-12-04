import './App.css';

function App() {
  const todos = [ "Go to gym", "Buy Milk", "Read Book" ]
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>To-Do</h1>
      
      <form>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Add a new task"
            style={{ flex: 1, padding: '8px' }}
          />
          <button type="submit" style={{ padding: '8px 16px' }}>Add</button>
        </div>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li 
            key={index}
            style={{ 
              padding: '10px',
              borderBottom: '1px solid #eee',
              marginBottom: '5px',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            {todo}
            <button
              style={{ padding: '4px 8px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
