import React from 'react';
import {Text, View, TouchableOpacity, Image, ImageSourcePropType} from 'react-native';
import { styles } from './styles';
interface IProps{
    text?: string;
    onPress?(): void;
};

export const Button: React.FC<IProps> = ({text, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
