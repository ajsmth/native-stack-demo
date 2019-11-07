/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  enableScreens,
  ScreenStack,
  ScreenContainer,
  Screen,
  ScreenStackHeaderConfig,
} from 'react-native-screens';
enableScreens();

const App: () => React$Node = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <ScreenStack style={{flex: 1}}>
          {Array.from({length: activeIndex + 1}, (_, index) => (
            <Screen
              style={{
                ...StyleSheet.absoluteFillObject,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              key={index}>
              <ScreenStackHeaderConfig
                title={`Screen: ${index + 1}`}
                gestureEnabled
              />
              <Button
                title="Push"
                onPress={() => setActiveIndex(activeIndex + 1)}
              />
              <Button
                title="Pop"
                onPress={() => setActiveIndex(activeIndex - 1)}
              />
            </Screen>
          ))}
        </ScreenStack>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
