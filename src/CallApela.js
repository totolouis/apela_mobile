// Vue où l'on affiche le numéro de téléphone
import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";
import { CheckBox, Button } from "react-native-elements";
import call from "react-native-phone-call";

const args = {
  number: "0808080808", // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #f6f5ae;
`;

const LegalView = styled.View`
  margin-top: 50px;
`;

const LegalText = styled.Text`
  text-align: center;
`;

class CallApela extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  render() {
    // Si state est coché, on affiche le numéro et on ne reaffiche pas la checkbox
    // Si state n'est pas coché, on affiche la checkBox
    return (
      <Container>
        {this.state.checked ? (
          <Icon.Button
            name="phone"
            backgroundColor="#D1603D"
            onPress={() => call(args).catch(console.error)}
          >
            <Text style={{ fontFamily: "Arial", fontSize: 15 }}>
              Appel nous !
            </Text>
          </Icon.Button>
        ) : (
          <CheckBox
            title="Je confirme avoir plus de 18 ans."
            uncheckedColor="#D1603D"
            checked={this.state.checked}
            onPress={() =>
              this.setState({
                checked: true
              })
            }
          />
        )}
        <LegalView>
          <LegalText>
            {
              "L'abus d'alcool est dangereux pour la santé, consommez avec modération."
            }
          </LegalText>
        </LegalView>
      </Container>
    );
  }
}

export default CallApela;
