const favorites = ['id-2', 'id-6'];
const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-6',
          name: 'Drinks',
          nodes: [],
        },
      ],
    },
    { id: 'id-17', name: 'Venihle', nodes: [] },
  ],
};

const markFavorites = (obj, favorite) => {
  const isFavourite = favorite.includes(obj.id);

  return {
    ...obj,
    isFavourite,
    nodes: obj.nodes.map(childNode => markFavorites(childNode, favorite)),
  };
};

const result = markFavorites(tree, favorites);

console.log(result);
