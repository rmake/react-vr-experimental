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

export default class Menu extends SceneBase {

    constructor(props) {
        super(props);
    }

    render() {

        var buttons = [
            {
                label: "buttonsScene",
                scenePath: "buttonsScene",
            },
        ];

        var buttonComponents = [];
        buttons.forEach((button) => {
            buttonComponents.push(
                <VrButton style={{
                    backgroundColor: "blue",
                    flex: 1,
                    margin: 0.01
                }} onClick={() => {
                    this.replaceScene(button.scenePath);
                }}>
                    <Text>{button.label}</Text>
                </VrButton>
            )
        });

        return (
            <View>
                <Pano source={asset('chess-world.jpg')}/>
                <View style={{
                    layoutOrigin: [
                        0.5, 0.5
                    ],
                    flexDirection: 'column',
                    height: 1,
                    width: 1,
                    padding: 0.2,
                    transform: [
                        {
                            translate: [0, 0, -3]
                        }
                    ]
                }}>
                    {buttonComponents}
                </View>
            </View>
        );

    }

}
