import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    alignSelf: 'flex-start',
    marginLeft: 25,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#0082C6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  simpleContainer: {
    flex: 1,
    backgroundColor: '#0082C6',
  },
  content: {
    padding: 40,
  },
  calculatorContent: {
    marginLeft: 10,
    marginRight: 10,
  },
  buttonList: {
    marginTop: 10,
  },
});
