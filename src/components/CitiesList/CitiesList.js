import { connect } from 'react-redux';
import citiesActions from '../../redux/cities/cities-actions';
import { Card } from '../Card/Card';

export function CitiesList(cities, onDelete) {
  return (
    <ul>
      {cities.map(cityData => (
        <li key={cityData.id}>
          <Card data={cityData} onClick={() => onDelete(cityData.id)}></Card>
        </li>
      ))}
    </ul>
  );
}
// const mapStateToProps = (  { items }  )  => ({

//     contacts: getVisibleContacts(items),
//     });

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(citiesActions.deleteContact(id)),
});
export default connect(mapDispatchToProps)(CitiesList);
