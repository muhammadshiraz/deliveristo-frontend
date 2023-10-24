export const FETCH_DOG_IMAGES = 'FETCH_DOG_IMAGES';

interface FetchDogImagesAction {
  type: typeof FETCH_DOG_IMAGES;
  payload: any; // Define the payload type based on what you expect to receive
}

export type ActionTypes = FetchDogImagesAction;

const initialState = {
  dogImages: [],
};

const rootReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case FETCH_DOG_IMAGES:
      return { ...state, dogImages: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
