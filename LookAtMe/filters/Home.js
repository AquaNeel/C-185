import React from "react"; 
import { Text,View,SafeAreaView,StyleSheet,Platform,StatusBar,Image,TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
 export default class Main extends React.Component{
     render()
 { 
    return(
         <View style={styles.StyleSheet}> 
            <SafeAreaView style={styles.droidSafeArea}>
              
            </SafeAreaView>
            <View style={styles.headingContainer}>
             <View style={{flexDirection:"row",flexWrap:"wrap"}}>
              <Text style={styles.titleText1}>LOOK AT</Text><Text style={styles.titleText2}>ME</Text>
             </View>
             <View style={{flexDirection:"row",flexWrap:"wrap"}}>
              <Text style={styles.subHeading1}>TRY OUT</Text><Text style={styles.subHeading2}>OUR COOL FILTERS</Text>
             </View>
            </View>
            <View style={styles.contentContainer}>
             <View style={{flex:0.5}}>
                <Text style={styles.contentText}>Look At Me Is A Cool App Where You Can Expierence Cool FIlters With Your Phone! </Text>

             </View>
             <View style={{flexDirection:"row",flex:0.25}}>
               <View style={{flex:0.5}}>
               <Image source={require('../assets/hat-pic1.png')} style={{ height: 64, width: 160 }} />
               </View>
               <View style={{flex:0.5}}>
               <Image source={require('../assets/crown-pic1.png')} style={{ height: 64, width: 160 }} />
               </View>
               </View>
            </View>
            <View style={styles.buttonContainer}> 
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
                 <View style={styles.button}> 
                 <Text style={styles.buttonText}> Click Me To Try It Out Now!</Text>
                  </View> 
                  </TouchableOpacity> 
                  </View>
             </View> 
            ) 
             } 
             }
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#6278E4",
    },
    droidSafeArea:{
        marginTop:Platform.OS=="android"?StatusBar.currentHeight:0
    },
    headingContainer:{
        flex:0.2,
        alignItems:"center",
        justifyContent:"center"
    },
    titleText1:{
        fontSize:RFValue(30),
        fontWeight:"bold",
        color:"#EFB141",
        fontStyle:"italic",
        textShadowColor:"RGBA(0,0,0,0.75)",
        textShadowOffset:{width:-3,height:3}
    },
    titleText2:{
        fontSize:RFValue(30),
        fontWeight:"bold",
        color:"#EFB141",
        fontStyle:"italic",
        textShadowColor:"RGBA(0,0,0,0.75)",
        textShadowOffset:{width:-3,height:3},
        textShadowRadius:1
    },
    subHeading1:{
        fontSize:RFValue(20),
        color:"#EFB141",
        fontStyle:"italic",
        textShadowColor:"RGBA(0,0,0,0.75)",
        textShadowOffset:{width:-3,height:3},
        textShadowRadius:1
    },
    subHeading2:{
        fontSize:RFValue(20),
        color:"white",
        fontStyle:"italic",
        textShadowColor:"RGBA(0,0,0,0.75)",
        textShadowOffset:{width:-3,height:3},
        textShadowRadius:1
    },
    contentContainer: { 
        flex: 0.6,
         margin: RFValue(5), 
        borderRadius: RFValue(15),
        backgroundColor: "white",
         height: "100%",
         padding: RFValue(20) 
        },
         contentText: { 
            fontSize: RFValue(17), 
            fontStyle: 'italic', 
            fontWeight: "bold" 
        },
        buttonContainer: {
             flex: 0.2,
              justifyContent: "center",
               alignItems: "center" 
            },
            button: { 
                backgroundColor: "#efb141",
                 paddingLeft: RFValue(50),
                  paddingRight: RFValue(50),
                   paddingTop: RFValue(20),
                    paddingBottom: RFValue(20),
                     borderRadius: RFValue(20)
                     },
                     buttonText: { 
                        fontSize: RFValue(25),
                         fontStyle: 'italic',
                          color: "white", 
                          textShadowColor: 'rgba(0, 0, 0, 0.75)',
                           textShadowOffset: { width: -1, height: 1 }, 
                           textShadowRadius: 1 
                        }



})