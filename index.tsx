
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hair Friends</title>
        <meta name="description" content="Comparateur de greffes capillaires en France." />
      </Head>
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Bienvenue sur Hair Friends</h1>
        <p>
          Le site de référence pour comparer les cliniques de greffe de cheveux en France.
        </p>
      </main>
    </>
  );
}
