import React, {Component} from 'react';
import TabsData from "../../../data/data";

import TabsSwitches from "./partials/TabsSwitches";
import TabsContent from "./partials/TabsContent";


class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            TabsData
        };
    }

    onTabChange(index) {
        var stateCopy = Object.assign({}, this.state);
        stateCopy.TabsData.forEach((item) => {
            item.active = false
        });
        stateCopy.TabsData[index].active = true;
        this.setState({
            stateCopy
        })
    }

    render() {
        return(
            <div className="mod__tabs">
                <TabsSwitches
                    tabs={this.state.TabsData}
                    onTabChange={this.onTabChange.bind(this)}
                />
                <TabsContent
                    tabs={this.state.TabsData}
                />
            </div>
        );
    }
}


export default Tabs;
