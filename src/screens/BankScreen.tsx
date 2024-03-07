import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Image, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { styles } from '../theme/appTheme';
import banks from '../services/listBankAPI';
import { BanksObject } from '../interfaces/bankObjectInterface';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { renderItemProps } from '../interfaces/renderItemInterface';

export const BankScreen = () => {

    useEffect(() => {
        getData()
            .then((res) => {
                if (res === null) {
                    getListBank();
                } else {
                    setListBanks(res);
                }
            })
            .catch((e) => console.log('e', e))
    }, []);

    const getData = async () => {
        try {
            const bankList = await AsyncStorage.getItem('bankList');
            return bankList != null ? JSON.parse(bankList) : null;
        } catch (e) {
            console.error('Error al leer el objeto', e)
        }
    };

    const [listBanks, setListBanks] = useState<BanksObject[]>([]);
    const [loader, setLoader] = useState(false);

    const getListBank = async () => {

        setLoader(true);
        const resp = await banks.get<BanksObject[]>('banks');
        const bankList = JSON.stringify(resp.data);
        await AsyncStorage.setItem('bankList', bankList);
        setListBanks(resp.data);

        if (resp.status !== 200) {
            Alert.alert('Ocurrió un problema con la consulta', '', [
                { text: 'OK', onPress: () => { } },
            ]);
        }

        setLoader(false);

    }

    const footFlat = () => {
        return (
            loader &&
            <View style={styles.footFlat}>
                <ActivityIndicator size={40} color={'#55e6c3'} />
            </View>
        )
    }

    const ListItem = ({ bankName, age, description, url }: renderItemProps) => {
        return (
            <>
                <View style={styles.flatContainer}>
                    <View style={styles.flatContent1}>
                        <Text style={styles.title}>{bankName}</Text>
                        <Text style={styles.text}>Años: {age}</Text>
                        <Text style={[styles.text, { textAlign: 'center' }]}>{description}</Text>
                    </View>
                    <View style={styles.flatContent2}>
                        <Image source={{ uri: url }} style={styles.flatImage} />
                    </View>
                </View>
            </>
        )
    }

    return (
        <View style={styles.container}>
            <Header title='Listado de Bancos' />
            <FlatList
                style={styles.flat}
                data={listBanks}
                onEndReachedThreshold={0.5}
                ListFooterComponent={footFlat}
                renderItem={({ item }) => <ListItem bankName={item.bankName} age={item.age} description={item.description} url={item.url} />}
            />
        </View>
    )

}
