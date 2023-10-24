import { FETCH_DOG_IMAGES } from './actions';

interface FetchDogImagesAction {
  type: typeof FETCH_DOG_IMAGES;
  payload: any; // Define the payload type based on what you expect to receive
}

const initialState = {
  dogImages: [],
};

type ActionTypes = FetchDogImagesAction;

const rootReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case FETCH_DOG_IMAGES:
      return { ...state, dogImages: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
