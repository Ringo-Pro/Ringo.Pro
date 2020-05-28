const moods = ['relaxingCalm', 'dark', 'sadTense', 'happy', 'energetic'],
  testSong = {
    title: 'test song',
    energy: Math.random(),
    valence: Math.random(),
    danceability: Math.random(),
  };

/* calculate energy
 percentages * 10 */
function energy(n) {
  if (n < 1 / 6) {
    return {
      relaxingCalm: 10,
      dark: 8,
      sadTense: 6,
      happy: 4,
      energetic: 2,
    };
  } else if (n < 1 / 3) {
    return {
      dark: 10,
      relaxingCalm: 8,
      sadTense: 6,
      happy: 4,
      energetic: 2,
    };
  } else if (n < 2 / 3) {
    return {
      sadTense: 10,
      dark: 8,
      happy: 6,
      relaxingCalm: 4,
      energetic: 2,
    };
  } else if (n < 5 / 6) {
    return {
      happy: 10,
      energetic: 8,
      sadTense: 6,
      dark: 4,
      relaxingCalm: 2,
    };
  } else {
    return {
      energetic: 10,
      happy: 8,
      sadTense: 6,
      dark: 4,
      relaxingCalm: 2,
    };
  }
}

// calculate valence
function valence(n) {
  if (n < 1 / 6) {
    return {
      dark: 10,
      sadTense: 8,
      relaxingCalm: 6,
      energetic: 4,
      happy: 2,
    };
  } else if (n < 1 / 3) {
    return {
      sadTense: 10,
      dark: 8,
      relaxingCalm: 6,
      energetic: 4,
      happy: 2,
    };
  } else if (n < 2 / 3) {
    return {
      relaxingCalm: 10,
      sadTense: 8,
      energetic: 6,
      dark: 4,
      happy: 2,
    };
  } else if (n < 5 / 6) {
    return {
      energetic: 10,
      happy: 8,
      relaxingCalm: 6,
      sadTense: 4,
      dark: 2,
    };
  } else {
    return {
      happy: 10,
      energetic: 8,
      relaxingCalm: 6,
      sadTense: 4,
      dark: 2,
    };
  }
}

// calculate danceability
function danceability(n) {
  if (n < 1 / 6) {
    return {
      relaxingCalm: 10,
      dark: 8,
      sadTense: 6,
      happy: 4,
      energetic: 2,
    };
  } else if (n < 1 / 3) {
    return {
      dark: 10,
      relaxingCalm: 8,
      sadTense: 6,
      happy: 4,
      energetic: 2,
    };
  } else if (n < 2 / 3) {
    return {
      sadTense: 10,
      relaxingCalm: 8,
      happy: 6,
      dark: 4,
      energetic: 2,
    };
  } else if (n < 5 / 6) {
    return {
      happy: 10,
      energetic: 8,
      relaxingCalm: 6,
      sadTense: 4,
      dark: 2,
    };
  } else {
    return {
      energetic: 10,
      happy: 8,
      sadTense: 6,
      dark: 4,
      relaxingCalm: 2,
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
function getMood(song) {
  // hier gaat de audio details van een nr in ipv testSong
  const total = moodScore(song);
  const highest = Object.keys(total).filter((x) => {
    return total[x] == Math.max.apply(null, Object.values(total));
  });
  if (highest.length > 1) {
    return 'No mood detected...';
  } else {
    return highest;
  }
}
function addMood(song) {
  const mood = getMood(song);
  song['mood'] = mood;
  return song;
}

module.exports = { addMood };
