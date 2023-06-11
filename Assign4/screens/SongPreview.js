
import { Text, StyleSheet, View, SafeAreaView, Image, Dimensions, ScrollView, Pressable} from "react-native";
import { WebView } from 'react-native-webview';

const SongPreview = ({navigation, route}) => {
  const preview_url = route.params
  return (
    <WebView
      source={{ uri: preview_url}}
    />
  )
}

export default SongPreview;
