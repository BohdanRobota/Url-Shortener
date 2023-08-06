import React from 'react';
import { Container, Spinner } from '@chakra-ui/react';

export const Loader = () => {
  return (
    <Container
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      marginTop={'70px'}
      width={'100%'}
    >
      <Spinner />
    </Container>
  );
};
