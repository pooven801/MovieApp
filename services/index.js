const url = 'http://api.themoviedb.org/3';

export async function getList(params) {
  console.log(url + '/discover/movie?' + params);
  const response = await fetch(url + '/discover/movie?' + params, {
    method: 'GET',
  });

  return response?.json();
}

export async function getDetail(params) {
  console.log(url + '/movie' + params);
  const response = await fetch(url + '/movie' + params, {
    method: 'GET',
  });

  return response?.json();
}
