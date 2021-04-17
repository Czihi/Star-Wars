const initialCharacters = {
  loading: true,
  next: "https://swapi.dev/api/people/",
  characters: [],
};

function CharactersReducer(state = initialCharacters, action: any) {
  switch (action.type) {
    case "CHARACTER_SET":
      const newCharacters = [...state.characters, ...action.characters];
      action.characters = newCharacters;
      return {
        ...state,
        characters: action.characters,
        next: action.next,
        loading: action.loading,
      };
    case "CHARACTER_LOADING":
      return { ...state, loading: action.loading };

    default:
      return state;
  }
}

export default CharactersReducer;
