import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {},
  box: {
    backgroundColor: 'lightgray',
    height: 100,
    margin: 10,
    borderStyle: 'dashed',
    borderColor: 'darkslategray',
    borderWidth: 1,
  },
  customBtn: {
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    borderColor: '#666',
    borderStyle: 'solid',
    borderWidth: 2,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  add: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
    paddingLeft: 10,
  },
  name: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: '400',
    marginTop: 15,
    paddingLeft: 10,
  },
  rating: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    fontWeight: '500',
    fontSize: 20,
    color: 'orange',
  },
})
