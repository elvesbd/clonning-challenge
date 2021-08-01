import ArticlePublication from '../AtirclePublication';
import CardProfile from '../CardProfile';
import CardInfo from '../CardInfo';
import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <Grid>
      <CardProfile />
      <ArticlePublication />
      <CardInfo />
    </Grid>
  )
}

export default Layout;
