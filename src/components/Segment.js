import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from '../common/theming';

function Segment({ children, style, title }) {
    return (
        <View style={style}>
            <Text style={styles.segmentTitle}>{title}</Text>
            {children}
        </View>
    );
}

Segment.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    title: PropTypes.string,
}

export default Segment;
