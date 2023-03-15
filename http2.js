import got from "got";
import http2 from "http2-wrapper";

const httpsProxy = new http2.proxies.Http2OverHttp({
  proxyOptions: {
    url: "http://localhost:3128",

    // For demo purposes only!
    rejectUnauthorized: false,
  },
});

async function main() {
  const res = await got.get(
    "https://9ho21eclbd.execute-api.us-east-1.amazonaws.com/hello",
    {
      followRedirect: false,
      http2: true,
      agent: {
        https: httpsProxy,
        http: httpsProxy,
        http2: httpsProxy,
      },
    }
  );
  console.log(res.body);
}

main().catch(console.error);
