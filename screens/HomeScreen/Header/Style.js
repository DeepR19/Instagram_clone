import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    body: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#000',
    },
    mainHeaderContainer: {
        color : "#fff",
        backgroundColor: "#000",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        flexDirection: "row",
        marginTop: 30, 
    },
    mainHeader: {
        backgroundColor: "#000",
        color: "#fff",
        resizeMode: "contain",
        paddingLeft:20,
        paddingRight:20,
    },
    iconsContainer:{
        justifyContent: "space-between",
        flexDirection: "row",
        paddingRight: 20,
        color: '#fff'
    },
    icon:{
        height: 30,
        width: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    unreadBadge:{
        backgroundColor: "#ff3250",
        position: 'absolute',
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
    },
    unreadBadgeText:{
        color: 'white',
        fontWeight: '600'
    }
});