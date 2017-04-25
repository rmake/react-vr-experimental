import React from 'react';
import {
    AppRegistry,
    asset,
    StyleSheet,
    Pano,
    Text,
    View
} from 'react-vr';

import Menu from "./src/menu";
import ButtonsScene from "./src/buttonsScene";

export default class ReactVrExperimental extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            path: "menu"
        };
    }

    replaceScene = (path) => {
        this.setState({
            path: path
        });
    }

    render() {

        var currentScene = null;
        if (this.state.path == "menu") {
            currentScene = <Menu replaceScene={this.replaceScene} />;
        }
        else if (this.state.path == "buttonsScene") {
            currentScene = <ButtonsScene replaceScene={this.replaceScene} />;
        }

        return (
            <View>
                {currentScene}
            </View>


        );
    }
};

AppRegistry.registerComponent('ReactVrExperimental', () => ReactVrExperimental);
