/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useState } from 'react';
// import { useForm } from 'react-hook-form';
import './App.css';
import MyContext from './Components/Context/context';
import Landing from './Pages/Landing Page/Landing';

function App() {
  const getDataFromLs = () => {
    const data = localStorage.getItem('list');
    if (data) {
      return JSON.parse(data);
    }
    return [];
  };
  const [list, updateList] = useState(getDataFromLs());
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [title, setTitle] = useState('');
  // const [register] = useForm();
  const [caption, setCaption] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [procedure, setProcedure] = useState('');

  return (
    <MyContext.Provider
      value={{
        sideBar,
        // register,
        edit,
        setEdit,
        title,
        setTitle,
        caption,
        setCaption,
        ingredients,
        setIngredients,
        procedure,
        setProcedure,
        setSideBar,
        list,
        updateList,
        isOpen,
        setIsOpen,
      }}
    >
      <Landing />
    </MyContext.Provider>
  );
}

export default App;
