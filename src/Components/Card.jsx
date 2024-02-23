import { useCardFetch } from '../hooks/useCardFetch'
import { CoffeeList } from './CoffeeList'

const URL_PREFIX =
  'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

export const Card = () => {
  const { data, isLoading, errors } = useCardFetch(URL_PREFIX)

  return (
    <>
      {isLoading ? (
        <h4>...Cargando</h4>
      ) : errors ? (
        <p>Ha ocurrido un ERROR {errors}</p>
      ) : (
        data &&
        data.map(coffee => (
          <CoffeeList
            key={coffee.id}
            id={coffee.id}
            popular={coffee.popular}
            image={coffee.image}
            name={coffee.name}
            price={coffee.price}
            rating={coffee.rating}
            votes={coffee.votes}
            available={coffee.available}
          />
        ))
      )}
    </>
  )
}
