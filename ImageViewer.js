import { Image, StyleSheet } from 'react-native'

export default function ImageViewer({ placeholderImageSource, selectImage }) {
  const image = selectImage ? { uri: selectImage } : placeholderImageSource

  return <Image style={styles.image} source={image}></Image>;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});