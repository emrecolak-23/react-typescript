import './card-list.styles.css';

import { Component } from 'react';
import Card from '../card/card.component';

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    );
  }
}

export default CardList;
