import "./App.css";

// button-group
const buttons = [
  {
    type: "all",
    label: "All",
  },
  {
    type: "active",
    label: "Active",
  },
  {
    type: "done",
    label: "Done",
  },
];

const items = [
  {
    key: 1,
    label: "Have fun",
  },
  {
    key: 2,
    label: "Spread Empathy",
  },
  {
    key: 3,
    label: "Generate Value",
  },
];

function App() {
  return (
    <div className="todo-app">
      {/* App-header */}
      <div className="app-header d-flex">
        <h1>Todo List</h1>
        <h2>5 more to do, 2 done</h2>
      </div>

      <div className="top-panel d-flex">
        {/* Search-panel */}
        <input
          type="text"
          className="form-control search-input"
          placeholder="type to search"
        />
        {/* Item-status-filter */}
        <div className="btn-group">
          <button type="button" className="btn  btn-info">
            All
          </button>
          <button type="button" className="btn btn-outline-info">
            Active
          </button>
          <button type="button" className="btn btn-outline-info">
            Done
          </button>
        </div>
      </div>

      {/* List-group */}
      <ul className="list-group todo-list">
        <li className="list-group-item">
          <span className="todo-list-item">
            <span className="todo-list-item-label">Have Fun</span>

            <button
              type="button"
              className="btn btn-outline-success btn-sm float-right"
            >
              <i className="fa fa-exclamation" />
            </button>

            <button
              type="button"
              className="btn btn-outline-danger btn-sm float-right"
            >
              <i className="fa fa-trash-o" />
            </button>
          </span>
        </li>
        <li className="list-group-item">
          <span className="todo-list-item done">
            <span className="todo-list-item-label">Spread Empathy</span>

            <button
              type="button"
              className="btn btn-outline-success btn-sm float-right"
            >
              <i className="fa fa-exclamation" />
            </button>

            <button
              type="button"
              className="btn btn-outline-danger btn-sm float-right"
            >
              <i className="fa fa-trash-o" />
            </button>
          </span>
        </li>
      </ul>

      <div className="item-add-form d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="What needs to be done"
        />
        <button className="btn btn-outline-secondary">Add item</button>
      </div>
    </div>
  );
}

export default App;
