import *as React from 'react';
import axios from 'axios'
import { View, Text, StyleSheet, Alert } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        planet_data: [],
    };
}

componentDidMount() {
    this.getPlanetData()
}

getPlanetData = () => {
    axios
        .get("http://127.0.0.1:5000/terrestial")
        .then(response => {
            console.log(response.data.Data)
            this.setState({ planet_data: response.data.Data })
        })
        .catch(error => {
            Alert.alert(error.message)
        })
}


  render() {
    return (
      <View>
        <Text>Planet Data</Text>
        <View>
          {this.state.planet_data.map(item => {
            return (
           <Text>{item[1]}</Text>
              
            );
          })}
        </View>
      </View>
    );
  }
}