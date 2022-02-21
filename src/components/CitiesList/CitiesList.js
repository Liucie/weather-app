import { Card } from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCity } from '../../redux/cities/cities-reducer';
import { citiesSelector } from '../../redux/cities/cities-selectors';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from './CitiesList.module.css';

export function CitiesList() {
  const items = useSelector(citiesSelector);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className={styles.list_title}>Your places</h2>
      <ul className={styles.list}>
        {items.map(cityData => (
          <li key={cityData.id} className={styles.item}>
            <Card
              data={cityData}
              onClick={() => dispatch(deleteCity(cityData.id))}
              buttonIcon={<DeleteOutlineIcon />}
            ></Card>
          </li>
        ))}
      </ul>
    </>
  );
}
