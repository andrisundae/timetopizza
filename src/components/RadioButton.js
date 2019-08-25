import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';

import SvgPath from '../components/SvgPath';

import styles from '../common/theming';

function CheckedSvg() {
    return (
        <SvgPath
            path="M48,34c-7.7,0-14,6.3-14,14c0,7.7,6.3,14,14,14c7.7,0,14-6.3,14-14C62,40.3,55.7,34,48,34z
		 M48,20c-15.5,0-28,12.5-28,28s12.5,28,28,28s28-12.5,28-28S63.5,20,48,20z M48,70.4c-12.4,0-22.4-10-22.4-22.4s10-22.4,22.4-22.4
		s22.4,10,22.4,22.4S60.4,70.4,48,70.4z"
            color="#21f9fc"
        />
    )
}

function UnCheckedSvg({disabled}) {
    let color = disabled ? '#333333' : '#8f8f8f';
    return (
        <SvgPath
            path="M48,20.5c-15.2,0-27.5,12.3-27.5,27.5S32.8,75.5,48,75.5S75.5,63.2,75.5,48S63.2,20.5,48,20.5z
		 M48,70c-12.2,0-22-9.8-22-22s9.8-22,22-22s22,9.8,22,22S60.2,70,48,70z"
            color={color}
        />
    )
}

function LabeledImage({selected, label, disabled}) {
    return (
        <Fragment>
            {selected ?
                <CheckedSvg/>
                :
                <UnCheckedSvg disabled={disabled}/>
            }
            <Text style={styles.sizeLabel}>{label}</Text>
        </Fragment>
    )
}

function RadioButton({ onSelect, disabled, label, selected }) {

    return (
        <View style={styles.sizeItemContainer}>
            {disabled ?
                <View style={styles.sizeTouchable}>
                    <LabeledImage selected={selected} label={label} disabled/>
                </View>
                :
                <TouchableOpacity style={styles.sizeTouchable} onPress={onSelect}>
                    <LabeledImage selected={selected} label={label} />
                </TouchableOpacity>
            }
        </View>
    );
}

RadioButton.propTypes = {
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    onSelect: PropTypes.func,
}

export default RadioButton;
