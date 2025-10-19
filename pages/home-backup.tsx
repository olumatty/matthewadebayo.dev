export default function HomePage() {
  if (typeof window !== 'undefined') {
    window.location.replace('/blog');
  }
  return null;
}

export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/blog',
      permanent: false,
    },
  };
}