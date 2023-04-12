import {
  AppRegistry,
  Platform,
  StatusBar,
  UIManager,
  ScrollView,
  FlatList,
} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

StatusBar.setBarStyle('dark-content');
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('transparent');
  StatusBar.setTranslucent(true);

  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

ScrollView.defaultProps = {
  ...(ScrollView.defaultProps || {}),
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
};

FlatList.defaultProps = {
  ...(FlatList.defaultProps || {}),
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
};

AppRegistry.registerComponent(appName, () => App);
