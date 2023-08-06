import React, { FC } from 'react';
import UrlForm from '../components/UrlForm';
import LinksTable from '../components/LinksTable/LinksTable';


export const Main: FC = () => {
  return (
    <>
        <UrlForm />
        <LinksTable />
    </>
  );
};
