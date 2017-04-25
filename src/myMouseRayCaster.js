import {
    MouseRayCaster
} from 'ovrui';

export default class MyMouseRayCaster extends MouseRayCaster {

    drawsCursor() {
        return true;
    }
}
