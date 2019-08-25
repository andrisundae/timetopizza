import React, { Component } from 'react';
import { View, StyleSheet, Image, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class PizzaDetail extends Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#202121',
            height: 40,
            paddingBottom: 10,
            marginTop: Platform.OS == "ios" ? 20 : 0
        },
        headerTintColor: '#8f8f8f',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Image style={{ width, resizeMode: 'contain' }} source={navigation.getParam('image')} />
            </View>
        );
    }
}

export default PizzaDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2d2e2e',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
