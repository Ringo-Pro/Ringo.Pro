const moods = ['Calm', 'Sad', 'Happy', 'Energetic'],
  properties = ['energy', 'valence', 'danceability', 'timbre'],
  testSong = {
    title: 'test song',
    energy: Math.random(),
    valence: Math.random(),
    danceability: Math.random(),
  };
let energyScore = {
    relaxingCalm: 0,
    dark: 0,
    sadTense: 0,
    happy: 0,
    energetic: 0,
  },
  valenceScore = {
    relaxingCalm: 0,
    dark: 0,
    sadTense: 0,
    happy: 0,
    energetic: 0,
  },
  danceabilityScore = {
    relaxingCalm: 0,
    dark: 0,
    sadTense: 0,
    happy: 0,
    energetic: 0,
  };

// calculate energy
function energy(n) {
  if (n < 1 / 6) {
    energyScore.relaxingCalm = 100;
    energyScore.dark = 80;
    energyScore.sadTense = 60;
    energyScore.happy = 40;
    energyScore.energetic = 20;
  } else if (n < 1 / 3) {
    energyScore.dark = 100;
    energyScore.relaxingCalm = 80;
    energyScore.sadTense = 60;
    energyScore.happy = 40;
    energyScore.energetic = 20;
  } else if (n < 2 / 3) {
    energyScore.sadTense = 100;
    energyScore.dark = 80;
    energyScore.happy = 60;
    energyScore.relaxingCalm = 40;
    energyScore.energetic = 20;
  } else if (n < 5 / 6) {
    energyScore.happy = 100;
    energyScore.energetic = 80;
    energyScore.sadTense = 60;
    energyScore.dark = 40;
    energyScore.relaxingCalm = 20;
  } else {
    energyScore.energetic = 100;
    energyScore.happy = 80;
    energyScore.sadTense = 60;
    energyScore.dark = 40;
    energyScore.relaxingCalm = 20;
  }
}

// calculate valence
function valence(n) {
  if (n < 1 / 6) {
    valenceScore.dark = 100;
    valenceScore.sadTense = 80;
    valenceScore.relaxingCalm = 60;
    valenceScore.energetic = 40;
    valenceScore.happy = 20;
  } else if (n < 1 / 3) {
    valenceScore.sadTense = 100;
    valenceScore.dark = 80;
    valenceScore.relaxingCalm = 60;
    valenceScore.energetic = 40;
    valenceScore.happy = 20;
  } else if (n < 2 / 3) {
    valenceScore.relaxingCalm = 100;
    valenceScore.sadTense = 80;
    valenceScore.energetic = 60;
    valenceScore.dark = 40;
    valenceScore.happy = 20;
  } else if (n < 5 / 6) {
    valenceScore.energetic = 100;
    valenceScore.happy = 80;
    valenceScore.relaxingCalm = 60;
    valenceScore.sadTense = 40;
    valenceScore.dark = 20;
  } else {
    valenceScore.happy = 100;
    valenceScore.energetic = 80;
    valenceScore.relaxingCalm = 60;
    valenceScore.sadTense = 40;
    valenceScore.dark = 20;
  }
}

// calculate danceability
function danceability(n) {
  if (n < 1 / 6) {
    danceabilityScore.relaxingCalm = 100;
    danceabilityScore.dark = 80;
    danceabilityScore.sadTense = 60;
    danceabilityScore.happy = 40;
    danceabilityScore.energetic = 20;
  } else if (n < 1 / 3) {
    danceabilityScore.dark = 100;
    danceabilityScore.relaxingCalm = 80;
    danceabilityScore.sadTense = 60;
    danceabilityScore.happy = 40;
    danceabilityScore.energetic = 20;
  } else if (n < 2 / 3) {
    danceabilityScore.sadTense = 100;
    danceabilityScore.relaxingCalm = 40;
    danceabilityScore.happy = 80;
    danceabilityScore.dark = 60;
    danceabilityScore.energetic = 20;
  } else if (n < 5 / 6) {
    danceabilityScore.happy = 100;
    danceabilityScore.energetic = 80;
    danceabilityScore.relaxingCalm = 60;
    danceabilityScore.sadTense = 40;
    danceabilityScore.dark = 20;
  } else {
    danceabilityScore.energetic = 100;
    danceabilityScore.happy = 80;
    danceabilityScore.sadTense = 60;
    danceabilityScore.dark = 40;
    danceabilityScore.relaxingCalm = 20;
  }
}
// SUM above
function moodScore() {
  energy(testSong.energy);
  valence(testSong.valence);
  danceability(testSong.danceability);
}
moodScore();

const energetic =
  energyScore.energetic + valenceScore.energetic + danceabilityScore.energetic;
const happy = energyScore.happy + valenceScore.happy + danceabilityScore.happy;
const sadTense =
  energyScore.sadTense + valenceScore.sadTense + danceabilityScore.sadTense;
const dark = energyScore.dark + valenceScore.dark + danceabilityScore.dark;
const relaxingCalm =
  energyScore.relaxingCalm +
  valenceScore.relaxingCalm +
  danceabilityScore.relaxingCalm;

const total = {
  energetic: energetic,
  happy: happy,
  sadTense: sadTense,
  dark: dark,
  relaxingCalm: relaxingCalm,
};
console.log(total);
const getMax = (object) => {
  return Object.keys(object).filter((x) => {
    return object[x] == Math.max.apply(null, Object.values(object));
  });
};
console.log(getMax(total));
// This is your mood

module.exports = {};
