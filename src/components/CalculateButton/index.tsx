import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global'

interface IProps {
  onPress?(): void;
  text?: string;
}

export const CalculateButton: React.FC<IProps> = ({onPress, text}) => {
  return (
    <View>
       <TouchableOpacity
            onPress={onPress}
            accessibilityLabel="Learn more about this purple button"
          >
            <View style={globalStyles.calculatorButton}>
              <Text style={globalStyles.calculatorButtonText}>{text}</Text>
            </View>
          </TouchableOpacity>
    </View>
  )
}