import got from "got";
import hpagent from "hpagent";

const proxy = "http://127.0.0.1:3128";

const agent = {
  http: new hpagent.HttpProxyAgent({
    proxy,
    keepAlive: true,
    keepAliveMsecs: 1000,
    maxSockets: 256,
    maxFreeSockets: 256,
    scheduling: "lifo",
  }),
  https: new hpagent.HttpsProxyAgent({
    proxy,
    keepAlive: true,
    keepAliveMsecs: 1000,
    maxSockets: 256,
    maxFreeSockets: 256,
    scheduling: "lifo",
  }),
};

// got request
async function main() {
  const url = "https://9ho21eclbd.execute-api.us-east-1.amazonaws.com/hello";
  const options = {
    url,
    method: "get",
    agent,
    // http2: true,
  };
  const res = await got(options);
  console.log(res.body);
}

main().catch(console.error);
