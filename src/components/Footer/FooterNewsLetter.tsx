const FooterNewsLetter = () => {
  return (
    <div className='py-8 md:py-0'>
      <h2 className='text-darkViolet-1000 text-xl capitalize font-bold'>
        Join Our NewsLetter
      </h2>
      <div className='lg:flex lg:px-2 lg:bg-white lg:rounded-full lg:py-2 lg:mt-4'>
        <input
          type='text'
          className='py-4 px-8 rounded-full border text-lg border-darkViolet-400 w-full mt-6 lg:py-3 lg:mt-0 lg:border-none focus:outline-none'
          placeholder='Your email address'
        />
        <button className='mt-4 bg-darkViolet-1000 px-8 py-4 text-white rounded-full w-full lg:py-3 lg:px-0 lg:mt-0'>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default FooterNewsLetter;
