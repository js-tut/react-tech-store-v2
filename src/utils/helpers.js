// helper functions
export function featuredProducts(data) {
  return data.filter(item => {
    return item.featured === true;
  });
}
