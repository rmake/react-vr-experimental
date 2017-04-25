import React from 'react';
import {
  View,
} from 'react-vr';

export default class SceneBase extends React.Component {

    replaceScene(path) {
        this.props.replaceScene(path);
    }
}

SceneBase.propTypes = {
    replaceScene: React.PropTypes.func,
};
