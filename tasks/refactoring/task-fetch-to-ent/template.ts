async function fetchData(page, limit) {
  const params = new URLSearchParams();
  params.append('_page', page.toString());
  params.append('_limit', limit.toString());

  const endpoint = 'https://jsonplaceholder.typicode.com/posts';
  const url = new URL(endpoint);
  url.search = params.toString();

  const response = await fetch(url);
  const data = await response.json();
  data.forEach(p =>console.log(p.title));
}

fetchData(5, 3);