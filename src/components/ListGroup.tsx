function ListGroup() {
  let items = [
    'New York',
    'Paris',
    'Tokyo',
    'London',
    'Paris'
  ]

return (
  <>
    <h1>Header</h1>
    <ul className="list-group">
      {items.map((item, id) => (
        <li 
          key={id} 
          className={"list-group-item"}
        >
          {item}
        </li>
      ))}
    </ul>
  </>
);
}

export default ListGroup;