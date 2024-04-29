export async function getCurrency(cur: string): Promise<{ [key: string]: number }> {
    try {
      const res = await fetch(`https://open.er-api.com/v6/latest/${cur}`);
      const data = await res.json();
      return data['rates'];
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
