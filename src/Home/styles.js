import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.color};
`;

export const Description = styled.Text`
  margin-top: 12px;
  font-style: italic;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.tag};
  padding: 8px 20px;
`;
