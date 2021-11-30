const findObject = (state, slug) => {
  const oneObject = state.user.posts.find((testedPet) => {
    return testedPet._id == slug;
  });
  return oneObject;
};

export default findObject;
