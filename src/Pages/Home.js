import React from "react";
import "../input.css";
import "../output.css";
import "../App.css";

const Home = () => {
  return (
    <>
      <section
        className="h-fit min-h-[100dvh] md:min-h-[850px] w-full bg-baseblack text-basewhite font-poppins flex flex-col justify-between items-start pt-10  px-5 sm:px-10 md:px-15 lg:px-20 pb-20"
        id="home-Screen"
      >
        <nav className="h-fit w-full flex justify-between items-center">
          <div id="nav-logo" className="text-xl md:text-2xl font-bold">
            <span>Stream</span>
            <span className="text-primary-normal">Flix</span>
          </div>
          <div
            id="nav-button"
            className="h-fit w-fit flex justify-center items-center gap-2"
          >
            <div
              id="language-Btn"
              className="h-fit w-fit hidden sm:flex justify-center items-center border border-[#ffffff1a] bg-[#ffffff1f] cursor-pointer px-5 py-2 rounded-xl backdrop-blur-[11.100000381469727px] text-xs font-semibold gap-1"
            >
              <img src="/Assets/Icons/languageIcon.svg" alt="Imdb Icon" />
              <select name="Options" id="Options">
                <option className="text-black">English</option>
                <option className="text-black">हिन्दी</option>
              </select>
              <img src="/Assets/Icons/dropdownIcon.svg" alt="Imdb Icon" />
            </div>
            <button
              id="signIn-Btn"
              className="h-fit w-fit flex justify-center items-center border border-[#ffffff1a] bg-[#ffffff1f] cursor-pointer px-4 py-1.5 sm:px-5 sm:py-2 rounded-xl backdrop-blur-[11.100000381469727px]  text-[0.625rem] sm:text-xs font-semibold gap-1"
            >
              Sign In
            </button>
          </div>
        </nav>
        <main>
          <div
            id="home-content"
            className="h-fit w-full max-w-[530px] flex flex-col gap-6"
          >
            <div
              id="movie-content"
              className="h-fit w-full flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12"
            >
              <div
                id="movie-heading"
                className="h-fit w-full flex flex-col gap-5 sm:gap-6"
              >
                <div
                  id="movie-name"
                  className="h-fit w-full text-2xl sm:text-3xl md:text-4xl  lg:text-5xl font-bold"
                >
                  John Wick: Chapter 3 Parabellum
                </div>
                <div
                  id="movie-rating"
                  className="h-fit w-fit flex justify-center items-center gap-4"
                >
                  <div
                    id="imdb"
                    className="h-fit w-fit flex justify-center items-center gap-2 text-xs sm:text-sm"
                  >
                    <img
                      src="/Assets/Icons/imdbIcon.svg"
                      alt="Imdb Icon"
                      className="h-auto w-4 sm:w-5"
                    />
                    <span>8.2 (12.827)</span>
                  </div>
                  <div id="divider" className="text-xs sm:text-sm">
                    •
                  </div>
                  <div
                    id="rotten"
                    className="h-fit w-fit flex justify-center items-center gap-2 text-xs sm:text-sm"
                  >
                    <img
                      src="/Assets/Icons/rottenIcon.svg"
                      alt="Rotten Icon"
                      className="h-auto w-4 sm:w-5"
                    />
                    <span>97%</span>
                  </div>
                </div>
              </div>
              <div
                id="movie-description"
                className="h-fit w-full font-medium text-xs sm:text-sm md:text-base"
              >
                Super Assassin John Wick is on the run after killing a member of
                the international assassin’s guild, and with a $14 million price
                tag on his head – he is the target of hit men and women
                everywhere.
              </div>
            </div>
            <div
              id="home-buttons"
              className="h-fit w-fit flex justify-center items-center gap-4"
            >
              <button className="h-fit w-fit flex justify-center items-center gap-1 py-3 sm:py-3.5 pl-4 pr-5 sm:pl-5 sm:pr-6 bg-primary-normal text-xs sm:text-sm rounded-xl font-medium border-2 border-primary-normal cursor-pointer">
                <img
                  src="/Assets/Icons/playIcon.svg"
                  alt="playIcon"
                  className="w-auto h-4 sm:h-5"
                />
                Watch Now
              </button>
              <button className="h-fit w-fit flex py-3 sm:py-3.5 px-5 sm:px-6 text-xs sm:text-sm rounded-xl font-medium border-2 border-white cursor-pointer">
                Watch Trailer
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
