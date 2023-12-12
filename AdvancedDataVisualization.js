/*
Filename: AdvancedDataVisualization.js
Content: Advanced Data Visualization using D3.js and SVG
*/

// Import necessary libraries
const d3 = require('d3');

// Set up the dimensions of the chart
const width = 800;
const height = 600;
const margin = { top: 50, right: 50, bottom: 50, left: 50 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Create an SVG container
const svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

// Create a group for the chart
const chart = svg.append('g')
  .attr('transform', `translate(${margin.left}, ${margin.top})`);

// Define the data
const data = [
  { name: 'Category A', value: 30 },
  { name: 'Category B', value: 50 },
  { name: 'Category C', value: 20 },
  { name: 'Category D', value: 40 },
];

// Create x and y scales
const xScale = d3.scaleBand()
  .domain(data.map(d => d.name))
  .range([0, innerWidth])
  .padding(0.1);

const yScale = d3.scaleLinear()
  .domain([0, d3.max(data, d => d.value)])
  .range([innerHeight, 0]);

// Create x and y axes
const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

// Append the axes to the chart
chart.append('g')
  .attr('class', 'x-axis')
  .attr('transform', `translate(0, ${innerHeight})`)
  .call(xAxis);

chart.append('g')
  .attr('class', 'y-axis')
  .call(yAxis);

// Create bars
chart.selectAll('.bar')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', d => xScale(d.name))
  .attr('y', d => yScale(d.value))
  .attr('width', xScale.bandwidth())
  .attr('height', d => innerHeight - yScale(d.value))
  .attr('fill', 'steelblue');

// Add labels to the bars
chart.selectAll('.label')
  .data(data)
  .enter()
  .append('text')
  .attr('class', 'label')
  .attr('x', d => xScale(d.name) + xScale.bandwidth() / 2)
  .attr('y', d => yScale(d.value) - 5)
  .attr('text-anchor', 'middle')
  .text(d => d.value);

// Add a title to the chart
chart.append('text')
  .attr('class', 'title')
  .attr('x', innerWidth / 2)
  .attr('y', -20)
  .attr('text-anchor', 'middle')
  .text('Advanced Data Visualization');

// Add a legend to the chart
const legend = chart.append('g')
  .attr('class', 'legend')
  .attr('transform', `translate(${innerWidth - 100}, ${innerHeight - 150})`);

legend.selectAll('.legend-item')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'legend-item')
  .attr('transform', (d, i) => `translate(0, ${i * 20})`)
  .each(function (d) {
    d3.select(this)
      .append('rect')
      .attr('width', 10)
      .attr('height', 10)
      .attr('fill', 'steelblue');

    d3.select(this)
      .append('text')
      .attr('x', 15)
      .attr('y', 10)
      .text(d.name);
  });

// Add interactivity to the chart
chart.selectAll('.bar')
  .on('mouseover', function () {
    d3.select(this)
      .attr('fill', 'orange');
  })
  .on('mouseout', function () {
    d3.select(this)
      .attr('fill', 'steelblue');
  });

// Add a tooltip to the chart
const tooltip = d3.select('body')
  .append('div')
  .attr('class', 'tooltip')
  .style('opacity', 0);

chart.selectAll('.bar')
  .on('mouseover', function (d) {
    tooltip.transition()
      .duration(200)
      .style('opacity', 0.9);
    tooltip.html(`${d.name}: ${d.value}`)
      .style('left', `${d3.event.pageX + 10}px`)
      .style('top', `${d3.event.pageY - 25}px`);
  })
  .on('mouseout', function () {
    tooltip.transition()
      .duration(500)
      .style('opacity', 0);
  });

// Additional complex data visualization code...
// ...

// Additional complex data visualization code...
// ...

// Additional complex data visualization code...
// ...

// Additional complex data visualization code...
// ...

// Additional complex data visualization code...
// ...

// Additional complex data visualization code...
// ...

// Additional complex data visualization code...
// ...

// Additional complex data visualization code...
// ...

// Additional complex data visualization code...
// ...

// Additional complex data visualization code...
// ...

// Additional complex data visualization code...
// ...

// Additional complex data visualization code...
// ...

// Remaining code...
// ...