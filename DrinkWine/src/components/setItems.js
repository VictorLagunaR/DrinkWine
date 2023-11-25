import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';

const setItems = async (vinho) => {
    const [vinhos, setVinhos] = useState([]);
    // const newWines = [...vinhos, vinho]
    // try {
    //   await AsyncStorage.setItem("vinhos", JSON.stringify(newWines)).then(() => {
    //     setVinhos(newWines)
    //   })
    // } catch (error) {
    //   console.log(error)
    // }
  }

export default setItems;