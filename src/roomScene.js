import React from 'react';
import {
    asset,
    StyleSheet,
    Text,
    View,
    Pano,
    VrButton,
    Model,
} from 'react-vr';
import SceneBase from "./sceneBase";

export default class RoomScene extends SceneBase {

    render() {

        return (
            <View>
                <Model
                    style={{

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
                />
            </View>
        );

    }

}
