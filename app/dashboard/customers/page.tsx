import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Customers',
};
type Props = {};

const page = (props: Props) => {
  return <p>Customers Page</p>;
};

export default page;
