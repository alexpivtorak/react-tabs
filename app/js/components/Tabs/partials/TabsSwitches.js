import React, {Component} from 'react';


const TabsSwitches = ({tabs, onTabChange}) => {
    return (
        <nav className="tabs__switches">
            {tabs.map((tab, index) => {
                let classActive = tab.active ? "is-active" : "";
                return (
                    <div
                        key={tab.id}
                        className={"tabs__switch " + classActive}
                        onClick={(e) => onTabChange(index)}
                    >
                        <div className="tabs__bg" style={tab.style}>
                            {tab.contentSwitch}
                        </div>
                    </div>
                );
            })}
        </nav>
    );
}

export default TabsSwitches;
