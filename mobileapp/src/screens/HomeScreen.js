import { createStore } from 'redux'
import { useState,useEffect, } from "react";
import { Text, View, useWindowDimensions, Image, StyleSheet } from 'react-native';
import RenderHtml from 'react-native-render-html';
import axios from "axios";

function HomeScreen() {

    const [logo,setLogo] = useState("");
    const [name,setName] = useState("");
    const [desc,setDesc] = useState("");
    const [appid,setAppid] = useState("");
    const [isLoading,setIsLoading]  = useState(true);


    useEffect(() => { 
        (async () => {
        try {
          const chk = await axios
            .get("https://cybereazy.com/aryalaw/web/api/getappdata?android_id=com.kodmay.thaicriminallaw")
            .then(function (response) {
              if (response.status !== 200) {
                
              }else{
                console.log(response.data.dataList);
                setLogo(response.data.dataList[0].app_img);
                setName(response.data.dataList[0].name);
                setDesc(response.data.dataList[0].app_desc);


                setAppid(response.data.dataList[0].id);
                setIsLoading(false);
              }

            });

    
        } catch (err) {
          console.log(err);
        }
      })();
    },[]);

    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 150,
          height: 150,
        },
        logo: {
          width: 66,
          height: 58,
        },
      });

    const configureStore = () => {
      return createStore(appid);
    }

    const { width } = useWindowDimensions();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {logo !== '' && (
            <Image
            style={styles.tinyLogo}
        source={{uri: logo}}
      />
      )}
      <Text>{name}</Text>
      <RenderHtml
      contentWidth={width}
      source={{html: desc}}
    />
    </View>
    );

}

export default HomeScreen;