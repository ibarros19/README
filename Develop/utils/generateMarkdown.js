// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License](https://img.shields.io/badge/License-${data.license}-blue)
<hr>
  <h2>Table of Contents</h2>
  
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#install)
  * [Test](#test)
  * [License](#license)
  * [How to contribute](#contribution)
  * [Questions](#questions)
  
  <a name='description'></a>
  ## Description
  ${data.description}
  <a name='usage'></a>
  ## Usage
  ${data.usage}
  <a name='install'></a>
  ## Installation
  ${data.install}
  <a name='test'></a>
  ## Test
  ${data.test}
  <a name='license'></a>
  ## License
  The application has a ${data.license} license.
  <a name='contribution'></a>
  ## How to contribute to this application
  ${data.contribution}
  <a name='questions'></a>
  ## Questions
  If you have any further questions, please feel free to contact me on GitHub at [${data.github}](https://github.com/${data.github}) or by email at [${data.email}](${data.email}).`;
}

module.exports = generateMarkdown;