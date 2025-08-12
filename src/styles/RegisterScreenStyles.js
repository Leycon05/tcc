import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.07,
  },
  
  backgroundEllipse: {
    position: 'absolute',
    width: width * 1.8,
    height: width * 1.8,
    left: width * -0.5,
    top: height * 0.7,
    borderRadius: 999,
  },
  
  title: {
    fontFamily: 'InriaSans-Bold',
    fontWeight: '700',
    fontSize: height * 0.04,
    lineHeight: height * 0.05,
    color: '#3B3939',
    textAlign: 'center',
    marginBottom: height * 0.04,
  },
  
  input: {
    width: '100%',
    height: height * 0.06,
    backgroundColor: '#F0F0F0',
    borderRadius: 35,
    paddingHorizontal: 20,
    marginBottom: height * 0.02,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: height * 0.02,
    color: '#3B3939',
  },
  
  mainButton: {
    width: width * 0.4,
    height: height * 0.05,
    backgroundColor: '#17ABF8',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  
  mainButtonText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: height * 0.02,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  
  footerText: {
    marginTop: height * 0.02,
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: height * 0.02,
    color: '#3B3939',
  },
  
  linkText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: height * 0.02,
    color: '#17ABF8',
    textTransform: 'uppercase',
  },
});