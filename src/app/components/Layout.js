import staticUrl from '../utils/staticUrl'

export default (props) => (
  <div>
    {props.children}
    <style global jsx>{`
      body {
        background-image: url(${staticUrl('img/main-bg.png')});
        margin: 0;
        overflow: hidden;
      }
    `}</style>
  </div>
)
