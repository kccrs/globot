const storyText = {
  page1: {
    pageText: 'In a galaxy not so far from ours, lives a curious robot named GloBot.  GloBot sleeps peacefully, dreaming of far away adventures. Shall we wake her up?',
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
    pageText: '"Oh no! What happened to my glow?!  "',
    imageUrl: '../content/images/surprised-globot.svg',
    imageClassName: 'surprised-globot',
    imageAlt: "GloBot looks surprised that her glow is gone",
    choiceButton: {
                    visible: 'visible',
                    text: 'Yes!',
                    result: 'page4'
                  },
    secondChoiceButton: {
                    visible: 'visible',
                    text: 'No Way!',
                    result: 'page5'
                  }
  },

  page3: {
    pageText: 'OMG three pages!',
    imageUrl: '../content/images/janky-robot.svg',
    imageClassName: 'janky-robot',
    imageAlt: "A picture of Janky, GloBot's hardscrabble best friend",
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

  page4: {
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

  page5: {
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

  page6: {
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
