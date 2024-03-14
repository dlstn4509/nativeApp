import { Image, StyleSheet } from 'react-native'

export default function ImageViewer({imageSource}) {
  return <Image style={styles.Image} source={imageSource}></Image>;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});