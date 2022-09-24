const handleLikeClick = (product) => {
  const liked = JSON.parse(localStorage.getItem("liked"));
  if (liked == null) {
    localStorage.setItem("liked", JSON.stringify([product]));
  } else if (!liked.some((p) => p.id === product.id)) {
    localStorage.setItem("liked", JSON.stringify([...liked, product]));
  }
};

export default handleLikeClick;