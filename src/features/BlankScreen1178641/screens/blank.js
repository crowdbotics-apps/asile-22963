import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {
    TextInput_5: "",
    TextInput_6: "",
    TextInput_85: "",
    TextInput_89: ""
  }
  render = () => (
    <View>
      <Image
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/3d3bdf9c-e1dd-4ec9-bfe5-6eac457cc935.jpg"
        }}
        style={styles.Image_3}
      />
      <Text style={styles.Text_75}>Sign in</Text>
      <TextInput
        placeholder="Email"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="Password"
        style={styles.TextInput_6}
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
      <Button
        title="Login"
        color="#9eb4f5"
        style={styles.Button_83}
        onPress={() => alert("Pressed!")}
      />
      <TextInput
        placeholder="New User? Sign Up"
        style={styles.TextInput_85}
        value={this.state.TextInput_85}
        onChangeText={nextValue => this.setState({ TextInput_85: nextValue })}
      />
      <TextInput
        placeholder="Admin? Sign In"
        style={styles.TextInput_89}
        value={this.state.TextInput_89}
        onChangeText={nextValue => this.setState({ TextInput_89: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  View_1: {},
  Image_3: { alignSelf: "center" },
  Text_75: {
    alignSelf: "center",
    fontSize: 19,
    fontFamily: "RobotoMono-Regular",
    textAlign: "center",
    textTransform: "uppercase",
    lineHeight: 20,
    letterSpacing: 1
  },
  TextInput_5: {
    width: "80%",
    marginTop: 20,
    alignSelf: "center",
    fontFamily: "RobotoMono-Regular",
    borderColor: "#6a89d2",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },
  TextInput_6: {
    width: "80%",
    alignSelf: "center",
    fontFamily: "RobotoMono-Regular",
    borderColor: "#6a89d2",
    borderWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderBottomWidth: 3
  },
  Button_83: {
    width: "94%",
    marginTop: 6,
    alignSelf: "flex-end",
    fontSize: 13,
    fontFamily: "RobotoMono-Bold",
    lineHeight: 24,
    letterSpacing: 1
  },
  TextInput_85: {
    width: "50%",
    marginTop: 0,
    marginBottom: 0,
    alignSelf: "flex-start",
    fontSize: 8,
    fontFamily: "Roboto-Regular"
  },
  TextInput_89: { marginTop: 0, fontSize: 8, fontFamily: "Roboto-Regular" }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
