import React from 'react';
import {
    AppRegistry,
    asset,
    StyleSheet,
    Pano,
    Text,
    View,
    VrButton,
} from 'react-vr';

import Menu from "./src/menu";
import ButtonsScene from "./src/buttonsScene";
import RoomScene from "./src/roomScene";

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
        else if (this.state.path == "roomScene") {
            currentScene = <RoomScene replaceScene={this.replaceScene} />;
        }

        return (
            <View>
                {currentScene}
                <View style={{
                    layoutOrigin: [
                        0.5, 0.5
                    ],
                    height: 1,
                    width: 1,
                    padding: 0.2,
                    transform: [
                        {
                            translate: [0, -1, -1],
                        },
                        {
                            rotateX: -90,
                        },

                    ]
                }}>
                    <VrButton style={{
                        backgroundColor: "#1122aa",
                        flex: 1,
                        margin: 0.01
                    }} onClick={() => {
                        this.replaceScene("menu");
                    }}>
                        <Text>Back To Menu</Text>
                    </VrButton>
                </View>
            </View>


        );
    }
};

AppRegistry.registerComponent('ReactVrExperimental', () => ReactVrExperimental);
