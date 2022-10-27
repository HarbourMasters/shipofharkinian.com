import Head from 'next/head';

export function MetaHeader(props) {
  var titleName = "";
  if (props.pageName == "Home") {
    titleName = titleName + "Ship of Harkinian";
  } else {
    titleName = "Ship of Harkinian - " + props.pageName;
  }

  return (
    <Head>
      <title>{titleName}</title>
      <meta name="description" content="Ship of Harkinian" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
