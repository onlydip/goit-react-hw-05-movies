import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <ThreeDots
        height="100"
        width="100"
        radius="9"
        color="blueviolet"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
        }}
        visible={true}
      />
    </>
  );
};
