import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import styled from '@emotion/styled';

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BlogTitle = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
`;

const title: string = 'Next.js plus TypeScript';

const List = styled.ul`
  list-style: square;
`;

const ListItem = styled.li`
  padding: 10px;
  text-transform: capitalize;
  margin: 40px 0;
  cursor: pointer;
  color: #252525;
  &:hover {
    background: #f0f0f0;
  }
`;

const PostTitle = styled.h2`
  margin: 0;
  font-size: 24px;
`;

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(posts);

  return (
    <Container>
      <Head>
        <title>{title}</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <BlogTitle>{title}</BlogTitle>
        <List>
          {posts.map((post) => (
            <ListItem key={post.id}>
              <PostTitle>{post.title}</PostTitle>
            </ListItem>
          ))}
        </List>
      </Main>
    </Container>
  );
}

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Called at build time. Could do direct database calls here.
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await response.json();

  return {
    props: {
      posts,
    },
  };
};
