function edgeEffect(phrase) {
  const edged = phrase.split(' ').slice(1, -1);
  return ['???', ...edged, '???'].join(' ');
}