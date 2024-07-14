import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '@utils/constants';
import Icon from '@components/Icon';
import DetailScreenContainer from '@containers/DetailScreen';
import HomeScreenContainer from '@containers/HomeScreen';
import Routes from './routes';

const Stack = createNativeStackNavigator();

interface StackNavigatorProps {}

const StackNavigator: React.ComponentType<StackNavigatorProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.HOME}
          component={HomeScreenContainer}
          options={() => ({
            headerLeft: MenuButton,
            headerRight: ProfileIcon,
            headerTransparent: true,
            headerStyle: {
              backgroundColor: colors.appBackground,
            },
            title: '',
          })}
        />
        <Stack.Screen
          name={Routes.DETAIL}
          component={DetailScreenContainer}
          options={() => ({
            headerLeft: BackButton,
            headerRight: DotsButton,
            headerTransparent: true,
            title: 'Detail',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: colors.appBackground,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
});

const MenuButton = () => {
  const moreHandler = () => {
    Alert.alert(
      'More button pressed',
      "Not sure, but this should probably take you to a 'More' page, like some sort of filtering configuration for the home page.",
      [{ text: 'OK' }],
      { cancelable: false },
    );
  };

  return (
    <TouchableOpacity style={styles.iconContainer} onPress={moreHandler}>
      <Icon size={24} name="menu" />
    </TouchableOpacity>
  );
};

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={navigation.goBack}>
      <Icon size={24} name="back" />
    </TouchableOpacity>
  );
};

const DotsButton = () => {
  const dotsHandler = () => {
    Alert.alert(
      'Dots icon pressed',
      'This should take you to a detail page with more options, or display more options somehow.',
      [{ text: 'OK' }],
      { cancelable: false },
    );
  };
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={dotsHandler}>
      <Icon size={24} name="dots" />
    </TouchableOpacity>
  );
};

const ProfileIcon = () => {
  const profileHandler = () => {
    Alert.alert(
      'Profile icon pressed',
      'This should take you to the profile page.',
      [{ text: 'OK' }],
      { cancelable: false },
    );
  };

  return (
    <TouchableOpacity onPress={profileHandler}>
      <Image
        source={require('../assets/images/profile.jpg')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default StackNavigator;
