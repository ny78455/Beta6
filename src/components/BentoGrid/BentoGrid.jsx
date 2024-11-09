import React from 'react';
import './BentoGrid.css';
import BentoGridItems from '../BentoGridItems/BentoGridItems.jsx';

function BentoGrid() {
  return (
    <div className="bento-grid">
      <BentoGridItems title="Your Ranking" amount="2,60,540" change="(+12,026)" />
      <BentoGridItems title="Today's Users" amount="2,300" change="+5%" />
      <BentoGridItems title="New Clients" amount="3,052" change="-14%" />
      {/* <BentoGridItems title="Total Sales" amount="$173,000" change="+8%" /> */}
      <BentoGridItems chart />

      <div className="bento-item large">
        <h3>Welcome back, Mark Johnson</h3>
        <p>Glad to see you again! Ask me anything.</p>
      </div>

      <BentoGridItems title="Satisfaction Rate" progress="95%" />
      <BentoGridItems title="Referral Tracking" invited="145" bonus="1,465" />
      <BentoGridItems title="Safety" score="9.3" />

      {/* Add Sales Overview Chart */}
      {/* <BentoGridItems chart /> */}
    </div>
  );
}

export default BentoGrid;
