const favorites = ['id-2'];
const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [],
    },
  ],
};

export const markFavorites = (obj, favorite) => {
  const isFavorite = favorite.includes(obj.id);

  return {
    ...obj,
    isFavorite,
    nodes: obj.nodes.map(childNode => markFavorites(childNode, favorite)),
  };
};

const result = markFavorites(tree, favorites);

console.log(result);
