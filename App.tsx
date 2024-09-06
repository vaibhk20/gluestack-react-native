/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './global.css';
import {GluestackUIProvider} from '@/components/ui/gluestack-ui-provider';
import {useColorScheme} from 'nativewind';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import ModalExample from './components/examples/ModalExample';

function App(): React.JSX.Element {
  const {colorScheme} = useColorScheme();
  const backgroundStyle = {
    backgroundColor: colorScheme === 'dark' ? Colors.darker : Colors.lighter,
  };
  return (
    <GluestackUIProvider mode="light">
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={colorScheme === 'light' ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ModalExample />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
export default App;
