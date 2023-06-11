import 'react-native-gesture-handler';
import { FlatList, Text, StyleSheet, View, SafeAreaView, Image, Dimensions, ScrollView} from "react-native"
import { Themes, Images } from "../assets/Themes";
import { Song } from "./Song";
import { millisToMinutesAndSeconds } from "../utils";
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const renderSongItem = ( {item, navigation} ) => (
  console.log("RENDER SONG ITEM", item),
  <Song
    songTitle={item.songTitle}
    albumName={item.albumName}
    artistName={item.songArtists[0].name}
    imageUrl={{uri: item.imageUrl}}
    songLength={item.duration}
    preview_url={item.previewUrl}
    external_url={item.externalUrl}
  />
)

const SongList = ({tracks}) => {
  const navigation = useNavigation()
  return(
    <FlatList
      data={tracks}
      renderItem={(item) => renderSongItem(item, navigation)}
    />
  );
};

export default SongList;

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
    marginLeft: 30,
    width: 100,
  },

  artistName: {
    color: Themes.colors.gray,
    marginLeft: 30,
    width: 100,
  }
}
)
