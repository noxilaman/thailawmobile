
import { useState,useEffect, } from "react";
import { Text, View, useWindowDimensions, Image, StyleSheet,FlatList, SafeAreaView,TouchableOpacity, ScrollView } from 'react-native';
import RenderHtml from 'react-native-render-html';
import axios from "axios";

function LawScreen() {

    const [catdata,setCatdata] = useState([]);
    const [lawdata,setLawdata] = useState([]);
    const app_id = 1;


    useEffect(() => { 
        (async () => {
        try {
          const chk = await axios
            .get("https://cybereazy.com/aryalaw/web/api/getlawbycat?app_id="+app_id)
            .then(function (response) {
              if (response.status !== 200) {
                
              }else{
                console.log(response.data.dataList);
                setCatdata(response.data.dataList)
              }

            });

    
        } catch (err) {
          console.log(err);
        }
        try {
          const chk2 = await axios
            .get("https://cybereazy.com/aryalaw/web/api/getlawdata?app_id="+app_id)
            .then(function (response) {
              if (response.status !== 200) {
                
              }else{
                console.log(response.data.dataList);
                setLawdata(response.data.dataList)
              }

            });

    
        } catch (err) {
          console.log(err);
        }
      })();
    },[]);

    const styles = StyleSheet.create({
        container: {
          flex:1
        },
        Header: {
          flexDirection: 'row',
          padding: 10
        },
        logo: {
          width: 66,
          height: 58,
        },
        titleText: {
          flex:1,
          fontSize:22,
          fontWeight: 'bold'
        },
        headerButton: {
          textAlign: 'center',
          justifyContent: 'center'
        },
        item:{
          backgroundColor:'orange',
          padding: 5
        },
        itemText: {
          fontSize: 16,
          fontWeight: '500'
        },
        itemLaw:{
          backgroundColor:'blue',
          padding: 5
        },
        itemLawText: {
          fontSize: 16,
          fontWeight: '500'
        }
      });

    const { width } = useWindowDimensions();

    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <View style={styles.Header}>
            <Text style={styles.titleText}>
              รายการกฏหมาย
            </Text>
            </View>  
            <ScrollView>
            {
                catdata.map((item, key)=>(
                  <TouchableOpacity style={styles.item}> 
                    <Text style={styles.itemText}>
                            {item.c_name}
                    </Text>
                  </TouchableOpacity>
                ))
              }
     
            {
                lawdata.map((item, key)=>(
                  <TouchableOpacity style={styles.itemLaw}> 
                    <Text style={styles.itemLawText}>
                            {item.c_name}
                    </Text>
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
        </View>
        
      </SafeAreaView>
        
    );

}

export default LawScreen;