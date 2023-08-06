import React from 'react';
import { Tr, Td, Link, Button, useToast } from '@chakra-ui/react';
import { useDeleteUrlQuery } from '../hooks/useDeleteUrl';
import TrashBin from '../components/UI/TrashBin';
import { Url } from '../types/url.type';

interface LinkTableItemProps {
  url: Url;
}

const LinkTableItem = ({ url }: LinkTableItemProps) => {
  const { mutate: deleteUrl } = useDeleteUrlQuery();
  const toast = useToast();
  const deleteUrlHandler = () => {
    deleteUrl(url.urlCode);
  };
  const copyClickboardHandle = () => {
    navigator.clipboard.writeText(url.shortUrl);
    toast({
      status: 'success',
      title: 'Link coppied',
      position: 'top'
    });
  };

  return (
    <Tr key={url.urlCode}>
      <Td style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link color="teal.500" target="blank" href={url.shortUrl}>
          {url.shortUrl}
        </Link>
        <Button
          onClick={copyClickboardHandle}
          background={'teal'}
          color="white"
          marginLeft={'25px'}
          size={'md'}
        >
          Copy
        </Button>
      </Td>
      <Td overflow={'auto'} maxWidth={'100%'}>
        <Link color="teal.500" target="blank" href={url.longUrl}>
          {url.longUrl}
        </Link>
      </Td>
      <Td textAlign={'right'}>{url.clickCount}</Td>
      <Td>
        <Button onClick={deleteUrlHandler} background={'tomato'} color="white">
          <TrashBin />
        </Button>
      </Td>
    </Tr>
  );
};

export default LinkTableItem;
