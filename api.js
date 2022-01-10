import { API_KEY } from './config';
const genres = {
  12: 'Adventure',
  14: 'Fantasy',
  16: 'Animation',
  18: 'Drama',
  27: 'Horror',
  28: 'Action',
  35: 'Comedy',
  36: 'History',
  37: 'Western',
  53: 'Thriller',
  80: 'Crime',
  99: 'Documentary',
  878: 'Science Fiction',
  9648: 'Mystery',
  10402: 'Music',
  10749: 'Romance',
  10751: 'Family',
  10752: 'War',
  10770: 'TV Movie',
};

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
const getImagePath = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

export const getMovies = async () => {
  const { results } = await fetch(API_URL).then((x) => x.json());
  const mo2=[
    {
        key: 1,
        title: "MR GOZIE",
      poster: "https://i.ibb.co/m5hRhZr/Tupac-2pac-Shakur-Biography-Age-Death-Net-Worth-Wife-Kids-Daughter-Songs-Movies-Quotes-Album-1-650x6.jpg",
      backdrop:"https://i.ibb.co/JQ7dcHv/1-hero-gettyimages-1125955705.jpg" ,
      rating: "4,000,000",
      description:" Young legend in the making,enterpreneur extraordinaire",
      releaseDate: "release_date",
      genres: "genre_ids.map((genre) => genres[genre])",

    },
    {
       key: 2,
        title: "JAY Z",
      poster: "https://i.ibb.co/9H8DJn0/images.jpg",
      backdrop:"https://i.ibb.co/LY4xX1g/Whats-App-Image-2022-01-06-at-2-33-12-PM-6.jpg" ,
      rating: "24,000,000",
      description:" JAYZ ,business and music mogul.cjdvjkdbsvhjksb an cnsac vkja kasn vnas vnas vkas vkasd vkajsd v",
      releaseDate: "release_date",
      genres: "genre_ids.map((genre) => genres[genre])",

    },
    {
       key: 3,
        title: "MR SNOW",
      poster: "https://i.ibb.co/zRzKTW3/sn.jpg",
      backdrop:"https://i.ibb.co/wQ7nLL9/markbg.jpg" ,
      rating: "2,000,000",
      description:" VNKLAVNKLNVKL Kncsdnvkjsnvklcsnvl cmcsvkljsdnvklsdjnv klsnvdjs",
      releaseDate: "release_dnvsd vdknvlsnvsdkvnklsjdnvslate",
      genres: "genre_ids.map((genre) => genres[genre])",
    },
    {
       key: 4,
        title: "Musky Melon",
      poster: "https://i.ibb.co/dPYvRSQ/made.jpg",
      backdrop:"https://i.ibb.co/3BZSxRN/model.jpg" ,
      rating: "222,000,000",
      description:" VNKLAVNKLNVKL Kncsdnvkjsnvklcsnvl cmcsvkljsdnvklsdjnv klsnvdjs",
      releaseDate: "release_dnvsd vdknvlsnvsdkvnklsjdnvslate",
      genres: "genre_ids.map((genre) => genres[genre])",
    },
    {
        key: 4,
        title: "IFUNANYA ODUNZE",
      poster: "https://i.ibb.co/WsbkPYh/ify.jpg",
      backdrop:"https://i.ibb.co/87MSdXj/iffy.jpg" ,
      rating: "562,000,000",
      description:" Self made fashion designer and media star ",
      releaseDate: "release_dnvsd vdknvlsnvsdkvnklsjdnvslate",
      genres: "genre_ids.map((genre) => genres[genre])",
    }
]
  const movies = results.map(
    ({
      id,
      original_title,
      poster_path,
      backdrop_path,
      vote_average,
      overview,
      release_date,
      genre_ids,
    }) => ({
      key: id,
      title: original_title,
      poster: getImagePath(poster_path),
      backdrop: getBackdropPath(backdrop_path),
      rating: vote_average,
      description: overview,
      releaseDate: release_date,
      genres: genre_ids.map((genre) => genres[genre]),
    })
  );
  console.log(movies);
  return mo2;
};
