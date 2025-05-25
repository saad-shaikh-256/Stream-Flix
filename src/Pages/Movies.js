import React, { useRef } from "react";
import "../input.css";
import "../output.css";
import "../App.css";

const Movies = () => {
  const trendingRef = useRef(null);
  const latestRef = useRef(null);
  const exclusiveRef = useRef(null);
  const popularRef = useRef(null);
  const ratedRef = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) ref.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    if (ref.current) ref.current.scrollBy({ left: 300, behavior: "smooth" });
  };
  const movieList = [
    {
      image: "/Assets/Images/moviePoster/Oppenhimer.png",
      name: "Oppenheimer",
      details: "Movie • 2023 • EN",
    },
    {
      image: "/Assets/Images/moviePoster/Monkey-Man.png",
      name: "Monkey Man",
      details: "Movie • 2024 • EN",
    },
    {
      image: "/Assets/Images/moviePoster/Cargo.png",
      name: "Cargo",
      details: "Movie • 2019 • HI",
    },
    {
      image: "/Assets/Images/moviePoster/My-Trip.png",
      name: "My Trip",
      details: "Movie • 2021 • EN",
    },
    {
      image: "/Assets/Images/moviePoster/The-Godfather.png",
      name: "The God Father",
      details: "Movie • 1972 • EN",
    },
    {
      image: "/Assets/Images/moviePoster/Avengers-Endgame.png",
      name: "Avengers Endgame",
      details: "Movie • 2019 • EN",
    },
    {
      image: "/Assets/Images/moviePoster/Lord-Of-The-Rings.png",
      name: "Lord of the Rings",
      details: "Movie • 2001 • EN",
    },
    {
      image: "/Assets/Images/moviePoster/No-Time-To-Die.png",
      name: "No Time to Die",
      details: "Movie • 2021 • EN",
    },
    {
      image: "/Assets/Images/moviePoster/Star-Wars.png",
      name: "Star Wars",
      details: "Movie • 2017 • EN",
    },
    {
      image: "/Assets/Images/moviePoster/Jumanji.png",
      name: "Jumanji The Next Level",
      details: "Movie • 2019 • EN",
    },
    {
      image: "/Assets/Images/moviePoster/Venom.png",
      name: "Venom",
      details: "Movie • 2021 • EN",
    },
    {
      image: "/Assets/Images/moviePoster/Planet-Of-Apes.png",
      name: "Planet of the Apes",
      details: "Movie • 2024 • EN",
    },
  ];

  const animeList = [
    {
      image: "/Assets/Images/animePoster/Death-Note.png",
      name: "Death Note",
      details: "Anime • 2006 • DUB",
    },
    {
      image: "/Assets/Images/animePoster/Jujustu-Kaisen.png",
      name: "Jujutsu Kaisen",
      details: "Anime • 2020 • DUB",
    },
    {
      image: "/Assets/Images/animePoster/Attack-On-Titan.png",
      name: "Attack on Titan",
      details: "Anime • 2013 • DUB",
    },
    {
      image: "/Assets/Images/animePoster/Wind-Breaker.png",
      name: "Wind Breaker",
      details: "Anime • 2024 • DUB",
    },
    {
      image: "/Assets/Images/animePoster/Demon-Slayer.png",
      name: "Demon Slayer",
      details: "Anime • 2019 • DUB",
    },
    {
      image: "/Assets/Images/animePoster/Dragon-Ball-Super.png",
      name: "Dragon Ball Super",
      details: "Anime • 2015 • DUB",
    },
    {
      image: "/Assets/Images/animePoster/Bleach.png",
      name: "Bleach",
      details: "Anime • 2022 • DUB",
    },
    {
      image: "/Assets/Images/animePoster/One-Peice.png",
      name: "One Piece",
      details: "Anime • 1999 • DUB",
    },
    {
      image: "/Assets/Images/animePoster/Monster.png",
      name: "Monster",
      details: "Anime • 2004 • DUB",
    },
    {
      image: "/Assets/Images/animePoster/Tokyo-Revenger.png",
      name: "Tokyo Revengers",
      details: "Anime • 2021 • DUB",
    },
    {
      image: "/Assets/Images/animePoster/Naruto-Shippudin.png",
      name: "Naruto Shippuden",
      details: "Anime • 2007 • DUB",
    },
    {
      image: "/Assets/Images/animePoster/Black-Clover.png",
      name: "Black Clover",
      details: "Anime • 2017 • DUB",
    },
  ];

  const exclusiveList = [
    {
      image: "/Assets/Images/exclusivePoster/theOffice.png",
      name: "The Office",
      details: "Series • 2005 • EN",
    },
    {
      image: "/Assets/Images/exclusivePoster/modernFamily.png",
      name: "Modern Family",
      details: "Series • 2009 • EN",
    },
    {
      image: "/Assets/Images/exclusivePoster/Friends.png",
      name: "Friends",
      details: "Series • 1994 • EN",
    },
    {
      image: "/Assets/Images/exclusivePoster/Gotham.png",
      name: "Gotham",
      details: "Series • 2014 • EN",
    },
    {
      image: "/Assets/Images/exclusivePoster/The100.png",
      name: "The 100",
      details: "Series • 2014 • EN",
    },
    {
      image: "/Assets/Images/exclusivePoster/Breaking-Bad.png",
      name: "Breaking Bad",
      details: "Series • 2008 • EN",
    },
    {
      image: "/Assets/Images/exclusivePoster/You.png",
      name: "You",
      details: "Series • 2018 • EN",
    },
    {
      image: "/Assets/Images/exclusivePoster/Harry-Potter.png",
      name: "Harry Potter",
      details: "Movie • 2001 • EN",
    },
    {
      image: "/Assets/Images/exclusivePoster/Stranger-Things.png",
      name: "Stranger Things",
      details: "Series • 2016 • EN",
    },
    {
      image: "/Assets/Images/exclusivePoster/Wednesday.png",
      name: "Wednesday",
      details: "Series • 2022 • EN",
    },
    {
      image: "/Assets/Images/exclusivePoster/Money-Hist.png",
      name: "Money Heist",
      details: "Series • 2017 • DUB",
    },
    {
      image: "/Assets/Images/exclusivePoster/Squid-Game.png",
      name: "Squid Game",
      details: "Series • 2021 • DUB",
    },
  ];

  const MediaCard = ({ image, name, details }) => (
    <div
      tabIndex="0"
      className="h-fit w-fit min-w-[165px] min-h-[250px] rounded-xl overflow-hidden relative group cursor-pointer hover:scale-95 focus:scale-95 transition-transform sm:min-w-[190px] sm:min-h-[285px] md:min-w-[210px] md:min-h-[320px] md:rounded-2xl lg:min-w-[230px] lg:min-h-[350px]"
    >
      <img src={image} alt={name} />
      <div className="h-full w-full bg-black opacity-0 group-hover:opacity-40 group-focus:opacity-40 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="h-fit w-full flex flex-col justify-center items-center gap-1 absolute bottom-[-100px] group-hover:bottom-5 group-focus:bottom-5">
        <span className="h-fit w-full px-[5%] font-bold text-sm sm:text-base md:text-lg text-center">
          {name}
        </span>
        <span className="h-fit w-fit font-medium text-[0.625rem] sm:text-xs">
          {details}
        </span>
      </div>
      <img
        src="/Assets/Icons/playIcon.svg"
        alt="Play Icon"
        className="h-12 w-12 flex flex-col justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100  group-focus:opacity-100"
      />
    </div>
  );

  return (
    <>
      <section className="h-fit w-full bg-baseblack text-basewhite font-poppins flex flex-col justify-center items-start px-5 py-12 gap-12 sm:gap-16 md:gap-20 lg:gap-24 sm:px-10 sm:py-14 md:px-14 md:py-16 lg:px-20">
        {/* Trending Now */}
        <div className="h-fit w-full flex flex-col gap-4">
          <div className="h-fit w-full flex flex-col gap-8 justify-center items-center overflow-x-hidden">
            <div className="h-fit w-full flex justify-between items-center">
              <span className="h-fit w-full text-lg sm:text-xl lg:text-2xl font-bold">
                Trending Now
              </span>
              <span className=" h-fit w-fit flex justify-center items-center gap-2">
                <button
                  onClick={() => scrollLeft(trendingRef)}
                  className="h-7 sm:h-8 w-7 text-neutral-400 sm:w-8 bg-neutral-800 flex flex-col justify-center items-center text-center rounded-full border-2 border-neutral-700 font-bold cursor-pointer text-xs sm:text-sm hover:bg-neutral-700 active:bg-neutral-700 active:border-neutral-600 hover:border-neutral-600 "
                >
                  <i className="hgi hgi-stroke hgi-arrow-left-01"></i>
                </button>
                <button
                  onClick={() => scrollRight(trendingRef)}
                  className="h-7 sm:h-8 w-7 text-neutral-400 sm:w-8 bg-neutral-800 flex flex-col justify-center items-center text-center rounded-full border-2 border-neutral-700 font-bold cursor-pointer text-xs sm:text-sm hover:bg-neutral-700 active:bg-neutral-700 active:border-neutral-600 hover:border-neutral-600 "
                >
                  <i className="hgi hgi-stroke hgi-arrow-right-01"></i>
                </button>
              </span>
            </div>
            <div
              ref={trendingRef}
              className="h-fit w-full flex justify-start items-center gap-6"
              id="movieCards1"
            >
              {movieList.map((item, index) => (
                <MediaCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        {/* Latest Releases */}
        <div className="h-fit w-full flex flex-col gap-4">
          <div className="h-fit w-full flex flex-col gap-8 justify-center items-center overflow-x-hidden">
            <div className="h-fit w-full flex justify-between items-center">
              <span className="h-fit w-full text-lg sm:text-xl lg:text-2xl font-bold">
                Latest Releases
              </span>
              <span className=" h-fit w-fit flex justify-center items-center gap-2">
                <button
                  onClick={() => scrollLeft(latestRef)}
                  className="h-7 sm:h-8 w-7 text-neutral-400 sm:w-8 bg-neutral-800 flex flex-col justify-center items-center text-center rounded-full border-2 border-neutral-700 font-bold cursor-pointer text-xs sm:text-sm hover:bg-neutral-700 active:bg-neutral-700 active:border-neutral-600 hover:border-neutral-600 "
                >
                  <i className="hgi hgi-stroke hgi-arrow-left-01"></i>
                </button>
                <button
                  onClick={() => scrollRight(latestRef)}
                  className="h-7 sm:h-8 w-7 text-neutral-400 sm:w-8 bg-neutral-800 flex flex-col justify-center items-center text-center rounded-full border-2 border-neutral-700 font-bold cursor-pointer text-xs sm:text-sm hover:bg-neutral-700 active:bg-neutral-700 active:border-neutral-600 hover:border-neutral-600 "
                >
                  <i className="hgi hgi-stroke hgi-arrow-right-01"></i>
                </button>
              </span>
            </div>
            <div
              ref={latestRef}
              className="h-fit w-full flex justify-start items-center gap-6"
              id="movieCards2"
            >
              {animeList.map((item, index) => (
                <MediaCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        {/* Movie Poster */}
        <div
          id="movies-poster"
          className="h-[400px] w-full rounded-2xl p-10 hidden md:flex justify-start items-end"
        >
          <div
            id="poster-content"
            className="h-fit w-[525px] flex flex-col gap-6"
          >
            <div
              id="movies-details"
              className="h-fit w-fit flex flex-col gap-12"
            >
              <div
                id="movie-heading"
                className="h-fit w-fit flex flex-col gap-6"
              >
                <div id="movie-name" className="h-fit w-fit text-5xl font-bold">
                  Cars 3
                </div>
                <div
                  id="movie-rating"
                  className="h-fit w-fit flex justify-center items-center gap-4"
                >
                  <div
                    id="imdb"
                    className="h-fit w-fit flex justify-center items-center gap-2 text-sm"
                  >
                    <img
                      src="/Assets/Icons/imdbIcon.svg"
                      alt="Imdb Icon"
                      className="h-5 w-5"
                    />
                    <span>6.7 (134k)</span>
                  </div>
                  <div id="divider">•</div>
                  <div
                    id="rotten"
                    className="h-fit w-fit flex justify-center items-center gap-2 text-sm"
                  >
                    <img
                      src="/Assets/Icons/rottenIcon.svg"
                      alt="Rotten Icon"
                      className="h-5 w-5"
                    />
                    <span>69%</span>
                  </div>
                </div>
              </div>
              <div id="movie-description" className="h-fit w-fit text-base">
                Lightning McQueen sets out to prove to a new generation of
                racers that he's still the best race car in the world.
              </div>
            </div>
            <div
              id="movies-buttons"
              className="h-fit w-fit flex justify-center items-center gap-4"
            >
              <button className="w-fit h-fit pl-5 pr-6 py-3 flex justify-center items-center border-2 border-primary-normal bg-primary-normal rounded-xl text-sm font-medium gap-1 cursor-pointer">
                <img
                  src="/Assets/Icons/playIcon.svg"
                  alt="playIcon"
                  className="w-auto h-4 "
                />{" "}
                Watch Now
              </button>
              <button className="w-fit h-fit px-6 py-3 flex justify-center items-center border-2 border-white rounded-xl text-sm font-medium cursor-pointer">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
        {/* Exclusive Shows */}
        <div className="h-fit w-full flex flex-col gap-4">
          <div className="h-fit w-full flex flex-col gap-8 justify-center items-center overflow-x-hidden">
            <div className="h-fit w-full flex justify-between items-center">
              <span className="h-fit w-full text-lg sm:text-xl lg:text-2xl font-bold">
                Exclusive Shows
              </span>
              <span className=" h-fit w-fit flex justify-center items-center gap-2">
                <button
                  onClick={() => scrollLeft(exclusiveRef)}
                  className="h-7 sm:h-8 w-7 text-neutral-400 sm:w-8 bg-neutral-800 flex flex-col justify-center items-center text-center rounded-full border-2 border-neutral-700 font-bold cursor-pointer text-xs sm:text-sm hover:bg-neutral-700 active:bg-neutral-700 active:border-neutral-600 hover:border-neutral-600 "
                >
                  <i className="hgi hgi-stroke hgi-arrow-left-01"></i>
                </button>
                <button
                  onClick={() => scrollRight(exclusiveRef)}
                  className="h-7 sm:h-8 w-7 text-neutral-400 sm:w-8 bg-neutral-800 flex flex-col justify-center items-center text-center rounded-full border-2 border-neutral-700 font-bold cursor-pointer text-xs sm:text-sm hover:bg-neutral-700 active:bg-neutral-700 active:border-neutral-600 hover:border-neutral-600 "
                >
                  <i className="hgi hgi-stroke hgi-arrow-right-01"></i>
                </button>
              </span>
            </div>
            <div
              ref={exclusiveRef}
              className="h-fit w-full flex justify-start items-center gap-6"
              id="movieCards3"
            >
              {exclusiveList.map((item, index) => (
                <MediaCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        {/* Most Popular */}
        <div className="h-fit w-full flex flex-col gap-4">
          <div className="h-fit w-full flex flex-col gap-8 justify-center items-center overflow-x-hidden">
            <div className="h-fit w-full flex justify-between items-center">
              <span className="h-fit w-full text-lg sm:text-xl lg:text-2xl font-bold">
                Most Popular
              </span>
              <span className=" h-fit w-fit flex justify-center items-center gap-2">
                <button
                  onClick={() => scrollLeft(popularRef)}
                  className="h-7 sm:h-8 w-7 text-neutral-400 sm:w-8 bg-neutral-800 flex flex-col justify-center items-center text-center rounded-full border-2 border-neutral-700 font-bold cursor-pointer text-xs sm:text-sm hover:bg-neutral-700 active:bg-neutral-700 active:border-neutral-600 hover:border-neutral-600 "
                >
                  <i className="hgi hgi-stroke hgi-arrow-left-01"></i>
                </button>
                <button
                  onClick={() => scrollRight(popularRef)}
                  className="h-7 sm:h-8 w-7 text-neutral-400 sm:w-8 bg-neutral-800 flex flex-col justify-center items-center text-center rounded-full border-2 border-neutral-700 font-bold cursor-pointer text-xs sm:text-sm hover:bg-neutral-700 active:bg-neutral-700 active:border-neutral-600 hover:border-neutral-600 "
                >
                  <i className="hgi hgi-stroke hgi-arrow-right-01"></i>
                </button>
              </span>
            </div>
            <div
              ref={popularRef}
              className="h-fit w-full flex justify-start items-center gap-6"
              id="movieCards4"
            >
              {movieList.map((item, index) => (
                <MediaCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        {/* Top Rated */}
        <div className="h-fit w-full flex flex-col gap-4">
          <div className="h-fit w-full flex flex-col gap-8 justify-center items-center overflow-x-hidden">
            <div className="h-fit w-full flex justify-between items-center">
              <span className="h-fit w-full text-lg sm:text-xl lg:text-2xl font-bold">
                Top Rated
              </span>
              <span className=" h-fit w-fit flex justify-center items-center gap-2">
                <button
                  onClick={() => scrollLeft(ratedRef)}
                  className="h-7 sm:h-8 w-7 text-neutral-400 sm:w-8 bg-neutral-800 flex flex-col justify-center items-center text-center rounded-full border-2 border-neutral-700 font-bold cursor-pointer text-xs sm:text-sm hover:bg-neutral-700 active:bg-neutral-700 active:border-neutral-600 hover:border-neutral-600 "
                >
                  <i className="hgi hgi-stroke hgi-arrow-left-01"></i>
                </button>
                <button
                  onClick={() => scrollRight(ratedRef)}
                  className="h-7 sm:h-8 w-7 text-neutral-400 sm:w-8 bg-neutral-800 flex flex-col justify-center items-center text-center rounded-full border-2 border-neutral-700 font-bold cursor-pointer text-xs sm:text-sm hover:bg-neutral-700 active:bg-neutral-700 active:border-neutral-600 hover:border-neutral-600 "
                >
                  <i className="hgi hgi-stroke hgi-arrow-right-01"></i>
                </button>
              </span>
            </div>
            <div
              ref={ratedRef}
              className="h-fit w-full flex justify-start items-center gap-6"
              id="movieCards5"
            >
              {animeList.map((item, index) => (
                <MediaCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
