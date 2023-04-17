/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
import './App.css';
import MyContext from './Components/Context/context';
import Landing from './Pages/Landing Page/Landing';
import foodData from './data/FoodData.json';

function App() {
  const getDataFromLs = () => {
    const data = JSON.parse(localStorage.getItem('list'));

    if (data) {
      return data;
    }
    return [];
  };

  const [list, updateList] = useState(null);
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem('fav'))
  );
  const [isOpen, setIsOpen] = useState(false);
  const [edit, setEdit] = useState({ data: {}, show: false });
  const [sideBar, setSideBar] = useState(false);

  // const toogleFavorite = () => {
  //   if (passwordType === 'false') {
  //     setPasswordType('text');
  //     return;
  //   }
  //   setPasswordType('password');
  // };

  // const [register] = useForm();

  React.useEffect(() => {
    const res = getDataFromLs();
    const { log } = console;
    log(res);
    const localList = JSON.parse(localStorage.getItem('list'));
    if (!localList || localList?.length <= 0) {
      localStorage.setItem('list', JSON.stringify(foodData));
      updateList(foodData);
    } else updateList(localList);
  }, []);

  return (
    <MyContext.Provider
      value={{
        sideBar,
        // register,
        edit,
        setEdit,
        setSideBar,
        list,
        updateList,
        isOpen,
        setIsOpen,
        favorite,
        setFavorite,
      }}
    >
      <Landing />
    </MyContext.Provider>
  );
}

export default App;
