import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

interface Props {
  setBase64Image: any;
  imageInit?: string;
}
const ImageAvatar = (props: Props) => {
  const {setBase64Image, imageInit = ''} = props;
  const [imageUri, setImageUri] = useState(imageInit); // state to store the selected image URI

  const handleSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo', // allow only photos
        quality: 1, // highest quality
        includeBase64: true,
      },
      (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorMessage) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else {
          setImageUri(response.assets[0].uri);
          setBase64Image(response.assets[0].base64 as string);
        }
      },
    );
  };

  return (
    <View style={styles.container} className="mt-6">
      {/* Border box with dashed border */}
      <TouchableOpacity
        style={[styles.imageContainer, imageUri && {borderWidth: 0}]} // remove border when image is selected
        onPress={handleSelectImage}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.imagePreview} />
        ) : (
          <Text style={styles.placeholderText}>Chọn ảnh</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 200, // Width of the container (taking screen width into account)
    height: 200, // Fixed height of 300
    borderColor: '#000',
    borderStyle: 'dashed', // Dashed border
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    backgroundColor: 'red',
    margin: 'auto',
    borderRadius: 32,
  },
  placeholderText: {
    color: '#888',
    fontSize: 18,
  },
});

export default ImageAvatar;
