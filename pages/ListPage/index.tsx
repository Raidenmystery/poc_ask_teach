import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";

//import { styles } from "./ListPage.styles";

export default function ListPage() {
  const [modalVisible, setModalVisible] = useState(false);

  const togleeModal = () => {
    setModalVisible(!modalVisible);
    console.log("imprimio");
  };


  const pokemons = [
    { name: "Pikachu", value: "pikachu" },
    { name: "Charmander", value: "charmander" },
    { name: "Bulbasaur", value: "bulbasaur" },
  ];

  return (
    <View style={styles.container}>
      {pokemons.map(({name, value}) => (
        <>
          <TouchableOpacity
            onPress={togleeModal}
            style={styles.item}
            key={name}>
            <Text style={styles.itemText}>{name}</Text>
          </TouchableOpacity>
          <Modal visible={modalVisible} animationType="slide">
            <View style={styles.modal}>
              <Text style={styles.modalText}>Modal for Element 1</Text>
              <TouchableOpacity
                onPress={togleeModal}
                style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Close Modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
