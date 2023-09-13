import Container from '../Container/Container';
import DownloadAppButton from './DownloadAppButton';
import DownloadAppContent from './DownloadAppContent';
import DownloadAppImage from './DownloadAppImage';

const DownloadApp = () => {
  return (
    <Container>
      <div className='flex my-8 flex-col md:flex-row-reverse md:items-center'>
        <DownloadAppImage />
        <div className='md:w-1/2'>
          <DownloadAppContent />
          <DownloadAppButton />
        </div>
      </div>
    </Container>
  );
};

export default DownloadApp;
