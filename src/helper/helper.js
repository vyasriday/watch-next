const POSTER_PATH = 'https://image.tmdb.org/t/p/w300';

export function imageUrl(poster_path){
  const imagePath = `${POSTER_PATH}/${poster_path}`;
  return imagePath;
}

export function itemUrl(category, id){
  return `/${category}/${id}`;
}