import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './searchItem';
import Footer from './Footer';
import Content2 from './Content2';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('Task List'))
  );

  const [addItems, setAddItems] = useState('');
  const [search, setSearch] = useState('');

  const setandSaveItems = (newItems) =>{
    setItems(newItems);
    localStorage.setItem('Task List', JSON.stringify(newItems));
  }

  const newItem = (itemName) =>{
    const id = items.length ? items[items.length-1].id + 1 : 1;
    const myaddItem = {id, checked: false, itemName};
    const listItems = [...items, myaddItem];
    setandSaveItems(listItems);
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setandSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setandSaveItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!addItems) return;
    newItem(addItems);
    setAddItems('');

  }
  
  return (
    <div className="App">
      <Header title ="To-Do List" ></Header>
      <SearchItem
      search={search}
      setSearch={setSearch}>
        
      </SearchItem>
      <AddItem
      addItems={addItems}
      setAddItems={setAddItems}
      handleSubmit={handleSubmit}
      ></AddItem>
       
      <Content2
        items={items.filter(item => ((item.itemName).toLowerCase()).includes(search.toLowerCase()) )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      ></Content2>
        
    
    
    <Footer
      length = {items.length}
    ></Footer>
    </div>
  );
}

export default App;
