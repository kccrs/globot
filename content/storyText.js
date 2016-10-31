
const storyText = {

	page1: function() {
		return {
      id: 'page1',
      pageText: 'Hello this is page 1 text',
      image1: 'url.....',
      choices: ['a','b'],
      result: ['page2','page3']
    };
	},

	page2: function() {
		return {
      id: 'page2',
      pageText: 'Hello this is page 2 text',
      image1: 'url.....',
      choices: ['c','d'],
      result: ['page4','page5']
    };
	}
};

module.exports = storyText;
