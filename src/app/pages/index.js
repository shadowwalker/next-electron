import Layout from '../components/Layout'

export default () => (
  <Layout>
    <div className='major'>
      <h1>Next.js + Electron.js</h1>
    </div>
    <style jsx>{`
      .major {
        position: fixed;
        height: auto;
        top: 30%;
        left: 0px;
        width: 100%;
        opacity: 1;
        text-align: center;
      }
    `}</style>
  </Layout>
)
