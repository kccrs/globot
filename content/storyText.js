const storyText = {
  page1: {
    pageText:
              'In a galaxy not so far from our own, lives a curious robot named GloBot.  Here she is sleeping peacefully, dreaming of exciting adventures.  Shall we wake her up?',
    imageUrl: '../content/images/globot-sleeping.svg',
    imageClassName: 'sleeping-globot',
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
    imageClassName: 'oh-no',
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
    imageClassName: 'friends',
    imageAlt: 'A picture of GloBot and Janky, GloBot\'s hardscrabble best friend',
    choiceButton: {
                    visible: 'visible',
                    text: 'Planet Goo',
                    result: 'page5'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'Some Place',
                    result: 'page6'
                  }
  },

  page4: {
    pageText:
              'Well, that wasn\'t a great idea, was it?  GloBot turned her power switch off and there is no one around to turn it back on!   THE END.',
    imageUrl: '../content/images/powered-down.svg',
    imageClassName: 'power-down',
    imageAlt: 'GloBot has powered down and is off.',
    choiceButton: {
                    visible: 'hidden',
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  },

  page5: {
    pageText: 'Oh no!  GloBot is trapped in a swirling sea of slimy, sticky goo!  THE END.',
    imageUrl: '../content/images/surprised-globot.svg',
    imageClassName: 'surprised-bot',
    imageAlt: 'GloBot is slowly spinning in a sticky planet as she is trapped in goo.',
    choiceButton: {
                    visible: 'hidden',
                  },
    secondChoiceButton: {
                    visible: 'hidden',
                  }
  },

  page6: {
    pageText: '',
    imageUrl: '../content/images/friends.svg',
    imageClassName: 'friends friends-color',
    imageAlt: 'A picture of GloBot and Janky, GloBot\'s hardscrabble best friend',
    choiceButton: {
                    visible: 'visible',
                    text: 'Choose A',
                    result: 'page7'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'Choose B',
                    result: 'page8'
                  }
  },

  page7: {
    pageText: '',
    imageUrl: '',
    imageClassName: '',
    imageAlt: '',
    choiceButton: {
                    visible: 'visible',
                    text: 'Yes!',
                    result: 'page6'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'No Way!',
                    result: 'page7'
                  }
  },

};

module.exports = storyText;
