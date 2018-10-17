import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div className='major'>
      <h1>Next.js + Electron.js</h1>
      <h2>Create apps, the morden way</h2>
      <p>Check the following if you are</p>
      <ul>
        <li>new to JavaScript: <a href='https://javascript.info/'>The Modern JavaScript Tutorial</a></li>
        <li>new to Node.js: <a href='https://nodeschool.io/'>Node School</a></li>
        <li>new to React.js: <a href='https://reactjs.org/tutorial/tutorial.html/'>React Tutorial</a></li>
        <li>new to Next.js: <a href='https://nextjs.org/learn/'>Learn Next.js</a></li>
        <li>new to Electron.js: <a href='https://github.com/electron/electron-api-demos'>Electron API Demos</a></li>
      </ul>
    </div>
    <style jsx>{`
      .major {
        position: fixed;
        top: 20%;
        width: 100%;
        text-align: center;
        color: white;
        font-family: Arial;
      }

      ul {
        display: inline-block;
        text-align: left;
      }
    `}</style>
  </Layout>
)
