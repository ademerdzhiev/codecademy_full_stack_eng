// Nonsesnsical book name generator

console.log('Nonsesnsical Book Title Generator')

let firstWords = ['Quarks', 'Alice', 'Sophia', 'Angel', 'Brother', 'Dragon', 'Lady'
, 'Girl', 'Dog', 'Cat', 'Seneca', 'Marcus Aurelius'];

let connectingWords = ['and', 'to', 'for', 'the', 'in', 'but', 'is'];

let endWords = ['Heaven', 'Hell', 'Wonderland', 'Ancient World', 'Holly Grail',
'Temple'];

const randomNumberGenerator = (num) => {return Math.floor(Math.random()*num)};

const generateTitle = () => {
  let beggining = firstWords[randomNumberGenerator(firstWords.length)];
  let connectingWord = connectingWords[randomNumberGenerator(
    connectingWords.length)];
  let endWord = endWords[randomNumberGenerator(endWords.length)];

  return beggining + ' ' + connectingWord + ' ' + endWord;
  }

const title = generateTitle();
console.log(title);
