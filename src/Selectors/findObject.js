const findObject = (state, slug) => {
  const oneObject = state.object.allObjects.find((testedPet) => {
    return testedPet.objectId == slug;
  });
  return oneObject;
};

export default findObject;
