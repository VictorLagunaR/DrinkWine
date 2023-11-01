import { StyleSheet } from "react-native";


export default StyleSheet.create({
    background: {
        flex: 1,
        
        color: 'white',
        backgroundColor: '#120F10',
        padding:20,
    },
    navigatorBar: {
        height:65,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#440C0C',
        borderTopWidth:0
    },
    text:{
        fontSize:16,
        color:'#fff',
        textAlignVertical:'center',
        textAlign:'center',
    },
    headerImage: {
        backgroundColor:"#440C0C",
        height:100,
        justifyContent:"center",
        alignItems: "center"
    },
    secao: {
        marginTop:20,
        alignItems:'baseline',
        justifyContent:"center",
        alignItems:"center"
    },
    tituloSecao: {
        color:'white',
        fontSize:33,
        textAlign:'center',
        paddingBottom:20,
        borderBottomWidth:1,
        borderBottomColor:"#fff9",
        width:'80%',
        marginBottom:20
    }
})