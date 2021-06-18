import React, { useState } from 'react';
import './tabs.css';

const Tabs = ({pages, titles}) => {
    const [tab, setTab] = useState(0);

    return (
        <div className="tabs">
            <div className="tabs-buttons">
                {titles.map((el, i) => (
                    <button onClick={() => setTab(i)} key={i}>{el}</button>
                ))}
            </div>
            <div className="tabs-content">
                {pages[tab]}
            </div>
        </div>
    )
}

export default Tabs;