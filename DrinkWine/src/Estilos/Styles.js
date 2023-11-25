import { StyleSheet } from "react-native";


export default StyleSheet.create({
    background: {
        flex: 1,
        color: 'white',
        backgroundColor: '#120F10',
        padding:20,
    },
    backgroundSacola: {
        flex: 1,
        color: 'white',
        backgroundColor: '#120F10',
        padding:20,
        alignItems:"center",
        paddingTop:35,
        background:"red"
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
        width:"100%"
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
    tituloSacola: {
        color:'white',
        fontSize:33,
        textAlign:'center',
        paddingBottom:20,
        borderBottomWidth:1,
        borderBottomColor:"#fff9",
    },
    ofertas: {
        flexDirection:'row',
        gap:10,
        alignItems:"flex-start",
        justifyContent:"flex-start"
    },
    vinhoOferta: {
        backgroundColor:"#343434e0",
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
    },
    vinhosContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"flex-start",
        marginHorizontal:10
    },
    vinhoCategorizado: {
        backgroundColor:"#343434e0",
        alignItems:"center",
        justifyContent:"flex-start",
        width:"40%",
        height:200,
        fontSize:20,
        borderRadius:10,
        marginRight:10
        
    },
    cards:{
        gap:20,
        width:"100%"
    },
    card: {
        flexDirection:"row",
        flexDirection:"column",
        padding:10,
        backgroundColor:"#8D8D8D35",
        borderRadius:10,
        height:200,
        justifyContent:"space-between",
        position:"relative"
    },
    cardContainer: {
        alignItems:"center",
        justifyContent:"flex-start",
        flexDirection:"row",
        height:140,
        gap:10
    },
    cardImage:{
        height:"100%",
        width: 50,
        resizeMode:"contain"
    },
    cardNome: {
        fontSize:20,
        color:"white",
        fontWeight:"bold"
    },
    cardNomeSecundario: {
        color:"white"
    },
    cardBottom: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    cardQuantidade: {
        backgroundColor:"#D9D9D999",
        padding:5,
        borderRadius:10
    },
    cardPreco: {
        color:"white",
        fontWeight:"bold",
        fontSize:15
    },
    cardQuantidadeNum: {
        fontSize:18,
        color:"white"
    },
    cardDelete: {
        position:"absolute",
        top:10,
        right:10
    },
    cardDeleteImage: {
        width: 20,
        height:25
    }

})