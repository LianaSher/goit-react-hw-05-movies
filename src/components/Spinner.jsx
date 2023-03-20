import { Oval } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <Oval
      height={40}
      width={40}
      color="#483d8b"
      wrapperStyle={{
        marginTop: '10px',
        marginLeft: '100px',
        marginRight: 'auto',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#483d8b"
      strokeWidth={8}
      strokeWidthSecondary={8}
    />
  );
};
