// ======================================TRIE====================================
class Node{
  constructor(value = ''){
    this.value = value;
    this.children = new Map();
    this.endOfWord = false;
  }
}

class Trie{
  constructor(){
    this.root = new Node();
  }

  insert(word){
    if(!word) return false;

    let currNode = this.root;

    for (const letter of word) {
      if (!currNode.children.has(letter)) {
        currNode.children.set(letter, new Node(letter));
      }
      currNode = currNode.children.get(letter);
    }
    currNode.endOfWord = true;
    return currNode;
  }

  hasWord(word, start = this.root){
    if(!word) return false;
    
    let currNode = start;
    for (let letter of word) {
      if(!currNode.children.has(letter)) return false;
      currNode = currNode.children.get(letter);
    }
    return currNode.endOfWord;
  }

  removeWord(word, start = this.root){
    if(!word) return false;
    let currNode = start;
    let stack = [];

    for (const letter of word) {
      if(!currNode.children.has(letter)) return false;
      currNode = currNode.children.get(letter);
      if(word[word.length -1] != currNode.value) stack.push(currNode);
    }

    currNode.endOfWord = false;
    while (stack.length > 0 && !currNode.endOfWord) {
      let prevNode = currNode;
      currNode = stack.pop();
      if (prevNode.children.size > 0) {
        break;
      }
      currNode.children.delete(prevNode.value);
    }
    return true;  
  }
  


}



// ==========================TEST CASES==========================

const trie = new Trie();

// Insertion
trie.insert('apple');
trie.insert('banana');
trie.insert('app');
trie.insert('ball');

console.log(trie.hasWord('apple')); // true
console.log(trie.hasWord('banana')); // true
console.log(trie.hasWord('app')); // true
console.log(trie.hasWord('ball')); // true
console.log(trie.hasWord('orange')); // false

// Removal
trie.removeWord('apple');
console.log(trie.hasWord('apple')); // false
console.log(trie.hasWord('app')); // true

trie.removeWord('orange'); // Should return false as 'orange' is not in the Trie
console.log(trie.hasWord('orange')); // false

trie.removeWord('ball');
console.log(trie.hasWord('ball')); // false