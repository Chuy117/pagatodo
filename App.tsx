import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { styles } from './src/theme/appTheme';
import { BankScreen } from './src/screens/BankScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
      <BankScreen />
    </SafeAreaView>
  )
}

export default App;