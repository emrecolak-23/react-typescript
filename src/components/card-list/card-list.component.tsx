import { Monster } from '../../App';
import './card-list.styles.css';

import Card from '../card/card.component';

type CardListProps = {
  monsters: Monster[]
}

const CardList = ({monsters}: CardListProps) => {

    return (
      <div className="card-list">
        {monsters.map((item) => {
          return <Card key={item.id} monster={item} />;
        })}
      </div>
    );
}

export default CardList;
