import React, { Fragment, useState } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';

import Container from '../components/AppContainer';
import Segment from '../components/Segment';
import Pizza from '../components/Pizza';
import RadioButton from '../components/RadioButton';
import MultipleSelectList from '../components/MultipleSelectList';

import styles from '../common/theming';
import { listPizza, sizes, toppings, toppingRules } from '../common/data';

export default function Home({navigation}) {
    const [selectedPizza, selectPizza] = useState({});
    const [selectedSize, selectSize] = useState({});
    const [disabledForm, setDisabled] = useState(true);
    const [isReady, setReady] = useState(false);

    let initialToppings = new Map();
    toppings.forEach((row) => initialToppings.set(row.id, { ...row, selected: false, disabled: true, price: 0 }));
    const [availableToppings, updateToppings] = useState(initialToppings);

    function handleChangeTopping(id) {
        let newToppings = new Map(availableToppings);
        let topping = newToppings.get(id);
        newToppings.set(id, { ...topping, selected: !topping.selected });
        updateToppings(newToppings)
    }

    function handleSelectPizza(pizza) {
        selectPizza(pizza);
        setDisabled(false);

        if (!selectedSize.price) {
            let defaultSize = sizes.find((size) => size.name === 'Medium');
            selectSize(defaultSize);
        }

        const toppingList = toppingRules.filter((topping) => topping.pizzaId === pizza.id);
        let newToppings = new Map(initialToppings);
        toppingList.forEach((row) => {
            newToppings.set(row.toppingId, {
                ...newToppings.get(row.toppingId),
                disabled: false,
                selected: availableToppings.get(row.toppingId).selected,
                price: getToppingPrize(row.toppingId, pizza.id)
            });
        });
        updateToppings(newToppings);
    }

    function getToppingPrize(toppingId, pizzaId) {
        let toppingRule = toppingRules.find((row) => row.pizzaId === pizzaId && row.toppingId === toppingId);

        return toppingRule.price ? toppingRule.price : 0;
    }

    function totalTopping() {
        let total = 0;
        availableToppings.forEach((topping) => {
            if (topping.selected && !topping.disabled) {
                total = total + topping.price;
            }
        })

        return total;
    }

    function renderTotalPrice() {
        let summary = 0;
        if (!disabledForm) {
            if (selectedPizza && selectedSize) {
                summary = selectedPizza.price + selectedSize.price + totalTopping();
            }
        }

        return (
            <Text style={styles.prizeLabel}>{`$${summary}`}</Text>
        );

    }

    function getDataToppings() {
        let data = [];
        availableToppings.forEach((row) => data.push(row));

        return data;
    }

    async function  cacheResourcesAsync() {
        const images = [require('../assets/img/pizza_1.jpg'), require('../assets/img/pizza_2.jpg'), require('../assets/img/pizza_3.jpg')];

        const cacheImages = images.map(image => {
            return Asset.fromModule(image).downloadAsync();
        });
        return Promise.all(cacheImages);
    }

    return (
        !isReady ?
        <AppLoading
            startAsync={cacheResourcesAsync}
            onFinish={() => setReady(true)}
            onError={console.warn}

        />
        :
        <Fragment>
            <StatusBar hidden={true} />
            <Container>
                <Segment title="Pizza">
                    <View style={styles.cardContainer}>
                        {listPizza.map((pizza, key) => {
                            let isSelected = pizza.id === selectedPizza.id;
                            return (
                                <Pizza
                                    key={key}
                                    data={pizza}
                                    selected={isSelected}
                                    onSelect={() => handleSelectPizza(pizza)}
                                    onOpenImage={() => navigation.navigate('PizzaDetail', pizza)}
                                />
                            )
                        })
                        }
                    </View>
                </Segment>
                <Segment style={styles.segmentContainer} title="Size">
                    <View style={styles.sizeContainer}>
                        {sizes.map((size, key) => {
                            let selected = selectedSize.id === size.id ? true : false;
                            return (
                                <RadioButton
                                    onSelect={() => selectSize(size)}
                                    key={key}
                                    label={size.name}
                                    selected={selected}
                                    disabled={disabledForm}
                                />
                            )
                        })}
                    </View>
                </Segment>
                <Segment style={styles.segmentContainer} title="Toppings">
                    <MultipleSelectList
                        data={getDataToppings()}
                        onSelect={(id) => handleChangeTopping(id)}
                    />
                </Segment>
                <Segment style={styles.segmentContainer} title="Prize">
                    {renderTotalPrice()}
                </Segment>
            </Container>
        </Fragment>

    );
}

Home.navigationOptions = {
    header: null
}