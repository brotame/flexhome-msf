// Fetch fraccionamientos en Airtable
export async function getFraccionamientos() {
  const url = 'https://enylqojaenrauin.m.pipedream.net';

  const response = await fetch(url);
  const fraccionamientos = await response.json();

  if (response.ok) return getFields(fraccionamientos);
  else throw new Error();
}

// Fetch viviendas o atributos en Airtable
export async function getItems({ table, records, sort }) {
  if (!records) return false;

  const url = 'https://enkowc0i2uli1k8.m.pipedream.net';

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = {
    table,
    records,
    sort,
  };

  const options = {
    method: 'POST',
    headers,
    mode: 'cors',
    body: JSON.stringify(body),
  };

  const response = await fetch(url, options);
  const items = await response.json();

  if (response.ok) return getFields(items);
  else throw new Error();
}

function getFields(items) {
  return items.map((item) => {
    item.fields.id = item.id;
    return item.fields;
  });
}
