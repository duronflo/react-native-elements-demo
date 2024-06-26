import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';

import { Platform } from 'react-native';
import { Button, lightColors, darkColors, Switch, createTheme, ThemeProvider, useThemeMode, useTheme, Text } from '@rneui/themed';
import { useState } from 'react';

const theme = createTheme({
  lightColors: {
    ...lightColors
  },
  darkColors: {
    ...darkColors
  },
  mode: 'light' | 'dark',
  components: {
    Button: {
      raised: true,
    },
  },
});


const SwitchNew = () => {
  const { mode, setMode } = useThemeMode();
  const {isSet, setSwitch} = useState(false)

  return (
    <Switch
      value={isSet}
      onValueChange={() => {

        mode === 'dark' ? setMode('light') : setMode('dark');
        console.log(mode)
      }} />
  )
}

const Main = () => {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="My Button" onPress={() => console.log(theme.colors)} />
      <SwitchNew />
    </View>
  )
}


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

