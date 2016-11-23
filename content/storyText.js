const storyText = {
  page1: {
    pageText:
              'In a galaxy not so far from our own, lives a curious robot named GloBot.  Here she is sleeping peacefully, dreaming of exciting adventures.  Shall we wake her up?',
    imageUrl: '../content/images/globot-sleeping.svg',
    imageClassName: 'main-image sleeping-globot',
    imageAlt: 'GloBot sleeping in a gray bed with blue and green covers.',
    choiceButton: {
                    visible: 'visible',
                    text: 'Yes!',
                    result: 'page2'
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  },
  },

  page2: {
    pageText:
              '"Oh no! What happened to my glow spot?!  What should I do?  I can\'t be GloBot the robot without a glow spot!  Should I turn my power off or ask my best friend Janky for help?"',
    imageUrl: '../content/images/oh-no.svg',
    imageClassName: 'main-image oh-no',
    imageAlt: 'GloBot looks surprised that her glow is gone',
    choiceButton: {
                    visible: 'visible',
                    text: 'Ask Janky',
                    result: 'page3'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'Power Off',
                    result: 'page4'
                  }
  },

  page3: {
    pageText:
              '"Oh Janky! I\'ve lost my glow! What should I do?"  GloBot cried.  "Hmm..."  replied Janky,  "I know!  We need to find you some GloGurt! I\'ve heard that it can recharge your glow energy.  But where should we go to look for some?"',
    imageUrl: '../content/images/friends.svg',
    imageClassName: 'main-image friends',
    imageAlt: 'A picture of GloBot and Janky, GloBot\'s hardscrabble best friend',
    choiceButton: {
                    visible: 'visible',
                    text: 'Planet Goo',
                    result: 'page5'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'It\'s a secret',
                    result: 'page6'
                  }
  },

  page4: {
    pageText:
              'Well, that wasn\'t a great idea, was it?  GloBot turned her power switch off and there is no one around to turn it back on!   THE END.',
    imageUrl: '../content/images/powered-down.svg',
    imageClassName: 'main-image power-down',
    imageAlt: 'GloBot has powered down and is off.',
    choiceButton: {
                    visible: 'hidden',
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  },

  page5: {
    pageText:
              'Oh no!  GloBot is trapped in a swirling sea of slimy, sticky goo!  THE END.',
    imageUrl: '../content/images/surprised-globot.svg',
    imageClassName: 'main-image surprised-bot',
    imageAlt: 'GloBot is slowly spinning in a sticky planet as she is trapped in goo.',
    choiceButton: {
                    visible: 'hidden',
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  },

  page6: {
    pageText:
              '"Hello sir! Do you know where I can find GloGurt?" asked GloBot. "That\s a secret! But you\'re in luck because I happen to sell secrets." said the shopkeeper. "Ok, how much does a secret cost?" GloBot replied. "I\'ll make you a deal... your friend there has a pretty nice tie, that ought to do it." Janky hands over the tie in exchange for a large box." "What\'s this?" he asked. "That\'s a secret! HAHAHA!"',
    imageUrl: '../content/images/mystery-box.svg',
    imageClassName: 'main-image mystery-box',
    imageAlt: 'A picture of GloBot and Janky at a stand that says "Secrets for Sale!"',
    choiceButton: {
                    visible: 'visible',
                    text: 'Open the box',
                    result: 'page7'
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  },

  page7: {
    pageText:
              '"Aw man! It\'s just a box of cheese!  We got ripped off!" GloBot cried. "Ooh cheese!!" exclaimed Janky, "I love cheese!" "Janky, you\'re not helping." "Excuse me, I overheard you telling the shopkeeper you were searching for GloGurt, is that right?" said the mysterious man in the spacesuit. "YES! Do you know where we can find some?" "I sure do, but it will cost you that box of cheese. I haven\'t eaten cheese since I left the Blorg galaxy!" "It\'s a deal!" GloBot exclaimed. The spaceman replied, "You should be able to find some at the GloGurt factory, just take a left at the Twin Planets, you can\'t miss it."',
    imageUrl: '../content/images/box-o-cheese.svg',
    imageClassName: 'main-image box-o-cheese',
    imageAlt: 'GloBot, Janky, a giant box of cheese, and a mysterious spaceman',
    choiceButton: {
                    visible: 'visible',
                    text: 'To the Factory!',
                    result: 'page8'
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  },

  page8: {
    pageText:
              '"There it is!  Shoot, it seems to be locked! It doesn\'t look like anyone is in there. What do you think?  Should we try to break in?"',
    imageUrl: '../content/images/glogurt-factory.svg',
    imageClassName: 'main-image glogurt-factory',
    imageAlt: 'GloBot and Janky arrive to find the GloGurt factory is locked.',
    choiceButton: {
                    visible: 'visible',
                    text: 'Yes',
                    result: 'page9'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'No way!',
                    result: 'page10'
                  }
  },

  page9: {
    pageText:
              'Busted!  Janky and GloBot are arrested by a GloGurt factory security guard.  THE END.',
    imageUrl: '../content/images/uh-oh.svg',
    imageClassName: 'main-image uh-oh',
    imageAlt: 'GloBot and Janky are arrested by the police for trying to break in to the GloGurt factory.',
    choiceButton: {
                    visible: 'hidden',
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  },

  page10: {
    pageText:
              '"Oh, hello! Who are you?" asked Janky.  "I am Professor Dinklebottom and I used to run this factory.  I am the inventor of GloGurt." "Oh we are so happy you are here, we are looking for GloGurt!" exclaimed GloBot. "Well, unfortunately for you I was fired." "Fired? But you invented GloGurt, why would they fire you?" asked GloBot. "They didn\'t like my latest flavor -- mustard and licorice." said Professor Dinklebottom.  Janky replied, "I can see why! That sounds terrible!"'  ,
    imageUrl: '../content/images/dinklebottom.svg',
    imageClassName: 'main-image professor',
    imageAlt: 'GloBot and Janky meet Professor Dinklebottom outside the GloGurt factory.',
    choiceButton: {
                    visible: 'visible',
                    text: 'Next page',
                    result: 'page11'
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  },

  page11: {
    pageText:
              '"Everyone is allowed to have their own opinions, I happen to like mustard and licorice." "I\'m sorry Professor," GloBot said, "we did not mean to offend you. Do you happen to know where else we can find GloGurt?" "Well," the Professor replied, "there is a GloGurt vending machine at the Space Disco, but there is a dance contest going on now. Do you want to enter the dance contest?"',
    imageUrl: '../content/images/dinklebottom.svg',
    imageClassName: 'main-image professor',
    imageAlt: 'GloBot and Janky meet Professor Dinklebottom outside the GloGurt factory.',
    choiceButton: {
                    visible: 'visible',
                    text: 'For sure!',
                    result: 'page12'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'I don\'t dance.',
                    result: 'page13'
                  }
  },

  page12: {
    pageText:
              'Dance! Dance! Dance!',
    imageUrl: '../content/images/roller-bot.svg',
    imageClassName: 'small-image roller-bot',
    imageAlt: 'Roller Bot',
    imageUrl2: '../content/images/purple-robot.svg',
    imageClassName2: 'small-image purple-robot',
    imageAlt2: 'Purple Robot',
    imageUrl3: '../content/images/globot.svg',
    imageClassName3: 'small-image globot',
    imageAlt3: 'GloBot',
    choiceButton: {
                    visible: 'visible',
                    text: 'See the winner',
                    result: 'page14'
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  },

  page13: {
    pageText:
              'Well that is boring.  I guess just go home as dancing is the only way to get GloGurt. THE END',
    imageUrl: '../content/images/dinklebottom.svg',
    imageClassName: 'main-image professor',
    imageAlt: 'GloBot and Janky meet Professor Dinklebottom outside the GloGurt factory.',
    choiceButton: {
                    visible: 'hidden',
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  },

  page14: {
    pageText:
              'And the winner is... GloBot! You have won the grand prize... a lifetime supply of GloGurt!',
    imageUrl: '../content/images/globot.svg',
    imageClassName: 'small-image globot-wins',
    imageAlt: 'GloBot',
    imageUrl2: '../content/images/vending-machine.svg',
    imageClassName2: 'small-image vending-machine',
    imageAlt2: 'Vending Machine',
    choiceButton: {
                    visible: 'visible',
                    text: 'Continue',
                    result: 'page15'
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  },

  page15: {
    pageText:
              '"Oh Janky, we did it!" exclaimed GloBot, "I couldn\'t have done it without you!" "That\'s what friends do, support each other. Now let\'s go home!" Janky replied. THE END.',
    imageUrl: '../content/images/globot-glows.svg',
    imageClassName: 'small-image globot-glows',
    imageAlt: 'GloBot',
    imageUrl2: '../content/images/janky-robot.svg',
    imageClassName2: 'small-image janky-robot',
    imageAlt2: 'Vending Machine',
    choiceButton: {
                    visible: 'hidden',
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  }
};

module.exports = storyText;
