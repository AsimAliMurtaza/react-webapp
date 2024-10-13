import './card-list.styles.scss';
import Card from '../card/card.component';

const CardList = ({ monsters })=>(
    <div className='card-list' key={monsters.id}>
    {monsters.map((monster) => {
        return(
            <Card monster={monster}/>
            );  
        })}
    </div>
);
export default CardList;