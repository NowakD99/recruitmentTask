import React from 'react';
import { InactiveStar } from '../InactiveStar/InactiveStar';
import { ActiveStar } from '../ActiveStar/ActiveStar';

export const Stars = ({rating}) => {

  let stars = [];
  for(let i=1; i<=5; i++) {
    i<=rating ? stars.push("active") : stars.push("");
  }

  return (
    <>
        <div className="ratingBox">
            {stars.map((star, id) => {
              return <div key={id} className={star}> {star ? <ActiveStar/> : <InactiveStar/>} </div>
            })}
        </div>
    </>
  );
};
