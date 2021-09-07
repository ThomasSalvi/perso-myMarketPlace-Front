export const initialState = {
  allObjects: [
    {
      description: "test",
      imageUrl: "https://picsum.photos/400/300",
      price: 90,
      title: "titre",
      userId: "770"
    },
    {
      description: "test",
      imageUrl: "https://picsum.photos/400/300",
      price: 50,
      title: "titre",
      userId: "770"
    },
    {
      description: "test",
      imageUrl: "https://picsum.photos/400/300",
      price: 60,
      title: "titre",
      userId: "770"
    },
    {
      description: "test",
      imageUrl: "https://picsum.photos/400/300",
      price: 35,
      title: "titre",
      userId: "770"
    },
    {
      description: "test",
      imageUrl: "https://picsum.photos/400/300",
      price: 22,
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
