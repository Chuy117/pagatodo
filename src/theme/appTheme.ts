import { StyleSheet, Dimensions } from 'react-native';

export const colors = {
    pagaTodoBack: '#fbfbfb',
    pagaTodoSecondary: '#55e6c3'
}

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.pagaTodoBack
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30,
        color: colors.pagaTodoSecondary
    },
    container: {
        flex: 1,
        padding: 20
    },
    sectionsSelectList: {
        height: 50,
        borderRadius: 4,
        margin: 10,
        justifyContent: 'center',
        borderColor: '#2761ad',
        borderWidth: 1
    },
    textFlatList: {
        color: '#2761ad',
        fontSize: 15,
        fontWeight: '700',
    },
    viewPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    footFlat: {
        height: 150,
        justifyContent: 'center'
    },
    flatImage: {
        width: Dimensions.get('window').width * 0.275,
        height: Dimensions.get('window').height * 0.13,
        borderRadius: 15,
    },
    flatContainer: {
        flexDirection: 'row',
        flex: 1,
        margin: 10,
        backgroundColor: colors.pagaTodoSecondary,
        borderRadius: 10
    },
    flat: {
        flexGrow: 0, 
        marginTop: 10
    },
    flatContent1: {
        flexDirection: 'column',
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    flatContent2: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF'
    },
    text: {
        fontWeight: '600',
        fontSize: 14,
        color: '#000'
    },
});