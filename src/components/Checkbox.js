import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import SvgPath from '../components/SvgPath';

import styles from '../common/theming';

function CheckedSvg() {
    return (
        <SvgPath
            path="M67.1,51.2v10.5c0,2.6-0.9,4.9-2.8,6.7c-1.9,1.9-4.1,2.8-6.7,2.8H30c-2.6,0-4.9-0.9-6.7-2.8
		c-1.9-1.9-2.8-4.1-2.8-6.7V34.2c0-2.6,0.9-4.9,2.8-6.7c1.9-1.9,4.1-2.8,6.7-2.8h27.5c1.4,0,2.7,0.3,3.9,0.8
		c0.3,0.2,0.5,0.4,0.6,0.8c0.1,0.4,0,0.7-0.3,1l-1.6,1.6c-0.2,0.2-0.5,0.3-0.8,0.3c-0.1,0-0.2,0-0.3-0.1C58.5,29,58,29,57.5,29H30
		c-1.5,0-2.7,0.5-3.7,1.6c-1,1-1.6,2.3-1.6,3.7v27.5c0,1.5,0.5,2.7,1.6,3.7c1,1,2.3,1.6,3.7,1.6h27.5c1.5,0,2.7-0.5,3.7-1.6
		c1-1,1.6-2.3,1.6-3.7v-8.4c0-0.3,0.1-0.5,0.3-0.7l2.1-2.1c0.2-0.2,0.5-0.3,0.8-0.3c0.1,0,0.3,0,0.4,0.1
		C66.8,50.5,67.1,50.8,67.1,51.2z M74.7,35.1L47.8,62c-0.5,0.5-1.2,0.8-1.9,0.8S44.5,62.5,44,62L29.8,47.8c-0.5-0.5-0.8-1.2-0.8-1.9
		s0.3-1.4,0.8-1.9l3.6-3.6c0.5-0.5,1.2-0.8,1.9-0.8s1.4,0.3,1.9,0.8l8.7,8.7l21.4-21.4c0.5-0.5,1.2-0.8,1.9-0.8s1.4,0.3,1.9,0.8
		l3.6,3.6c0.5,0.5,0.8,1.2,0.8,1.9S75.2,34.5,74.7,35.1z"
            color="#21f9fc"
        />
    )
}

function UnCheckedSvg({disabled}) {
    let color = disabled ? '#333333' : '#8f8f8f';
    return (
        <SvgPath
            path="M70.2,25.8v44.3H25.8V25.8H70.2 M70.2,19.5H25.8c-3.5,0-6.3,2.8-6.3,6.3v44.3
		c0,3.5,2.8,6.3,6.3,6.3h44.3c3.5,0,6.3-2.8,6.3-6.3V25.8C76.5,22.3,73.7,19.5,70.2,19.5z"
            color={color}
        />
    )
}

function LabeledImage({ selected, label, disabled }) {
    return (
        <Fragment>
            {selected ?
                <CheckedSvg/>
                :
                <UnCheckedSvg disabled={disabled}/>
            }
            <Text style={styles.toppingLabel}>{label}</Text>
        </Fragment>
    )
}

function Checkbox({ onSelect, disabled, label, selected, id }) {

    _onSelect = () => {
        onSelect(id);
    };

    return (
        <Fragment>
            {disabled ?
                <View style={styles.toppingTouchable}>
                    <LabeledImage selected={selected} label={label} disabled={true} />
                </View>
                :
                <TouchableOpacity style={styles.toppingTouchable} onPress={_onSelect}>
                    <LabeledImage selected={selected} label={label} />
                </TouchableOpacity>
            }
        </Fragment>
    );
}

Checkbox.propTypes = {
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.number,
    onSelect: PropTypes.func,
}

export default Checkbox;
