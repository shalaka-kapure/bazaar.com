import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import payment from "../payment.jpeg";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Logo = styled.h1``;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;
const Payment = styled.img`
width:120%;
`


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BAZAAR.</Logo>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Home Decor</ListItem>
          <ListItem>Electronics</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Track Order</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{marginRight: "10px"}}/> 622 Dixie Path, South California 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight: "10px"}}/> +1 234 567 89
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight: "10px"}}/> feedback@bazaar.com
        </ContactItem>
        <Payment src={payment}/>
      </Right>
    </Container>
  );
};

export default Footer;
