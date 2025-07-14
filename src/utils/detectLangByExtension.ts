export function detectLangByExtension(ext) {
  switch (ext) {
    case '.ts':
      return 'typescript';
    case '.js':
      return 'javascript';
    case '.html':
      return 'html';
    default:
      return '';
  }
}