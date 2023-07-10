import PageMain from '../pages/page-main/page-main';

type AppProps = {
  offersCount: number;
}

const App = ({ offersCount }: AppProps): JSX.Element => (
  <PageMain offersCount = {offersCount}/>

);


export default App;
