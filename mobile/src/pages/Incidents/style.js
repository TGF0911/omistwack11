import { StyleSheet } from 'react-native'


export default StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal: 24,
    paddingTop : 40,
       
  },
  header:{
    flexDirection : 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerText : {
    fontSize: 15,
    color: '#737380'
  },
  headerTextBold : {
    fontWeight:'bold'
  },
  title:{
    fontSize : 30,
    marginBottom : 16,
    marginTop:48,
    color: '#13131a',
    fontWeight : 'bold'
  },

  description:{
    fontSize:15,
    lineHeight:24,
    color: '#737380'
  },

  incidentList: {
    marginTop: 32,
  },
  Incident:{
    padding: 24,
    borderRadius: 8,
    backgroundColor= '#FFF',
    marginBotton: 16,
  },

  IncidentProperty:{
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  IncidentValue : {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },
  detailsButton : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText : {
    color: '#E02141',
    fontSize: 15,
    fontWeight : 'bold'
  }
})