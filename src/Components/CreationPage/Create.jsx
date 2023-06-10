/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect } from 'react';
import MyContext from '../Context/context';
import CreateCss from './create.module.css';

function Create() {
  const { isOpen, setIsOpen, list, updateList } = useContext(MyContext);
  //   const addList = (event) => {};

  const closePopUp = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { log, clear } = console;
    clear();
    log(e.target);
    const { image, title, caption, ingredients, procedure } = e.target;
    const url = URL.createObjectURL(image.files[0]);
    const listItems = {
      id: list.pop().id + 1,
      src: url,
      showRecipe: false,
      caption: caption.value,
      ingredients: ingredients.value,
      procedure: procedure.value,
      title: title.value,
      favorite: false,
    };

    const localList = JSON.parse(localStorage.getItem('list'));

    log('this localList and listitem', localList, listItems);

    localStorage.setItem('list', JSON.stringify([...localList, listItems]));

    // updateList([...list, listItems]);
    updateList([...localList, listItems]);
    setIsOpen(false);
  };

  // useEffect(() => {
  //   if (list) localStorage.setItem('list', JSON.stringify(list));
  // }, [list]);

  return (
    <div className={CreateCss.create_main}>
      <button type="button" className={CreateCss.delete} onClick={closePopUp}>
        X
      </button>
      <form action="" onSubmit={handleSubmit}>
        <h1 className={CreateCss.create_h1}>Create Your Recipe</h1>
        <div>
          <input type="file" id="picture" name="image" />
          <label htmlFor="title">Choose File:</label>
          <label htmlFor="title">Food Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Please input Tittle"
            className={CreateCss.title}
          />
          <label htmlFor="caption">Caption:</label>
          <input
            type="text"
            id="caption"
            name="caption"
            placeholder="Please type a short caption"
            className={CreateCss.caption}
          />
          <label htmlFor="ingredients">Ingredients:</label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            placeholder="List your ingredients"
            className={CreateCss.ingredients}
          />
          <label htmlFor="procedure">Procedure:</label>
          <input
            name="procedure"
            id="procedure"
            placeholder="Describe your procedure"
            className={CreateCss.procedure}
          />
          <div className={CreateCss.create_sec}>
            <button type="submit" className={CreateCss.create}>
              Create +
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
