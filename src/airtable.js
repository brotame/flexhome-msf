export async function getFraccionamientos() {
  const url = 'https://env4d5oc52wdy23.m.pipedream.net';

  const response = await fetch(url);
  const fraccionamientos = await response.json();

  if (response.ok) {
    return getFields(fraccionamientos);
  } else {
    throw new Error();
  }
}

export async function getItems({ table, records }) {
  if (!records) return false;

  const url = 'https://enm0zl4qoisdenh.m.pipedream.net';

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = {
    table: table,
    records: records,
  };

  const options = {
    method: 'POST',
    headers,
    mode: 'cors',
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);
  const items = await response.json();

  if (response.ok) {
    return getFields(items);
  } else {
    throw new Error();
  }
}

function getFields(items) {
  return items.map((item) => item.fields);
}
