import React, { useState } from "react";

const Tour = ({
  id,
  image,
  price,
  info,
  name,
  removeTour,
}) => {
  const [isReadMore, setIsReadMore] = useState(
    false
  );
  return (
    <>
      <article className='card'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <div className='tour-price'>
              <h4>{price}</h4>
            </div>
          </div>
          <p>
            {isReadMore
              ? info
              : `${info.substring(0, 200)}...`}
            <button
              className='read-more'
              onClick={() =>
                setIsReadMore(!isReadMore)
              }
            >
              {isReadMore
                ? " show less"
                : " Read more"}
            </button>
          </p>
          <button
            className='delete-btn'
            onClick={() => {
              removeTour(id);
            }}
          >
            Not interested
          </button>
        </footer>
      </article>
    </>
  );
};
export default Tour;
