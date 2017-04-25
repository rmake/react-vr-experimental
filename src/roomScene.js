import React from 'react';
import {
    asset,
    StyleSheet,
    Text,
    View,
    Pano,
    VrButton,
    Model,
    Box,
    Scene,
    VrHeadModel,
} from 'react-vr';
import SceneBase from "./sceneBase";

export default class RoomScene extends SceneBase {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (!this.state.basePosition) {
            var basePosition = VrHeadModel.positionOfHeadMatrix(
                VrHeadModel.getHeadMatrix());
            basePosition[0] += 3;
            this.setState({
                basePosition: basePosition,
            });

        }
    }

    render() {

        return (
            <View>

                <View style={{
                    position: 'absolute',
                    backgroundColor: "#1122aa",
                    layoutOrigin: [
                        0.5, 0.5
                    ],
                    height: 1,
                    width: 1,
                    transform: [
                        {
                            translate: this.state.basePosition || [-3, 0.5, 1]
                        },
                        {
                            rotateY: -90,
                        },
                    ],
                }}>
                    <VrButton
                        style={{
                            backgroundColor: "#1122aa",
                            flex: 1,
                            margin: 0.01
                        }}
                        onClick={() => {
                            this.replaceScene("menu");
                        }}
                        >
                        <Text>Back To Menu</Text>

                    </VrButton>
                </View>



                <VrButton
                    style={{
                        position: 'absolute',
                    }}
                    onClick={() => {
                        console.log("click box!");
                    }}
                    >
                    <Box
                        style={{
                            layoutOrigin: [
                                0.5, 0.5, 0.5
                            ],
                            transform: [
                                {
                                    translate: [0, 0, -3]
                                },
                            ],
                            color: "#000000",
                        }}
                        dimWidth={1}
                        dimDepth={1}
                        dimHeight={1}
                        />
                </VrButton>

                <VrButton
                    style={{
                        position: 'absolute',
                    }}
                    ref={(view) => {this.vrButton = view;}}
                    onClick={(e, e2, e3) => {
                        console.log("onClick model!");
                    }}
                    onEnter={() => {
                        console.log("onEnter model!");
                    }}
                    onExit={() => {
                        console.log("onExit model!");
                    }}
                    onMove={() => {
                        console.log("onMove model!");
                    }}
                    >
                    <Model
                        style={{
                            position: 'absolute',
                            transform: [
                                {
                                    rotateY: 90,
                                },
                                {
                                    translate: [-3, 0.5, 1]
                                },
                            ]
                        }}
                        source={{
                            obj:asset("room/room.obj"),
                            mtl:asset("room/room.mtl"),
                            //obj:asset("cc/creature.obj"),
                            //mtl:asset("cc/creature.mtl"),
                        }}
                        lit={false}
                        cursorVisibilitySlop={{top: 0.10, bottom: 0.10, left: 0, right: 0}}
                        >

                    </Model>
                </VrButton>

            </View>
        );

    }

}
