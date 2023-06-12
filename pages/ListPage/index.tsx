import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";

import { styles } from "./ListPage.styles";
import { usePokemonData } from "../../hooks/queries";
import { NavigationButtons } from "../../src/templates";

export default function ListPage({ navigation }: any): JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  const data = usePokemonData("pikachu");

  const togleeModal = (value: string) => {
    setModalVisible(!modalVisible);
  };

  const pokemons = [
    { property: "Base experience", value: data?.data?.base_experience },
    { property: "Base height", value: data?.data?.height },
    { property: "Order", value: data?.data?.order },
  ];

  return (
    <View style={styles.container}>
      {pokemons.map(({ property, value }) => (
        <TouchableOpacity
          onPress={() => togleeModal(value)}
          style={styles.item}
          key={property}>
          <Text style={styles.itemText}>{property}</Text>
        </TouchableOpacity>
      ))}
      <NavigationButtons navigation={navigation} type="List" />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <Text style={styles.modalText}>
            Base experience: {pokemons[0].value}
          </Text>
          <Text style={styles.modalText}>Base height: {pokemons[1].value}</Text>
          <Text style={styles.modalText}>Order: {pokemons[2].value}</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Close Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
