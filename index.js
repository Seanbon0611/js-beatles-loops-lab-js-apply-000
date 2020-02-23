function theBeatlesPlay (musicians, instruments) {
  let theBeatles = []
  for (let i=0; i < musicians.length; i++) {
    theBeatles.push(musicians[i] + ' plays ' + instruments[i])
  }
  return theBeatles;
}

function johnLennonFacts() {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  let updatedFacts = [];
  let i = 0;
  while (i < facts.length) {
    updatedFacts.push(facts[i] + '!!!')
  }
  return updatedFacts;
}