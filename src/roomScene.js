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
    Animated,
} from 'react-vr';
import SceneBase from "./sceneBase";

export default class RoomScene extends SceneBase {

    positions = [
        [-3, 0.5, 1],
        [-4, 0.5, 1],
        [-4, 0.5, 0],
        [-2, 0.5, 2],
    ]

    roomModel = null;

    constructor(props) {
        super(props);
        this.state = {
            roomPosition: [
                new Animated.Value(-3),
                new Animated.Value(0.5),
                new Animated.Value(1)
            ]
        };
    }

    moveTo = (position, e) => {
        console.log("position " + position);
        var animations = [];
        position.forEach((v, i) => {
            animations.push(
                Animated.spring(
                    this.state.roomPosition[i],
                    {
                        toValue: position[i],
                        friction: 10,
                    }
                )
            );
        });

        Animated.parallel(
            animations
        ).start();
    };


    render() {

        var buttons = [];
        this.positions.forEach((position, i) => {
            buttons.push(
                <VrButton
                    style={{
                        flex: 1,
                        backgroundColor: "#1122aa",
                        margin: 0.01
                    }}
                    key={`buttons${i}`}
                    onClick={this.moveTo.bind(this, position)}
                    >
                    <Text>
                        {`position${i}`}
                    </Text>
                </VrButton>
            );
        });

        return (
            <View>
                <View
                    style={{
                        position: 'absolute',
                        layoutOrigin: [
                            0.5, 0.5
                        ],
                        transform: [
                            {
                                translate: [-0.54, -1, -1]
                            },
                            {
                                rotateX: -90,
                            },
                        ],
                        flexDirection: 'column',
                        width: 0.5,
                        height: 0.5,
                    }}>
                    {buttons}
                </View>
                <Animated.View
                    style={{
                        position: 'absolute',
                        transform: [
                            {
                                rotateY: 90,
                            },
                            {
                                translateX: this.state.roomPosition[0]
                            },
                            {
                                translateY: this.state.roomPosition[1]
                            },
                            {
                                translateZ: this.state.roomPosition[2]
                            },
                        ],
                    }}
                    >
                    <Model
                        source={{
                            obj:asset("room/room.obj"),
                            mtl:asset("room/room.mtl"),
                        }}
                        lit={false}
                        cursorVisibilitySlop={{top: 0.10, bottom: 0.10, left: 0, right: 0}}
                        >

                    </Model>
                </Animated.View>

            </View>
        );

    }

}
