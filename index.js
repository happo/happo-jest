import crypto from 'crypto';

const COMMENT_PATTERN = /^\/\*.+\*\/$/;

function extractCSSBlocks() {
  const blocks = [];
  const styleElements = document.querySelectorAll(
    'style,link[rel="stylesheet"][href]',
  );
  const baseUrl = document.location.origin;
  styleElements.forEach(element => {
    if (element.tagName === 'LINK') {
      // <link href>
      const href = element.getAttribute('href');
      blocks.push({ key: href, href, baseUrl });
    } else {
      // <style>
      const lines = Array.from(element.sheet.cssRules).map(r => r.cssText);

      // Filter out those lines that are comments (these are often source
      // mappings)
      const content = lines
        .filter(line => !COMMENT_PATTERN.test(line))
        .join('\n');

      // Create a hash so that we can dedupe equal styles
      const key = crypto.createHash('md5').update(content).digest('hex');
      blocks.push({ content, key, baseUrl });
    }
  });
  return blocks;
}

function findRootElement() {
  return document.body.querySelector('*');
}

function screenshot(root) {
  const container = root || findRootElement();
  global.happoRegister({
    html: container.innerHTML,
    cssBlocks: extractCSSBlocks(),
  });
}

export { screenshot };
