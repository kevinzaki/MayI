import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import ScoresTable from "./ScoresTable";

/**
 * ScoresModal
 * Button that when clicked renders a Modal that displays game scores.
 */
function ScoresModal() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScoresTable />
            <TouchableHighlight
              style={styles.ButtonStyle}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.btnTxt}>CLOSE</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.textColor}>SCORES</Text>
      </TouchableHighlight>
    </View>
  );
}

/** Styling for ScoresModal */
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modalView: {
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    width: 100,
    alignSelf: "flex-end",
    backgroundColor: "#1f1f1f",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.81
  },
  textColor: {
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
    fontFamily: "HelveticaNeue-CondensedBold",
    fontSize: 18
  },
  modalText: {
    textAlign: "center"
  },
  ButtonStyle: {
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: "#212121",
    fontWeight: "bold",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.41
  },
  btnTxt: {
    fontFamily: "HelveticaNeue-CondensedBold",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  }
});

export default ScoresModal;
