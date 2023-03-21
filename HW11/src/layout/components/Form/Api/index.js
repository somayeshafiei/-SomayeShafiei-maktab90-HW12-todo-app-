export async function postingData(data) {
  const test = await fetch('http://localhost:3002/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return test;
}
export let tCount = 0;
export async function gettingData() {
  const url = await fetch('http://localhost:3002/tasks');
  tCount = url.headers.get('X-Total-Count');
  const getJson = await url.json();
  return getJson;
}
export async function gettingData2(url, pageLink) {
  try {
    const url1 = await fetch(`${url}/${pageLink}`);
    console.log(url1);
    tCount = url1.headers.get('X-Total-Count');
    const getJson = await url1.json();
    return getJson;
  } catch (error) {
    console.log(error);
  }
}

export async function getItemData(id) {
  const url = await fetch(`http://localhost:3002/tasks/${id}`);
  const getJson = await url.json();
  return getJson;
}

export async function deleteData(id) {
  try {
    const send = await fetch(`http://localhost:3002/tasks/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.log(error);
  }
}

export async function editData(item, id) {
  try {
    const edit = await fetch(`http://localhost:3002/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    return item;
    // return edit;
  } catch (error) {
    console.log(error);
  }
}
