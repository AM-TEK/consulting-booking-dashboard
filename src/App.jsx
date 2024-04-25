import styled from "styled-components"
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button"
import Input from "./ui/Input"
import Heading from "./ui/Heading"
import Row from "./ui/Row"


const StyledApp = styled.div`
  background-color: beige;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">Consultancy Dashboard</Heading>
            <div>
              <Heading as="h2">Book a room at our offices or virtually</Heading>
              <Button>Check in</Button>
              <Button variation="secondary" size="small">Check out</Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form action="">
              <Input type="number" placeholder="Number of clients" />
              <Input type="number" placeholder="Number of clients" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  )
}

export default App