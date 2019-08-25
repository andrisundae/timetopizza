import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from '../common/theming';

function Pizza({ data, selected, onSelect, onOpenImage }) {

    return (
        <View style={selected ? styles.cardItemSelected : styles.cardItem}>
            <TouchableOpacity onPress={onOpenImage}>
                <Image style={styles.cardImage} source={data.image} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardDescription} onPress={onSelect}>
                <Text style={styles.cardName}>{data.name}</Text>
                <Text style={styles.cardPrize}>{`$${data.price}`}</Text>
            </TouchableOpacity>
        </View>
    );
}

Pizza.propTypes = {
    selected: PropTypes.bool,
    data: PropTypes.object,
    onSelect: PropTypes.func,
    onOpenImage: PropTypes.func,
}

export default Pizza;
