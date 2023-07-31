


document.addEventListener('DOMContentLoaded', function() {
  const randomHTMLDiv = document.getElementById('randomHTML');

  // Function to generate a random piece of HTML code
  function generateRandomHTML() {
      const htmlOptions = [
          '<q><i>The belief in a supernatural source of evil is not necessary.  Men alone are quite capable of every wickedness.</i></q> <b><nobr>&ndash; Joseph</nobr> Conrad</b>',
          '<q><i>All is riddle, and the key to a riddle is another riddle.</i></q> <b><nobr>&ndash; Ralph</nobr> Waldo Emerson</b>',
          '<q><i>The farther backward you can look, the farther forward you will see.</i></q> <b><nobr>&ndash; Winston</nobr> Churchill</b>',
          '<q><i>When you look long into an abyss, the abyss looks into you.</i></q> <b><nobr>&ndash; Friedrich</nobr> Nietzsche</b>',
          '<q><i>Don’t bother just to be better than your contemporaries or predecessors.  Try to be better than yourself.</i></q> <b><nobr>&ndash; William</nobr> Faulkner</b>',
          //'<q><i>Don’t forget that I cannot see myself, that my role is limited to being the one who looks in the mirror.</i></q> <b><nobr>&ndash; Jacques</nobr> Rigaut</b>',
          //'<q><i>Birds sing after a storm; why shouldn’t people feel as free to delight in whatever sunlight remains to them?</i></q> <b><nobr>&ndash; Rose</nobr> Kennedy</b>',
          '<q><i>The irrationality of a thing is not an argument against its existence, rather a condition of it.</i></q> <b><nobr>&ndash; Friedrich</nobr> Nietzsche</b>',
          '<q><i>Nothing is so common as the wish to be remarkable.</i></q> <b><nobr>&ndash; William</nobr> Shakespeare</b>',
          //'<q><i>The healthy man does not torture others.  Generally, it is the tortured who turn into torturers.</i></q> <b><nobr>&ndash; Carl</nobr> Jung</b>',
          '<q><i>A belief is not merely an idea the mind possesses; it is an idea that possesses the mind.</i></q> <b><nobr>&ndash; Robert</nobr> Oxton Bolt</b>',
          '<q><i>The question that sometimes drives me hazy: Am I or the others crazy?</i></q> <b><nobr>&ndash; Albert</nobr> Einstein</b>',
          //'<q><i>The bitterest tears shed over graves are for words left unsaid and deeds left undone.</i></q> <b><nobr>&ndash; Harriet</nobr> Beecher Stowe</b>',
          '<q><i>What is food to one, is to others bitter poison.</i></q> <b><nobr>&ndash; Lucretius</nobr> Carus</b>',
          '<q><i>Before you embark on a journey of revenge, dig two graves.</i></q> <b><nobr>&ndash; Kǒng</nobr> Fūzǐ</b>',
          '<q><i>What we do for ourselves dies with us.  What we do for others and the world remains and is immortal.</i></q> <b><nobr>&ndash; Albert</nobr> Pine</b>',
          '<q><i>The individual has always had to struggle to keep from being overwhelmed by the tribe.</i> <b><nobr>&ndash; Friedrich</nobr> Nietzsche</b>',
          //'<q><i>Murder is unique in that it abolishes the party it injures, so that society must take the place of the victim and on his behalf demand atonement or grant forgiveness.</i></q> <b><nobr>&ndash; Wystan</nobr> Hugh Auden</b>',
          //'<q><i>Better to be violent if there’s violence in our hearts than to put on the cloak of non-violence to cover impotence.</i></q> <b><nobr>&ndash; Mahatma</nobr> Gandhi</b>',
          //'<q><i>I object to violence because when it appears to do good, the good is only temporary.  The evil it does is permanent.</i></q> <b><nobr>&ndash; Mahatma</nobr> Gandhi</b>',
          '<q><i>There are some that only employ words for the purpose of disguising their thoughts.</i></q> <b><nobr>&ndash; François-Marie</nobr> Arouet</b>',
          '<q><i>We are so accustomed to disguise ourselves to others that in the end we become disguised to ourselves.</i></q> <b><nobr>&ndash; François</nobr> de la Rochefoucauld</b>',
          '<q><i>Whoever undertakes to set himself up as judge in the field of truth and knowledge is shipwrecked by the laughter of the gods.</i></q> <b><nobr>&ndash; Albert</nobr> Einstein</b>',
          '<q><i>In a time of universal deceit, telling the truth is a revolutionary act.</i></q> <b><nobr>&ndash; George</nobr> Orwell</b>',
          //'<q><i>It has been said, ‘time heals all wounds.’  I do not agree.  The wounds remain.  In time, the mind, protecting its sanity, covers them with scar tissue and the pain lessens.  But it is never gone.</i></q> <b><nobr>&ndash; Rose</nobr> Kennedy</b>',
          //'<q><i>Of all the animals, man is the only one that is cruel.  He is the only one that inflicts pain for the pleasure of doing it.</i></q> <b><nobr>&ndash; Mark</nobr> Twain</b>',
          //'<q><i>Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.</i></q> <b><nobr>&ndash; Kahlil</nobr> Gibran</b>',
          //'<q><i>Man is least himself when he talks in his own person.  Give him a mask, and he will tell you the truth.</i></q> <b><nobr>&ndash; Oscar</nobr> Wilde</b>',
          //'<q><i>The basis of shame is not some personal mistake of ours, but that this humiliation is seen by everyone.</i></q> <b><nobr>&ndash; Milan</nobr>Kundera</b>',
          '<q><i>Although the world is full of suffering, it is full also of the overcoming of it.</i></q> <b><nobr>&ndash; Helen</nobr> Keller</b>',
          '<q><i>It’s not so important who starts the game, but who finishes it.</i></q> <b><nobr>&ndash; John</nobr> Wooden</b>'
          //'<q><i></i></q> <b><nobr>&ndash; </nobr></b>'
        ];

      const randomIndex = Math.floor(Math.random() * htmlOptions.length);
      return htmlOptions[randomIndex];
  }

  // Display a random piece of HTML code when the page loads
  randomHTMLDiv.innerHTML = generateRandomHTML();
});
