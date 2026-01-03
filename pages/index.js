import Head from 'next/head'

export async function getStaticProps() {
  const fs = require('fs')
  const path = require('path')
  const file = path.join(process.cwd(), 'index.html')
  let html = ''
  try {
    html = fs.readFileSync(file, 'utf8')
  } catch (e) {
    html = '<!-- index.html not found in project root. Follow README steps to place it here. -->'
  }
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)
  const body = bodyMatch ? bodyMatch[1] : html
  return { props: { body } }
}

export default function Home({ body }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>TheRitebook</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </>
  )
}
