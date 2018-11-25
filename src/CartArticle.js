// représente un article

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { GlobalConsumer } from 'store/GlobalProvider';
import Icon from 'react-native-vector-icons/FontAwesome';

const Container = styled.View`
  backgroundColor: #f6f5ae;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  borderBottomColor: lightgrey;
  borderBottomWidth: 1;
  borderStyle: solid;
`;

const ImageContainer = styled.Image`
  width: 50;
  height: 50;
  margin-vertical: 5;
  margin-right: 30;
`;

const TextContainer = styled.View`
  flex: 1;
  flex-direction: column;
`;

const Quantity = styled.Text`
  borderWidth: 1;
  borderStyle: solid;
  borderColor: red;
  paddingVertical: 3;
  paddingHorizontal: 3;
  backgroundColor: white;
`;

const IconContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

// Functionnal component : on utilise cela lorsqu'on a pas besoin du lifecycle du component
class CartArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.article.quantity,
    };
  }

  render() {
    const { article } = this.props;
    return (
      <Container>
        <ImageContainer source={{uri: article.ImageURL}} />
        <TextContainer>
          <Text style={{ color: 'black' }}>{article.Name}</Text>
          <Text style={{ color: 'black' }}>Prix : {article.Price}€</Text>
        </TextContainer>
        <GlobalConsumer>
          {({ removeArt, updateQuantity }) => (
            <IconContainer>
              <Icon
                name="trash"
                onPress={() => removeArt(article.ID)}
                type="font-awesome"
                color="black"
                size={30}
              />
              <Icon
                name="minus-square"
                onPress={() => updateQuantity(article, false)}
                type="font-awesome"
                color="black"
                size={30}
              />
            </IconContainer>
          )}
        </GlobalConsumer>
        {<Quantity>{article.quantity}</Quantity>}
      </Container>
    );
  }
}

export default CartArticle;


// <Text style={{ color: 'black' }}>{article.description}</Text>
