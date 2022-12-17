import notFound from '../assets/monnotonne_sobble.gif'

const NotFound = () => {
  return (
    <div>
      <img src={notFound} alt="404" className="w-full" />
      <h3 className="text-center font-bold text-lg">No pokemons found with this name</h3>
    </div>
  );
}

export default NotFound;