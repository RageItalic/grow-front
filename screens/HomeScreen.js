import React from "react";
import { ScrollView } from "react-native";

import styled from "styled-components";

import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <TitleBar>
          <TextContainer>
            <TitleText>
              Hi,
              <ColoredText> Andy</ColoredText>
            </TitleText>
          </TextContainer>
          <Cover>
            <ProfileImg source={require("../assets/images/robot-dev.png")} />
          </Cover>
        </TitleBar>
        <FactContainer>
          <Fact>
            <LargeText>$6000</LargeText>
            <SmallText>Total Invested</SmallText>
          </Fact>
        </FactContainer>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background: #fff;
`;

const Text = styled.Text`
  font-size: 15px;
`;

const TitleBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  top: 40px;
`;

const TextContainer = styled.View`
  left: 40;
`;

const TitleText = styled.Text`
  font-size: 35px;
  color: black;
`;

const ColoredText = styled.Text`
  font-size: 35px;
  color: #38d39f;
`;
const Cover = styled.View`
  width: 56px;
  height: 56px;
  box-shadow: 0px 0px 15px #c2c2c2;
  right: 40px;
`;

const ProfileImg = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 28px;
`;

const FactContainer = styled.View`
  left: 40;
  flex-direction: row;
  margin-top: 40px;
`;

const Fact = styled.View``;

const LargeText = styled.Text`
  font-size: 35px;
`;

const SmallText = styled.Text`
  font-size: 18px;
`;
