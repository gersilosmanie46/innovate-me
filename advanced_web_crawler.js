/**
 * Filename: advanced_web_crawler.js
 * Content: A sophisticated and elaborate web crawler that searches for specific keywords and extracts information from websites.
 */

const fetch = require('node-fetch');
const cheerio = require('cheerio');

// Configuration
const targetUrl = 'https://www.example.com';
const keywords = ['JavaScript', 'Node.js', 'Web Development'];
const maxDepth = 3;

// Global variables
let visitedUrls = new Set();
let results = [];
let depth = 0;

/**
 * Asynchronous function that starts the web crawling process.
 */
async function startCrawling() {
  try {
    await crawl(targetUrl);
    console.log('Crawling finished successfully.');
    console.log('Results:');
    console.log(results);
  } catch (error) {
    console.error('An error occurred while crawling:', error);
  }
}

/**
 * Recursive function that crawls a given URL.
 * @param {string} url - The URL to crawl.
 */
async function crawl(url) {
  if (visitedUrls.has(url) || depth >= maxDepth) {
    return;
  }

  visitedUrls.add(url);

  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  // Extract relevant information from the webpage
  const pageData = {
    url: url,
    title: $('title').text(),
    description: $('meta[name="description"]').attr('content'),
    keywords: $('meta[name="keywords"]').attr('content')
  };

  // Filter out the pages that do not contain any of the keywords
  const keywordMatches = keywords.filter(keyword => {
    return pageData.title.includes(keyword) ||
      pageData.description.includes(keyword) ||
      (pageData.keywords &&
        pageData.keywords.split(',').includes(keyword));
  });

  if (keywordMatches.length > 0) {
    results.push(pageData);
  }

  // Get all the links from the webpage and recursively crawl them
  const links = [];
  $('a').each((_, element) => {
    links.push($(element).attr('href'));
  });

  for (const link of links) {
    const absoluteLink = new URL(link, url).toString();
    await crawl(absoluteLink);
  }

  depth--;
}

// Start the web crawling process
startCrawling();