import { StyleSheet, SafeAreaView, Text, Pressable, View, Image, Dimensions} from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes, Images } from "./assets/Themes";
import  SpotifyAuthButton  from "./components/SpotifyAuthButton";
import  SongList  from "./components/SongList";
import { Song } from "./components/Song";
import SongDetails from "./screens/SongDetails";
import SongPreview from "./screens/SongPreview";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { height, width } = Dimensions.get('window');

export default function App() {
const Stack = createStackNavigator();

  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  console.log("token", token);
  console.log("tracks", tracks);

  let homeContent = null;

  if (token) {
    homeContent = (
      <View>
        <View style={styles.header}>
          <Image source={Images.spotify} style={styles.spotifyIcon}/>
          <Text style={styles.authText}>  My Top Tracks</Text>
        </View>
      <SongList tracks={tracks}/>
      </View>
    );
  } else {
    homeContent =  (
      <SpotifyAuthButton authenticationFunction={getSpotifyAuth} />
    );
  }

  const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        {homeContent}
      </View>
    );
  };

  return (
    <NavigationContainer>
    <Stack.Navigator style={styles.container}>
      <Stack.Screen name="Home" component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="SongDetails" component={SongDetails}/>
      <Stack.Screen name="SongPreview" component={SongPreview}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  authButton: {
    backgroundColor: Themes.colors.spotify,
    padding: 12,
    borderRadius: 999999,
  },

  authText: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 27,
  },

  header: {
    height: '10%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  spotifyIcon: {
    height: width * 0.07,
    width: width * 0.07,
  },

});
