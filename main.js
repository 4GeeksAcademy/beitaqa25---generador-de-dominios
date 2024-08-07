let pronoun = ['the', 'our', 'your', 'my'];
let adj = ['great', 'big', 'small', 'fast'];
let noun = ['jogger', 'racoon', 'developer', 'designer'];

function generateDomainNames(pronouns, adjectives, nouns) {
  let domainNames = [];
  
  for (let p of pronouns) {
    for (let a of adjectives) {
      for (let n of nouns) {
        domainNames.push(`${p}${a}${n}.com`);
      }
    }
  }
  
  return domainNames;
}

let domains = generateDomainNames(pronoun, adj, noun);
console.log(domains);
