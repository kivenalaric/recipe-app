/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect } from 'react';
import MyContext from '../Context/context';
import EditCss from './Edit.module.css';

function Create() {
  const { list, updateList, edit, setEdit } = useContext(MyContext);
  //   const addList = (event) => {};

  const closeEdit = () => {
    setEdit((prev) => ({ ...prev, show: false }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { log, clear } = console;
    clear();
    log(e.target);
    const { image, title, caption, ingredients, procedure } = e.target;
    let url = '';
    if (image.value) url = URL.createObjectURL(image.files[0]);

    const listItems = {
      id: edit.data.id,
      src: url || edit.data.src || '../',
      showRecipe: false,
      caption: caption.value,
      ingredients: ingredients.value,
      procedure: procedure.value,
      title: title.value,
      favorite: edit.data.favorite,
    };

    updateList((prev) => {
      const holder = prev.map((item) => {
        if (item.id === listItems.id) return listItems;
        return item;
      });
      return holder;
    });
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <div className={EditCss.create_main}>
      <button type="button" className={EditCss.delete} onClick={closeEdit}>
        X
      </button>
      <form action="" onSubmit={handleSubmit}>
        <h1 className={EditCss.create_h1}>Edit Your Recipe</h1>
        <div>
          <input type="file" id="picture" name="image" />
          <label htmlFor="title">Choose File:</label>
          <label htmlFor="title">Food Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Please input Tittle"
            defaultValue={edit.data.title}
            className={EditCss.title}
          />
          <label htmlFor="caption">Caption:</label>
          <input
            type="text"
            id="caption"
            name="caption"
            placeholder="Please type a short caption"
            defaultValue={edit.data.caption}
            className={EditCss.caption}
          />
          <label htmlFor="ingredients">Ingredients:</label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            placeholder="List your ingredients"
            defaultValue={edit.data.ingredients}
            className={EditCss.ingredients}
          />
          <label htmlFor="procedure">Procedure:</label>
          <input
            name="procedure"
            id="procedure"
            placeholder="Describe your procedure"
            defaultValue={edit.data.procedure}
            className={EditCss.procedure}
          />
          <div className={EditCss.create_sec}>
            <button type="submit" className={EditCss.create}>
              Save Edits
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
