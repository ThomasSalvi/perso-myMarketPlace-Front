export const initialState = {
  allObjects: [
    {
      description: "test",
      imageUrl: "http://www.mandysam.com/img/random.jpg",
      price: 90,
      title: "titre",
      userId: "770"
    },
    {
      description: "test",
      imageUrl: "http://www.mandysam.com/img/random.jpg",
      price: 90,
      title: "titre",
      userId: "770"
    },
    {
      description: "test",
      imageUrl: "http://www.mandysam.com/img/random.jpg",
      price: 90,
      title: "titre",
      userId: "770"
    },
]
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
