import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, ScrollView } from 'react-native';

import styles from '../common/theming';

function AppContainer({children, style}) {
    return (
        <SafeAreaView style={style}>
            <ScrollView>
                {children}
            </ScrollView>
        </SafeAreaView>
    );
}

AppContainer.propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
}

AppContainer.defaultProps = {
    style: styles.appContainer
}

export default AppContainer;
