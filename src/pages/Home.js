import { SearchForm } from '../components/SearchForm/SearchForm';
import { CitiesList } from '../components/CitiesList/CitiesList';

export function Home() {
  return (
    <div className="container">
      <h1 className="title">Weather</h1>
      <h2 className="second_title">Welcome to our application!</h2>
      <p className="text">
        Here You can find info about the weather in over 200 000 cities. You can
        add the city to Your list and always be aware of the weather at your
        favourite places. Try now!
      </p>
      <SearchForm></SearchForm>
      <CitiesList></CitiesList>
    </div>
  );
}
