import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

import Menu from "./src/menu.js";

export default class ReactVrExperimental extends React.Component {
  render() {
    return (
      <View>
          {/*
              <Text
                style={{
                  backgroundColor: '#777879',
                  fontSize: 0.8,
                  fontWeight: '400',
                  layoutOrigin: [0.5, 0.5],
                  paddingLeft: 0.2,
                  paddingRight: 0.2,
                  textAlign: 'center',
                  textAlignVertical: 'center',
                  transform: [{translate: [0, 0, -3]}],
                }}>
                hello
              </Text>
              */}

        <Menu />
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactVrExperimental', () => ReactVrExperimental);
