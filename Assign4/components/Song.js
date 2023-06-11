import { FlatList, Text, StyleSheet, View, SafeAreaView, Image, Dimensions, ScrollView, Pressable} from "react-native"
import { Themes, Images } from "../assets/Themes";
import { millisToMinutesAndSeconds } from "../utils";
import { Ionicons } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


const { height, width } = Dimensions.get('window');

const Song = ({ songTitle, imageUrl, songLength, artistName, albumName, preview_url, external_url}) => {
  const navigation = useNavigation()

return (

<View style={styles.elementContainer}>

<Pressable
onPress={() => navigation.navigate('SongDetails', external_url)}
style={styles.iconContainer}>
  <Ionicons name="play-circle" size={32} style={styles.spotifyPlayButton} />
</Pressable>

<Pressable
onPress={() => navigation.navigate('SongPreview', preview_url)}
style={styles.songContainer}>

<View>
  <Image source={imageUrl} style={styles.albumContainer}/>
</View>

<View>
  <Text style = {styles.text} numberOfLines = {1}>
    {songTitle}
  </Text>
  <Text style={styles.artistName} numberOfLines={1}>
    {artistName}
  </Text>
</View>

<View>
  <Text style = {styles.text} numberOfLines = {1}>
    {albumName}
  </Text>
</View>

<View>
  <Text style = {styles.text}>
    {millisToMinutesAndSeconds(songLength)}
  </Text>
</View>

</Pressable>

</View>
);
}

export {Song};

const styles = StyleSheet.create({
  songContainer: {
    backgroundColor: Themes.colors.background,
    flexDirection: "row",
    justifyContent: 'left',
    alignItems: 'center',
    padding: 10,
    width: "100%",
  },

  albumContainer: {
    height: width * 0.15,
    width: width * 0.15,
  },

  text: {
    color: Themes.colors.white,
    marginLeft: 20,
    width: 100,
  },

  artistName: {
    color: Themes.colors.gray,
    marginLeft: 20,
    width: 100,
  },

  iconContainer: {
    marginRight: 10
  },

  spotifyPlayButton: {
    color: Themes.colors.spotify,
  },

  elementContainer: {
    flexDirection: "row",
    justifyContent: 'left',
    alignItems: 'center',
  },
}
)
