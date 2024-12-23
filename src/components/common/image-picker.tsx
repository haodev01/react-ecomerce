import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const {width} = Dimensions.get('window');

interface Props {
  setBase64Image: any;
}
const ImagePickerComponent = (props: Props) => {
  const {setBase64Image} = props;
  const [imageUri, setImageUri] = useState(null); // state to store the selected image URI

  const handleSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo', // allow only photos
        quality: 1, // highest quality
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
    <View style={styles.container}>
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
    height: 300,
  },
  imageContainer: {
    width: width - 40, // Width of the container (taking screen width into account)
    height: 300, // Fixed height of 300
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
    borderRadius: 8,
    resizeMode: 'cover',
  },
  placeholderText: {
    color: '#888',
    fontSize: 18,
  },
});

export default ImagePickerComponent;
