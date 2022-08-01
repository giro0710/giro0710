import Head from "next/head";

interface MetaInterface {
  title: string;
  description: string;
  keywords: string;
}

const Meta = ({ title, description, keywords }: MetaInterface) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      meta
    </Head>
  );
};

Meta.defaultProps = {
  title: "Giro Calvario",
  description: "A single website with lots of awesome and cool stuffs for students and developers.",
  keywords:
    "Gian Roi Calvario, Giro Calvario, students, developers, cool stuffs, awesome stuffs, web development, programming",
};

export default Meta;
