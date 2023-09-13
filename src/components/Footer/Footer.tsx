import Container from '../Container/Container';
import FooterCall from './FooterCall';
import FonterContainer from './FooterContainer';
import FooterNewsLetter from './FooterNewsLetter';
import FooterSupport from './FooterSupport';
import FooterContact from './FooterContact';
import FooterCopyright from './FooterCopyright';
const Footer = () => {
  return (
    <Container styles='bg-whiteFloral'>
      <div className='md:hidden'>
        <FonterContainer>
          <FooterCall />
          <FooterNewsLetter />
          <div className='flex py-8 md:py-0'>
            <FooterSupport />
            <FooterContact />
          </div>
          <FooterCopyright />
        </FonterContainer>
      </div>
      <div className='sm:hidden md:block'>
        <FonterContainer>
          <FooterCall />
          <FooterSupport />
          <FooterContact />
          <FooterNewsLetter />
        </FonterContainer>
        <FooterCopyright />
      </div>
    </Container>
  );
};

export default Footer;
