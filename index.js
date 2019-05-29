import test from "webassembly-feature"

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const results = [
    "JS-BigInt-integration",
    "multi-value",
    "mutable-global",
    "simd"
  ].reduce((acc, feature) => {
    acc += `${feature}: ${test[feature]()}\n`;
    return acc;
  }, "");

  return new Response(results);
}
