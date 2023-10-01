import { Radio  } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <Radio 
        height="100"
        width="100"
        radius="9"
        colors={['#51E5FF', '#7DE2D1', '#FF7E6B']}
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
