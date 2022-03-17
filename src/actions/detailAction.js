import axios from 'axios';
import { gameDetailsUrl, gameScreenshotUrl } from '../api';

export const loadDetail = (id, short_screenshots) => async (dispatch) => {
  dispatch({
    type: 'LOADING_DETAIL',
  });

  const detailData = await axios.get(gameDetailsUrl(id));
  const screenShotData = await axios.get(gameScreenshotUrl(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      //screen: short_screenshots,
      screen: screenShotData.data,
    },
  });
};
