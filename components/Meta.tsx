import Head from "next/head";

interface MetaInterface {
  title: string;
  description: string;
  keywords: string;
  locale: string;
  type: string;
  card: string;
  image: string;
  url: string;
}

const Meta = ({ title, description, keywords, locale, type, card, image, url }: MetaInterface) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/** Open Graph Meta Tags */}
      <meta property="og:locale" content={locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/** Twitter Card Meta Tags */}
      <meta name="twitter:card" content={card} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:creator" content="Giro Calvario" />

      {/** Google+ */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={url} />
    </Head>
  );
};

Meta.defaultProps = {
  title: "Giro Calvario",
  description: "A single website with lots of awesome and cool stuffs for students and developers.",
  keywords:
    "Gian Roi Calvario, Giro Calvario, students, developers, cool stuffs, awesome stuffs, web development, programming",
  locale: "en_US",
  type: "article",
  card: "summary",
  image: "/images/giro-calvario.jpg",
  url: "https://girocalvario.vercel.app/",
};

export default Meta;
