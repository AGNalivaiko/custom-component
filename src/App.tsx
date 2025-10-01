import { Buttons, TextField, Selects, Checkbox, Switcher, Modal } from "./Components/imports";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Buttons>Hello</Buttons>
      <Buttons variant="text">Hello</Buttons>
      <Buttons variant="outlined" onClick={() => setIsOpen(true)}>
        Open Modal
      </Buttons>
      <br /> <br />
      <TextField variant="filled" size="small" label="something" /> <br /> <br />
      <Selects
        helperText="select yout pet"
        variant="outlined"
        options={[
          { value: "dog", label: "dog" },
          { value: "cat", label: "cat" },
          { value: "fishes", label: "fishes" },
        ]}
      ></Selects>
      <br /> <br />
      <Checkbox /> <Checkbox variant="text" /> <Checkbox variant="contained" /> <br /> <br />
      <Switcher />
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Пример модального окна</h2>
        <p>Тут могла быть ваша реклама</p>
      </Modal>
    </>
  );
}

export default App;
