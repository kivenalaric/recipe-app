/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import MyContext from '../Context/context';
import Edit from '../Edits/Edit';
import CardCss from './Card.module.css';

function Card() {
  const {
    list,
    updateList,
    sideBar,
    setSideBar,
    edit,
    setEdit,
    isOpen,
    setIsOpen,
    setTitle,
    setIngredients,
    setProcedure,
  } = useContext(MyContext);
  const deleteList = (title) => {
    const updatedList = list.filter((element) => {
      return element.title !== title;
    });
    updateList(updatedList);
  };

  const closeSideBar = (e) => {
    setSideBar(!sideBar);
  };
  const showEdit = (e) => {
    setEdit(true);
  };
  const openSideBar = (e) => {
    const food = list.filter((li) => li.e !== e);
    setSideBar(food);
  };
  const handleEdit = (index) => {
    setTitle(list[index]);
    setIngredients(list[index]);
    setProcedure(list[index]);
  };

  return (
    <div className={CardCss.card}>
      {list.length > 0 && (
        <>
          {list.map((data, index) => {
            return (
              <div className={CardCss.card__main} id={index} key={data.title}>
                <div className={CardCss.delete__div}>
                  <button
                    onClick={() => deleteList(data.title)}
                    type="button"
                    className={CardCss.delete}
                  >
                    X
                  </button>
                </div>
                <div className={CardCss.recipe__holder}>
                  <div className={CardCss.card__img}>{data.image}</div>
                  <div className={CardCss.card__text}>
                    <h2 className={CardCss.card__tittle}>{data.title}</h2>
                    <p className={CardCss.card__caption}>{data.caption}</p>
                  </div>
                  <div className={CardCss.card__bottom}>
                    <i className="fa-regular fa-star" />
                    <button
                      type="button"
                      className={CardCss.read__more}
                      onClick={() => openSideBar(data.title)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                {sideBar ? (
                  <div className={CardCss.display} key={data.title}>
                    <div className={CardCss.text__display}>
                      <h2 className={CardCss.card__tittle}>{data.title}</h2>
                      <p className={CardCss.card__ingredients}>
                        {data.ingredients}
                      </p>
                      <p className={CardCss.card__procedure}>
                        {data.procedure}
                      </p>
                    </div>
                    <div className={CardCss.edit_bottom}>
                      <div className={CardCss.edit__btns}>
                        <button
                          type="button"
                          onClick={() => {
                            showEdit(data.title);
                            handleEdit(data.title);
                          }}
                        >
                          Edit
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => closeSideBar(data.title)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                ) : (
                  ''
                )}
                {edit ? (
                  <div>
                    <Edit />
                  </div>
                ) : (
                  ''
                )}
              </div>
            );
          })}
        </>
      )}
      {list.length < 1 && <div>No Recipies Available yet</div>}
    </div>
  );
}

export default Card;
