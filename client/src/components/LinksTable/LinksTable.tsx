import React from 'react';
import { TableContainer, Table, Thead, Tbody, Tr, Th, Text } from '@chakra-ui/react';
import { useUrlsQuery } from '../../hooks/useUrlsQuery';
import LinkTableItem from '../LinkTableItem';
import { Loader } from '../Loader';
import styles from './LinksTable.module.css';
import { Url } from '../../types/url.type';

const LinksTable = () => {
  const { data, isLoading, isSuccess } = useUrlsQuery();
  if (isLoading) {
    return <Loader />;
  }
  return data?.data.length > 0 ? (
    <TableContainer className={styles.tableContainer}>
      <Table className={styles.table} size="md">
        <Thead>
          <Tr>
            <Th>Short URL</Th>
            <Th>Full Url</Th>
            <Th isNumeric>Clicks</Th>
            <Th isNumeric></Th>
          </Tr>
        </Thead>
        <Tbody>
          {isSuccess &&
            data.data.map((urlItem: Url) => <LinkTableItem key={urlItem.urlCode} url={urlItem} />)}
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    <Text
      textAlign={'center'}
      fontSize={'2xl'}
      color="gray"
      width={'60%'}
      paddingTop={'100px'}
      margin={'0 auto'}
    >
      ShortURL is a free tool to shorten URLs and generate short links URL shortener allows to
      create a shortened link making it easy to share.
    </Text>
  );
};

export default LinksTable;
