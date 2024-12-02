import React from 'react';

function Cards({ item }) {
  // console.log(item);
  return (
    <div>
      <div className="mt-4 p-2">
        <div className="card bg-base-100 w-72 shadow-xl hover:scale-100 duration-300 dark:bg-slate-900 dark:text-white dark:border light:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.tittle}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                Products
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
