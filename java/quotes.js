


document.addEventListener('DOMContentLoaded', function() {
  const randomHTMLDiv = document.getElementById('randomHTML');

  // Function to generate a random piece of HTML code
  function generateRandomHTML() {
      const htmlOptions = [
          '<q><i>All is riddle, and the key to a riddle is another riddle.</i></q> <b><nobr>&ndash; Ralph</nobr> Waldo Emerson</b>',
          '<q><i>The farther backward you can look, the farther forward you will see.</i></q> <b><nobr>&ndash; Winston</nobr> Churchill</b>',
          '<q><i>When you look long into an abyss, the abyss looks into you.</i></q> <b><nobr>&ndash; Friedrich</nobr> Nietzsche</b>',
          '<q><i>The irrationality of a thing is not an argument against its existence, rather a condition of it.</i></q> <b><nobr>&ndash; Friedrich</nobr> Nietzsche</b>',
          '<q><i>A belief is not merely an idea the mind possesses; it is an idea that possesses the mind.</i></q> <b><nobr>&ndash; Robert</nobr> Oxton Bolt</b>',
          '<q><i>The question that sometimes drives me hazy: Am I or the others crazy?</i></q> <b><nobr>&ndash; Albert</nobr> Einstein</b>',
          '<q><i>What we do for ourselves dies with us.  What we do for others and the world remains and is immortal.</i></q> <b><nobr>&ndash; Albert</nobr> Pine</b>',
          '<q><i>Some of the best lessons are learned from past mistakes.  The error of the past is the wisdom of the future.</i></q> <b><nobr>&ndash; Dale</nobr> Turner</b>'
          '<q><i>Better than a thousand days of diligent study, is one day with a great teacher.</i></q> <b><nobr>&ndash; Japanese</nobr> proverb</b>'
          '<q><i></i></q> <b><nobr>&ndash; </nobr></b>'
          '<q><i></i></q> <b><nobr>&ndash; </nobr></b>'
          '<q><i></i></q> <b><nobr>&ndash; </nobr></b>'
          '<q><i></i></q> <b><nobr>&ndash; </nobr></b>'
          '<q><i></i></q> <b><nobr>&ndash; </nobr></b>'
          '<q><i></i></q> <b><nobr>&ndash; </nobr></b>'
          '<q><i></i></q> <b><nobr>&ndash; </nobr></b>'
          '<q><i></i></q> <b><nobr>&ndash; </nobr></b>'
          '<q><i></i></q> <b><nobr>&ndash; </nobr></b>'
          '<q><i></i></q> <b><nobr>&ndash; </nobr></b>'    
          '<q><i></i></q> <b><nobr>&ndash; </nobr></b>'
    
    
    ];

      const randomIndex = Math.floor(Math.random() * htmlOptions.length);
      return htmlOptions[randomIndex];
  }

  // Display a random piece of HTML code when the page loads
  randomHTMLDiv.innerHTML = generateRandomHTML();
});
