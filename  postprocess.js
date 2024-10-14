const fs = require('fs');

module.exports = (html) => {
  // Modify the HTML by replacing the node_modules path
  return html.replace(/src="\/node_modules/g, 'src="./node_modules');
};