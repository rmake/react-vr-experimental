import React from 'react';
import {
  asset,
  StyleSheet,
  Text,
  View,
  Pano,
  VrButton,
} from 'react-vr';

export default class Menu extends React.Component {

    constructor() {
        super();
        this.state = {
            clicked: false,
        };
    }

    render() {

        return (
            <View>
                <Pano source={asset('chess-world.jpg')}/>
                <View style={{
                    layoutOrigin: [0.5, 0.5],
                    flexDirection: 'column',
                    height: 1,
                    width: 1,
                    padding: 0.2,
                    transform: [{translate: [0, 0, -3]}]
                }}>
                    <View style={{backgroundColor: 'blue', flex: 1}} />
                    <View style={{backgroundColor: 'red', flex: 1}}>
                        <Text>Hello World!</Text>
                    </View>
                    <VrButton style={{backgroundColor: this.state.clicked? "red": "blue", flex: 1}}
                        onClick={() => {
                            this.setState({
                                clicked: !this.state.clicked,
                            });
                            console.log("clicked!");
                        }}
                        onHeadPose={() => {
                            this.setState({
                                clicked: true,
                            });
                            console.log("clicked!");

                        }}
                    />
                </View>
            </View>
        );

    }

}
