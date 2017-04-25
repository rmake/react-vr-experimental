import React from 'react';
import {
    asset,
    StyleSheet,
    Text,
    View,
    Pano,
    VrButton
} from 'react-vr';
import SceneBase from "./sceneBase";

export default class ButtonsScene extends SceneBase {

    constructor(props) {
        super(props);
        this.state = {
            clicked: []
        };
    }

    render() {
        var buttons = [];
        for(var i = 0 ; i < 3 ; i++) {
            ((i) => {
                buttons.push(
                    <VrButton style={{
                            backgroundColor: this.state.clicked[i]
                                ? "red"
                                : "blue",
                            height: 0.29,
                            margin: 0.01
                        }} onClick={() => {
                            var clicked = this.state.clicked;
                            clicked[i] = !clicked[i];
                            this.setState({
                                clicked: clicked
                            });
                        }} key={`button${i}`}>
                        <Text>Test Button</Text>
                    </VrButton>
                );
            })(i);
        }
        return (
            <View>
                <Pano source={asset('chess-world.jpg')}/>
                <View style={{
                    layoutOrigin: [
                        0.5, 0.5
                    ],
                    flexDirection: 'column',
                    width: 1,
                    padding: 0.2,
                    transform: [
                        {
                            translate: [0, 0, -3]
                        }
                    ]
                }}>
                    {buttons}
                </View>
            </View>
        )

    }
}
