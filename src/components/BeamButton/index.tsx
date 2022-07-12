import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import { styles } from './styles';
interface IProps{
    text?: string;
    onPress?(): void;
    image?: any;
};

export const Button: React.FC<IProps> = ({text, onPress, image}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          {image && <Image source={image} style={styles.image} />}
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
