import { Md5 } from "ts-md5";

// Params: slug - part of the url before the keys

export const urlBuilder = (slug: string) => {
    const ts: Number = Number(new Date());
    const hash = Md5.hashStr(
    ts + process.env.PRIVATE_KEY + process.env.PUBLIC_KEY
  );

    const url: string = `https://gateway.marvel.com/v1/public/${slug}?ts=${ts}&limit=10&apikey=${process.env.PUBLIC_KEY}&hash=${hash}`

    return url
}

export async function getImage(url) {
  const req = await fetch(url);
  const res = await req
  console.log(res);

  if (!res) {
    return {
      notFound: true,
    };
  }

  return res
}