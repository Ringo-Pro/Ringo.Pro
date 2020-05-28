const moods = ['relaxingCalm', 'dark', 'sadTense', 'happy', 'energetic'],
  testSong = {
    title: 'test song',
    energy: Math.random(),
    valence: Math.random(),
    danceability: Math.random(),
  };

// calculate energy
function energy(n) {
  if (n < 1 / 6) {
    return {
      relaxingCalm: 100,
      dark: 80,
      sadTense: 60,
      happy: 40,
      energetic: 20,
    };
  } else if (n < 1 / 3) {
    return {
      dark: 100,
      relaxingCalm: 80,
      sadTense: 60,
      happy: 40,
      energetic: 20,
    };
  } else if (n < 2 / 3) {
    return {
      sadTense: 100,
      dark: 80,
      happy: 60,
      relaxingCalm: 40,
      energetic: 20,
    };
  } else if (n < 5 / 6) {
    return {
      happy: 100,
      energetic: 80,
      sadTense: 60,
      dark: 40,
      relaxingCalm: 20,
    };
  } else {
    return {
      energetic: 100,
      happy: 80,
      sadTense: 60,
      dark: 40,
      relaxingCalm: 20,
    };
  }
}

// calculate valence
function valence(n) {
  if (n < 1 / 6) {
    return {
      dark: 100,
      sadTense: 80,
      relaxingCalm: 60,
      energetic: 40,
      happy: 20,
    };
  } else if (n < 1 / 3) {
    return {
      sadTense: 100,
      dark: 80,
      relaxingCalm: 60,
      energetic: 40,
      happy: 20,
    };
  } else if (n < 2 / 3) {
    return {
      relaxingCalm: 100,
      sadTense: 80,
      energetic: 60,
      dark: 40,
      happy: 20,
    };
  } else if (n < 5 / 6) {
    return {
      energetic: 100,
      happy: 80,
      relaxingCalm: 60,
      sadTense: 40,
      dark: 20,
    };
  } else {
    return {
      happy: 100,
      energetic: 80,
      relaxingCalm: 60,
      sadTense: 40,
      dark: 20,
    };
  }
}

// calculate danceability
function danceability(n) {
  if (n < 1 / 6) {
    return {
      relaxingCalm: 100,
      dark: 80,
      sadTense: 60,
      happy: 40,
      energetic: 20,
    };
  } else if (n < 1 / 3) {
    return {
      dark: 100,
      relaxingCalm: 80,
      sadTense: 60,
      happy: 40,
      energetic: 20,
    };
  } else if (n < 2 / 3) {
    return {
      sadTense: 100,
      relaxingCalm: 40,
      happy: 80,
      dark: 60,
      energetic: 20,
    };
  } else if (n < 5 / 6) {
    return {
      happy: 100,
      energetic: 80,
      relaxingCalm: 60,
      sadTense: 40,
      dark: 20,
    };
  } else {
    return {
      energetic: 100,
      happy: 80,
      sadTense: 60,
      dark: 40,
      relaxingCalm: 20,
    };
  }
}
function moodScore(song) {
  let total = {};
  moods.forEach(function (mood) {
    total[mood] = sumMood(song, mood);
  });
  return total;
}
function sumMood(song, mood) {
  const _energy = energy(song.energy),
    _valence = valence(song.valence),
    _danceability = danceability(song.danceability);
  return _energy[mood] + _valence[mood] + _danceability[mood];
}

/* Source: https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object/27376421 */
function getMood() {
  // hier gaat de audio details van een nr in ipv testSong
  const total = moodScore(testSong);
  const highest = Object.keys(total).filter((x) => {
    return total[x] == Math.max.apply(null, Object.values(total));
  });
  if (highest.length > 1) {
    console.log('No mood detected');
  } else {
    return highest;
  }
}
console.log(getMood());
module.exports = {};
