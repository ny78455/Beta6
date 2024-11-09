import React from 'react';
import './BentoGridItems.css';
import SalesChart from '../SalesChart/SalesChart.jsx';

function BentoGridItems({ title, amount, change, progress, invited, bonus, score, img, chart }) {
  return (
    <div className="bento-item">
      {chart ? (
        <SalesChart />
      ) : (
        <>
          <div className="image"><img src={img} alt="" /></div>
          <h4>{title}</h4>
          {amount && <p className="amount">{amount}</p>}
          {change && <p className="change">{change}</p>}
          {progress && <div className="progress-bar"><span style={{ width: progress }}></span>{progress}</div>}
          {invited && <p>Invited: {invited}</p>}
          {bonus && <p>Bonus: {bonus}</p>}
          {score && <p>Safety Score: {score}</p>}
        </>
      )}
    </div>
  );
}

export default BentoGridItems;
