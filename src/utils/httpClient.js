const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTJmYzMzZmFjMjI1ZjJkYjYyNDdlYmYxNTVlYjc5ZSIsInN1YiI6IjY0MTIzYWMyZmU2YzE4MDA4NGU5MTUyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ewB5eTBkEQ7JR1duE_y25Dwr9eQemh4KsQKKWJtAa7o",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
