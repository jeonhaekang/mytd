// export default new 로 하는 방식 생각해보기
// 상황에 따라 react-addons-update 이용

// @USAGE
// const dispatch = useDispatch();
// const reducer = useSelector(state => state.{reducer of reducers.js});

const init_state = {
  info: {
    test: 1,
    test2: 2,
  },
  count: 1,
}

const SET_SAMPLE_INFO = "SET_SAMPLE_INFO"
const SET_SAMPLE_COUNT = "SET_SAMPLE_COUNT"

export default class SampleStore {
  static actionTypes = {
    SET_SAMPLE_INFO,
    SET_SAMPLE_COUNT,
  }

  static actions = {
    setSampleInfo: (info) => ({
      type: SET_SAMPLE_INFO,
      info,
    }),
    setSampleCount: (count) => ({
      type: SET_SAMPLE_COUNT,
      count,
    }),
  }

  static reduce = (state = init_state, action) => {
    switch (action.type) {
      case SET_SAMPLE_INFO:
        return {
          ...state,
          info: action.info,
        }
      case SET_SAMPLE_COUNT:
        return {
          ...state,
          count: action.count,
        }
      default:
        return state
    }
  }
}
