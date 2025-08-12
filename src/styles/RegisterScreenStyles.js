import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  
  // Apenas a elipse de fundo usa posicionamento absoluto
  backgroundEllipse: {
    position: 'absolute',
    width: width * 1.8,
    height: width * 1.8,
    left: width * -0.5,
    top: height * 0.7,
    borderRadius: 999,
  },
  
  header: {
    backgroundColor: '#00A9FF',
    height: height * 0.08,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.015,
  },
  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
 

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.07,
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
    width: 183.57,
    height: 46.07,
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

  footer: {
    width: '100%',
    height: height * 0.20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: height * 0.02,
  },

  footerText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: height * 0.03,
    lineHeight: height * 0.045,
    color: '#FFFFFF',
    marginBottom: height * 0.01,
  },

  secondaryButton: {
    width: width * 0.5,
    height: height * 0.05,
    borderColor: '#FFFFFF',
    borderWidth: 1.45,
    borderRadius: 72,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondaryButtonText: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    fontSize: height * 0.018,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});