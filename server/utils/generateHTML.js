const generateColors = (allColors, colorCount) => {
  let html = `<ul>`;
  allColors.forEach(color => {
    html += `<li>${color.Name} | ${color.DMC} </li>`;
  });
  html += `</ul>`;
  return html;
};

const generateDetails = ({ width, height, margin, tpi, fabric }) => {
  let html = `<div id="project-details">
    <ul>
      <li>${width} | ${height} | ${margin} | ${tpi} | ${fabric}</li></ul></div>`;
  return html;
};

module.exports = {
  generateColors,
  generateDetails
};
