import React, { useState } from "react";
import { v4 as randomId } from "uuid";
import {
  Container,
  MainList,
  Input,
  Button,
  ListItems,
  Check,
  Trash,
} from "./styles.js";

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  function inputChanged(event) {
    setTask(event.target.value);
  }

  function added() {
    if (task) {
      setList([...list, { id: randomId(), task, finished: false }]);
      setTask("");
    }
  }

  function endTask(id) {
    const newList = list.map((item) =>
      item.id === id ? { ...item, finished: !item.finished } : item
    );
    setList(newList);
  }

  function deleteTask(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <MainList>
        <Input value={task} onChange={inputChanged} placeholder="THINGS TO DO" />
        <Button onClick={added}>ADD</Button>
        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItems isFinished={item.finished} key={item.id}>
                <Check onClick={() => endTask(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deleteTask(item.id)} />
              </ListItems>
            ))
          ) : (
            <h3>NO ITEMS</h3>
          )}
        </ul>
      </MainList>
    </Container>
  );
}

export default App;