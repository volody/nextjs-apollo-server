import { gql } from '@apollo/client';
import client from '../lib/apolloClient';

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

export async function getServerSideProps() {
  // Run a query on your existing Apollo Server
  const { data } = await client.query({
    query: gql`
      query GetHello {
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
  