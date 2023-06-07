import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fc00c4;
`;

const Button = styled.TouchableOpacity`
  padding: 10px 20px;
  background-color: #8f8fbb;
  border-radius: 4px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

const App = () => {
  return (
    <Container>
      <Title>Hello, world!</Title>
      <Button onPress={() => alert("Button pressed")}>
        <ButtonText>Press me!</ButtonText>
      </Button>
    </Container>
  );
};

export default App;
