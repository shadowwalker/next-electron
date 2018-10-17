import staticUrl from '../utils/staticUrl'

export default (props) => (
  <div>
    <style global jsx>{`
      body {
        background-image: url(${staticUrl('img/main-bg.png')});
        margin: 0;
        overflow: hidden;
      }
    `}</style>
    {props.children}
    <footer>
      <p>License: <a href='https://choosealicense.com/licenses/mit/'>MIT</a> | Author: <a href='mailto:weiwio@outlook.com'>Wei Wang</a> | Website: <a href='https://weiw.io'>weiw.io</a></p>
    </footer>
    <style jsx>{`
      footer {
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0%;
        text-align: center;
        color: white;
        font-family: Arial;
      }
    `}</style>
  </div>
)
