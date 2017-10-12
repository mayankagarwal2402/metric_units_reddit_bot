class mpgConversion extends Conversion {
  constructor() {
    super(
      [/mpg/, /miles per gal(?:lon)?/], 

      " mpg (US)",

        (i) => {
      const kmPerL = shared.createMap(i.map((j) => j * 0.425144), " km/L");
      const unitDecider = Math.max(...i);
      if (unitDecider < 15) {
        return kmPerL;
      } else {
        return [
          kmPerL,
          shared.createMap(i.map((j) => 235.215 / j), " L/100km")
        ]
      }
    },

    ["L/100km", "km/L"],

    ["basketball", "hockey", "soccer", "football", "rugby", "lacrosse", "cricket", "volleyball", "polo",
     "nba", "nhl", "nfl", "sport",
     "play", "game",
     "mavericks", "denvernuggets", "warriors", "rockets", "laclippers", "lakers", "memphisgrizzlies", 
     "timberwolves", "nolapelicans", "thunders", "suns", "ripcity", "kings", "nbaspurs", "utahjazz", 
     "atlantahawks", "bostonceltics", "gonets", "charlottehornets", "chicagobulls", "clevelandcavs", 
     "detroitpistons", "pacers", "heat", "mkebucks", "nyknicks", "orlandomagic", "sixers", 
     "torontoraptors", "washingtonwizards"].concat(shared.ukSubreddits)
    )
  }
}


