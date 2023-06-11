
import { Text, StyleSheet, View, SafeAreaView, Image, Dimensions, ScrollView, Pressable} from "react-native";
import { WebView } from 'react-native-webview';

const SongDetails = ({navigation, route}) => {
  const external_url = route.params
  return (
    <WebView
      source={{ uri: external_url}}
    />
  )
}

export default SongDetails;
