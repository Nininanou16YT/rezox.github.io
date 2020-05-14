// const TypeWriter = function(txtElement, words, wait = 3000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = '';
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 10);
//   this.type();
//   this.isDeleting = false;
// }

// // Type Method
// TypeWriter.prototype.type = function() {
//   // Current index of word
//   const current = this.wordIndex % this.words.length;
//   // Get full text of current word
//   const fullTxt = this.words[current];

//   // Check if deleting
//   if(this.isDeleting) {
//     // Remove char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // Add char
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // Initial Type Speed
//   let typeSpeed = 300;

//   if(this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   // If word is complete
//   if(!this.isDeleting && this.txt === fullTxt) {
//     // Make pause at end
//     typeSpeed = this.wait;
//     // Set delete to true
//     this.isDeleting = true;
//   } else if(this.isDeleting && this.txt === '') {
//     this.isDeleting = false;
//     // Move to next word
//     this.wordIndex++;
//     // Pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);
// }


class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // index de mot
      const current = this.wordIndex % this.words.length;
      // mot complet
      const fullTxt = this.words[current];
  
      // verif si delete
      if(this.isDeleting) {
        // enlever le char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // mettre le char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // mettre le txt dans le html
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // vitesse
      let typeSpeed = 300;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // si le mot est complet
      if(!this.isDeleting && this.txt === fullTxt) {
        // pause a la fin
        typeSpeed = this.wait;
        // delete true pour sup
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // mot suivant
        this.wordIndex++;
        // attendre avant c'écrire
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', init);
  
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // activer le typewriter
    new TypeWriter(txtElement, words, wait);
  }