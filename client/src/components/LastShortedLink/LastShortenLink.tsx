import React from 'react';
import { Url } from '../../types/url.type';
import { Button, Link, Text, useToast } from '@chakra-ui/react';
import styles from './LastShortedLink.module.css';

const LastShortenLink = ({ shortUrl }: Url) => {
  const toast = useToast();
  const copyClickboardHandle = () => {
    navigator.clipboard.writeText(shortUrl);
    toast({
      status: 'success',
      title: 'Link coppied',
      position: 'top'
    });
  };
  return (
    <div className={styles.container}>
      <Text fontSize="4xl" color="gray">
        Last shortened link:
      </Text>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link color="teal.500" target="blank" href={shortUrl}>
          {shortUrl}
        </Link>
        <Button onClick={copyClickboardHandle} background={'teal'} color="white" marginLeft={'25px'} size={'md'}>
          Copy
        </Button>
      </div>
    </div>
  );
};

export default LastShortenLink;
