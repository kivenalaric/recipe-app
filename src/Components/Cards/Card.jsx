/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable react/no-unknown-property */
import React, { useContext } from 'react';
import { MdFavorite } from 'react-icons/md';
import MyContext from '../Context/context';
import Edit from '../Edits/Edit';
import CardCss from './Card.module.css';

function Card() {
  const { list, updateList, edit, setEdit, setFavorite } =
    useContext(MyContext);

  const localData = JSON.parse(localStorage.getItem('list'));

  const deleteList = (title) => {
    const updatedList = list.filter((element) => {
      return element.title !== title;
    });
    localStorage.setItem('list', JSON.stringify([...updatedList]));
    console.log(updatedList);
    updateList(updatedList);
  };

  // const toogleFavorite = () => {
  //   setFavorite((prev) => !prev);
  // };

  const chooseWhatoEdit = (id) => {
    const [holder] = list.filter((item) => item.id === id);

    // console.log('chose \n', id, holder);
    setEdit({ data: { ...holder }, show: true });
  };

  const openSideBar = (id) => {
    const holder = list;
    holder.forEach((item, indx) => {
      if (item.id === id) {
        holder[indx].showRecipe = !holder[indx].showRecipe;
      }
    });

    updateList([...holder]);
  };

  const addFavorite = (ID) => {
    localData.forEach((food) => {
      if (food.id === ID) {
        food.favorite = !food.favorite;
      }
    });

    updateList([...localData]);
    const Fav = localData.filter(({ favorite }) => favorite === true);

    localStorage.setItem('list', JSON.stringify(localData));
    localStorage.setItem('fav', JSON.stringify(Fav));

    setFavorite(Fav);
  };

  return (
    <div className={CardCss.card}>
      {list?.length > 0 && (
        <>
          {list.map((data, index) => {
            return (
              <div className={CardCss.card__main} id={index} key={data.title}>
                <button
                  onClick={() => deleteList(data.title)}
                  type="button"
                  className={CardCss.delete}
                >
                  X
                </button>
                <div className={CardCss.recipe__holder}>
                  <div className={CardCss.card__img}>
                    <img src={data.src} alt={data.title} />
                  </div>
                  <div className={CardCss.card__text}>
                    <h2 className={CardCss.card__tittle}>{data.title}</h2>
                    <p className={CardCss.card__caption}>{data.caption}</p>
                  </div>
                  <div className={CardCss.card__bottom}>
                    {/* <i className="fa-regular fa-star" /> */}
                    <button
                      type="button"
                      name={data.id}
                      onClick={() => {
                        addFavorite(data.id);
                      }}
                      className={CardCss.togglef}
                    >
                      <MdFavorite
                        name={data.id}
                        style={{ color: data.favorite ? '#f43d3d' : '#a2a2a2' }}
                        className={CardCss.unfav}
                      />
                    </button>
                    <button
                      type="button"
                      className={CardCss.read__more}
                      onClick={() => openSideBar(data.id)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
                {data.showRecipe && (
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
                      <button
                        type="button"
                        onClick={() => {
                          chooseWhatoEdit(data.id);
                          openSideBar(data.id);
                        }}
                        className={CardCss.edit_btn}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => openSideBar(data.id)}
                        className={CardCss.edit_close}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {edit.show && (
            <div>
              <Edit />
            </div>
          )}
        </>
      )}
      {list?.length < 1 && <div>No Recipies Available yet</div>}
    </div>
  );
}

export default Card;
