import { StyleSheet } from 'react-native';

const font = { color: '#8f8f8f', fontSize: 14 };
const cardItem = { flex: 2, height: 150, backgroundColor: '#666666', marginRight: 8, borderWidth: 2, borderColor: '#8f8f8f' };

export default StyleSheet.create({
    appContainer: { flex: 1, backgroundColor: '#2d2e2e', padding: 10 },
    segmentContainer: { marginTop: 20 },
    segmentTitle: { color: '#8f8f8f', fontWeight: 'bold', fontSize: 16 },
    cardContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginTop: 5 },
    cardItem,
    cardItemSelected: { ...cardItem, borderColor: 'red' },
    cardImage: { height: 90, width: 90, alignSelf: 'center', marginTop: 5 },
    cardDescription: { marginLeft: 5, marginTop: 5 },
    cardName: { ...font, fontWeight: 'bold' },
    cardPrize: { ...font, fontWeight: 'bold' },
    sizeContainer: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 5, marginTop: 5, alignItems: 'center'
    },
    sizeItemContainer: { flex: 2 },
    sizeTouchable: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    sizeImg: { height: 30, width: 30 },
    sizeLabel: { ...font },
    toppingContainer: { flexDirection: 'row', marginTop: 10, marginLeft: 10, marginRight: 10 },
    toppingTouchable: {
        flexDirection: 'row',
        width: 120,
        marginBottom: 10
    },
    toppingImg: { height: 30, width: 30 },
    toppingLabel: { ...font, marginLeft: 3, marginTop: 5 },
    toppingLabelDisabled: { ...font, marginLeft: 3, marginTop: 5, textDecorationStyle: 'solid', textDecorationLine: 'line-through' },
    prizeLabel: { ...font, fontWeight: 'bold', marginLeft: 10 }
});