import React, {Component} from 'react';


const TabsContent = ({tabs}) => {
    return(
        <div className="content">
            {tabs.map((tab) => {
                let classActive = tab.active ? "is-active" : "";
                return(
                    <div
                        key={tab.id}
                        className={"tabs__content " + classActive}
                        style={tab.style}
                    >
                        {tab.contentTab}
                    </div>
                )
            })}
        </div>
    );
}

export default TabsContent;
