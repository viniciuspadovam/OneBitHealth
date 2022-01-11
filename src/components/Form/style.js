import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    bottom: 0,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    marginBottom: 20,
    padding: 10,
    paddingTop: 0,
  },
  formLabel: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
  },
  formInput: {
    width: '90%',
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    height: 40,
    margin: 12,
    paddingLeft: 15,
  },
  buttonCalculator: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#ad1717',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    marginTop: 10,
  },
  txtButtonCalculator: {
    fontSize: 20,
    color: '#fff',
  },
  errorMessage: {
    fontSize: 12,
    color: 'red',
    fontWeight: 'bold',
    paddingLeft: 20,
  },
});

export default styles;
