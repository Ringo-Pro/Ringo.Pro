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
    const min = 0,
      max = 1 / 6;
    return {
      relaxingCalm: 10,
      dark: 8,
      sadTense: 6,
      happy: 4,
      energetic: 2,
      values: {
        min: 0,
        max: max.toFixed(2),
      },
    };
  } else if (n < 1 / 3) {
    const min = 1 / 6,
      max = 1 / 3;
    return {
      dark: 10,
      relaxingCalm: 8,
      sadTense: 6,
      happy: 4,
      energetic: 2,
      values: {
        min: min.toFixed(2),
        max: max.toFixed(2),
      },
    };
  } else if (n < 2 / 3) {
    const min = 1 / 3,
      max = 2 / 3;
    return {
      sadTense: 10,
      dark: 8,
      happy: 6,
      relaxingCalm: 4,
      energetic: 2,
      values: {
        min: min.toFixed(2),
        max: max.toFixed(2),
      },
    };
  } else if (n < 5 / 6) {
    const min = 2 / 3,
      max = 5 / 6;
    return {
      happy: 10,
      energetic: 8,
      sadTense: 6,
      dark: 4,
      relaxingCalm: 2,
      values: {
        min: min.toFixed(2),
        max: max.toFixed(2),
      },
    };
  } else {
    const min = 5 / 6,
      max = 1;
    return {
      energetic: 10,
      happy: 8,
      sadTense: 6,
      dark: 4,
      relaxingCalm: 2,
      values: {
        min: min.toFixed(2),
        max: 1,
      },
    };
  }
}

// calculate valence
function valence(n) {
  if (n < 1 / 6) {
    const min = 0,
      max = 1 / 6;
    return {
      dark: 10,
      sadTense: 8,
      relaxingCalm: 6,
      energetic: 4,
      happy: 2,
      values: {
        min: min,
        max: max.toFixed(2),
      },
    };
  } else if (n < 1 / 3) {
    const min = 1 / 6,
      max = 1 / 3;
    return {
      sadTense: 10,
      dark: 8,
      relaxingCalm: 6,
      energetic: 4,
      happy: 2,
      values: {
        min: min.toFixed(2),
        max: max.toFixed(2),
      },
    };
  } else if (n < 2 / 3) {
    const min = 1 / 3,
      max = 2 / 3;
    return {
      relaxingCalm: 10,
      sadTense: 8,
      energetic: 6,
      dark: 4,
      happy: 2,
      values: {
        min: min.toFixed(2),
        max: max.toFixed(2),
      },
    };
  } else if (n < 5 / 6) {
    const min = 2 / 3,
      max = 5 / 6;
    return {
      energetic: 10,
      happy: 8,
      relaxingCalm: 6,
      sadTense: 4,
      dark: 2,
      values: {
        min: min.toFixed(2),
        max: max.toFixed(2),
      },
    };
  } else {
    const min = 5 / 6,
      max = 1;
    return {
      happy: 10,
      energetic: 8,
      relaxingCalm: 6,
      sadTense: 4,
      dark: 2,
      values: {
        min: min.toFixed(2),
        max: max,
      },
    };
  }
}

// calculate danceability
function danceability(n) {
  if (n < 1 / 6) {
    const min = 0,
      max = 1 / 6;
    return {
      relaxingCalm: 10,
      dark: 8,
      sadTense: 6,
      happy: 4,
      energetic: 2,
      values: {
        min: min,
        max: max.toFixed(2),
      },
    };
  } else if (n < 1 / 3) {
    const min = 1 / 6,
      max = 1 / 3;
    return {
      dark: 10,
      relaxingCalm: 8,
      sadTense: 6,
      happy: 4,
      energetic: 2,
      values: {
        min: min.toFixed(2),
        max: max.toFixed(2),
      },
    };
  } else if (n < 2 / 3) {
    const min = 1 / 3,
      max = 2 / 3;
    return {
      sadTense: 10,
      relaxingCalm: 8,
      happy: 6,
      dark: 4,
      energetic: 2,
      values: {
        min: min.toFixed(2),
        max: max.toFixed(2),
      },
    };
  } else if (n < 5 / 6) {
    const min = 2 / 3,
      max = 5 / 6;
    return {
      happy: 10,
      energetic: 8,
      relaxingCalm: 6,
      sadTense: 4,
      dark: 2,
      values: {
        min: min.toFixed(2),
        max: max.toFixed(2),
      },
    };
  } else {
    const min = 5 / 6,
      max = 1;
    return {
      energetic: 10,
      happy: 8,
      sadTense: 6,
      dark: 4,
      relaxingCalm: 2,
      values: {
        min: min.toFixed(2),
        max: max,
      },
    };
  }
}

function sumMood(song, mood) {
  const _energy = energy(song.energy),
    _valence = valence(song.valence),
    _danceability = danceability(song.danceability);
  return _energy[mood] + _valence[mood] + _danceability[mood];
}

function moodScore(song) {
  let total = {};
  moods.forEach(function (mood) {
    total[mood] = sumMood(song, mood);
  });
  return total;
}
function getValues(song) {
  const _energy = energy(song.energy),
    _valence = valence(song.valence),
    _danceability = danceability(song.danceability);
  return {
    energyValues: _energy.values,
    valenceValues: _valence.values,
    danceabilityValues: _danceability.values,
  };
}

/* Source: https://stackoverflow.com/questions/27376295/getting-key-with-the-highest-value-from-object/27376421 */
function getMood(song) {
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
  song['values'] = getValues(song);
  return song;
}

module.exports = { addMood };
