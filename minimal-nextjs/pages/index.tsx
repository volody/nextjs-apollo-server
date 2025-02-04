import { gql } from '@apollo/client';
import type { GetServerSidePropsContext } from 'next';
import clientFactory from '../lib/apolloClient';

type HomeProps = {
  greeting: string;
};

export default function Home({ greeting }: HomeProps) {
  return (
    <div>
      <h1>{greeting}</h1>
      <p>This page is rendered on the server.</p>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {

  const sessionKey = context.req.cookies['sessionKey'] || '';

  // Create an Apollo Client instance that includes the session key in its headers.
  const client = clientFactory(sessionKey); 

  // Run a query on your existing Apollo Server
  const { data } = await client.query({
    query: gql`
      query {
        hello
      }
    `,
  });

  return {
    props: {
      greeting: data.hello,
    },
  };
}
  