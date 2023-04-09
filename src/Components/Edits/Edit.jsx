/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect } from 'react';
import MyContext from '../Context/context';
import EditCss from './Edit.module.css';

function Create() {
  const {
    isOpen,
    setIsOpen,
    list,
    updateList,
    title,
    setTitle,
    caption,
    setCaption,
    ingredients,
    setEdit,
    setIngredients,
    procedure,
    setProcedure,
  } = useContext(MyContext);
  //   const addList = (event) => {};

  const closeEdit = (e) => {
    setEdit(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const listItems = {
      title,
      caption,
      ingredients,
      procedure,
    };

    updateList([...list, listItems]);
    setTitle('');
    setIngredients('');
    setCaption('');
    setProcedure('');
  };

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <div className={EditCss.create_main}>
      <button type="button" className={EditCss.delete} onClick={closeEdit}>
        X
      </button>
      <form action="" onSubmit={(e) => e.preventDefault}>
        <h1 className={EditCss.create_h1}>Edit Your Recipe</h1>
        <div>
          <input type="file" id="picture" name="image" />
          <label htmlFor="title">Choose File:</label>
          <label htmlFor="title">Food Name:</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Please input Tittle"
            className={EditCss.title}
          />
          <label htmlFor="caption">Caption:</label>
          <input
            type="text"
            id="caption"
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
            name="caption"
            placeholder="Please type a short caption"
            className={EditCss.caption}
          />
          <label htmlFor="ingredients">Ingredients:</label>
          <input
            type="text"
            onChange={(e) => setIngredients(e.target.value)}
            value={ingredients}
            id="ingredients"
            name="ingredients"
            placeholder="List your ingredients"
            className={EditCss.ingredients}
          />
          <label htmlFor="procedure">Procedure:</label>
          <input
            name="procedure"
            id="procedure"
            onChange={(e) => setProcedure(e.target.value)}
            value={procedure}
            placeholder="Describe your procedure"
            className={EditCss.procedure}
          />
          <div className={EditCss.create_sec}>
            <button
              type="submit"
              onClick={handleSubmit}
              className={EditCss.create}
            >
              Save Edits
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Create;
