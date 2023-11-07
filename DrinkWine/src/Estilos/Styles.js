import { StyleSheet } from "react-native";


export default StyleSheet.create({
    background: {
        flex: 1,
        color: 'white',
        backgroundColor: '#120F10',
        padding:20,
    },
    backgroundCatalogo: {
        flex: 1,
        color: 'white',
        backgroundColor: '#120F10',
        paddingHorizontal:20,
        paddingVertical:10
    },
    backgroundVinho: {
        flex: 1,
        color: 'white',
        backgroundColor: '#120F10',
    },
    navigatorBar: {
        height:65,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#460D0B',
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
    secaoVinhos: {
        marginTop:20,
        alignItems:'baseline',
        justifyContent:"center",
        alignItems:"flex-start",
        marginBottom:20
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
    },
    ofertas: {
        flexDirection:'row',
        gap:10,
        alignItems:"flex-start",
        justifyContent:"flex-start"
    },
    vinhoOferta: {
        backgroundColor:"#252222",
        alignItems:"center",
        justifyContent:"flex-start",
        width:130,
        height:200,
        fontSize:20,
        borderRadius:10,
        marginRight:10
        
    },
    vinhoOfertaImagem: {
        position:"absolute",
        bottom:40,
        width: 90,
        height:150,
        resizeMode:"contain"
    },
    vinhoPrincipal: {
        height:"100%",
        width:100,
        marginTop:25,
        marginLeft:10,
        resizeMode:"contain"
    },
    precoVinho: {
        fontSize: 38,
        fontWeight:"bold",
        color:"white"
    },
    botaoComprar: {
        backgroundColor:"#51CF4Fbf",
        height:50,
        width:"100%",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center"
    },
    textoComprar: {
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        color:"white"
    },
    bandeira: {
        position:"absolute",
        bottom:-5,
        right:0,
        height:50,
        width:80,
        borderRadius:10
    },
    nomeVinho: {
        fontSize:32,
        marginBottom: 5,
        color:"white"
    }, 
    nomeSecundario: {
        color:"white",
        fontSize:20
    },

    descricao: {
        color:"white",
        fontSize:18,
        textAlign:"auto"
    },
    vinhoBanner: {
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        height:200,
        marginVertical:15
    },
    vinhoBannerImagem: {
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center"
    },

    vinhoBannerTitulo: {
        textAlign:"center",
        color:"white",
        fontSize:30
    }

})