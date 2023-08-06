import React, { useState } from 'react';
import { Button, Input, Container, Text } from '@chakra-ui/react';
import { useAddUrlQuery } from '../hooks/useAddUrlQuery';
import LastShortenLink from './LastShortedLink/LastShortenLink';


const UrlForm = () => {
  const [longUrl, setLongUrl] = useState<string>('');
  const { data: createdUrl, mutate: addUrl, isSuccess } = useAddUrlQuery();
  const handleAddUrl = () => {
    if (longUrl) {
      addUrl(longUrl);
    }
    setLongUrl('');
  };
  return (
    <>
      <Container
        marginTop={'100px'}
        width={'70%'}
        style={{ display: 'flex', flexDirection: 'column', minWidth: '60%', textAlign: 'center' }}
      >
        <Text marginBottom={'50px'} fontSize="5xl" color="gray">
          Shorten your link in one click
        </Text>
        <Container style={{ display: 'flex', minWidth: '100%' }}>
          <Input
            margin={'20px'}
            onChange={(e) => setLongUrl(e.target.value)}
            value={longUrl}
            placeholder="Input your long URL"
          />
          <Button onClick={handleAddUrl} minWidth={'200px'} margin={'20px'} colorScheme="linkedin">
            Shorten URL
          </Button>
        </Container>
      </Container>
      {isSuccess && <LastShortenLink {...createdUrl.data} />}
    </>
  );
};

export default UrlForm;
