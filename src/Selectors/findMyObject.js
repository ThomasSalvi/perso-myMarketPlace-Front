const findMyObject = (state) => {
  const oneObject = state.user.posts.filter((testedObject) => {
    return testedObject.userId == state.user.userId;
  });
  return oneObject;
};

export default findMyObject;
