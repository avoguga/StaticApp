import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../styles/global';

interface IProps {
  text?: string;
}

export const Header: React.FC<IProps> = ({text}) =>  {
  return (
    <View style={globalStyles.header}>
      <Text style={globalStyles.headerTitle}>{text}</Text>
    </View>
  );
}


export const SubHeader: React.FC<IProps> = ({text}) =>  {
  return (
    <View style={globalStyles.subHeader}>
      <Text style={globalStyles.subHeaderTitle}>{text}</Text>
    </View>
  );
}

