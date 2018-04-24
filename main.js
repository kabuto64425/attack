"use strict";

Array.prototype.forEach.call(document.getElementsByClassName('answer_sheet'), function(elem) {
  elem.addEventListener('click', function(e) {
    var selected_color = document.getElementById('selected_color');
    selected_color.classList.remove('red', 'green', 'white', 'blue');
    if(this.classList.contains('red')) {
      selected_color.classList.add('red');
    } else if(this.classList.contains('green')) {
      selected_color.classList.add('green');
    } else if(this.classList.contains('white')) {
      selected_color.classList.add('white');
    } else if(this.classList.contains('blue')) {
      selected_color.classList.add('blue');
    }
  });
});

Array.prototype.forEach.call(document.getElementsByClassName('panel'), function(elem) {
    elem.addEventListener('click', function(e) {
      if(this.classList.contains('red') || this.classList.contains('green') || this.classList.contains('white') || this.classList.contains('blue')) {
        return;
      }

      var selected_color = document.getElementById('selected_color');
      if(selected_color.classList.contains('red')) {
        this.classList.add('red');
      } else if(selected_color.classList.contains('green')) {
        this.classList.add('green');
      } else if(selected_color.classList.contains('white')) {
        this.classList.add('white');
      } else if(selected_color.classList.contains('blue')) {
        this.classList.add('blue');
      } else {
        return;
      }

      let countRed = 0;
      let countGreen = 0;
      let countWhite = 0;
      let countBlue = 0;

      Array.prototype.forEach.call(document.getElementsByClassName('panel'), function(elem) {
        if(elem.classList.contains('red')) {
          countRed++;
        }
        if(elem.classList.contains('green')) {
          countGreen++;
        }
        if(elem.classList.contains('white')) {
          countWhite++;
        }
        if(elem.classList.contains('blue')) {
          countBlue++;
        } 
      });
      
      document.getElementsByClassName('answer_sheet red')[0].textContent = countRed;
      document.getElementsByClassName('answer_sheet green')[0].textContent = countGreen;
      document.getElementsByClassName('answer_sheet white')[0].textContent = countWhite;
      document.getElementsByClassName('answer_sheet blue')[0].textContent = countBlue;

      selected_color.classList.remove('red', 'green', 'white', 'blue');
    });
  });