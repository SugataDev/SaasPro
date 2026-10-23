import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import ListItem from "../components/ListItem";
import Button from "../components/Button";
import Logo from "../assets/logo.png";

const Navber = () => {
  return (
    <nav className="bg-[#0D554C] py-5.5">
      <Container>
        <Flex className="justify-between items-center">
          <Image src={Logo} alt="Logo" />

          <Flex className="gap-x-9 items-center">
            <ul className="flex gap-x-7.5">
              <ListItem type={true} text="Home" />
              <ListItem type={true} text="Pages" />
              <ListItem text="About Us" />
              <ListItem text="Services" />
              <ListItem text="Blog" />
              <ListItem text="Contact" />
            </ul>
            <Button
              classname="bg-transparent py-2.5! px-5.75! hover:bg-secondary hover:border-amber-50 border-white hover:text-white text-white"
              text="Let's talk"
            />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navber;
