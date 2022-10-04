async function* dummyGenerator() {
  while (true) {
    yield 1
  }
}

function onTimeout(r) {
  console.log('-------------> js code <-------------')
  r()
}

async function sleep() {
  console.log('[test.js] creating promise')
  const promise = new Promise(r => setTimeout(() => onTimeout(r), 500))
  console.log('[test.js] promise created')
  return promise
}

(async () => {
  for await (const _ of dummyGenerator()) {
    await sleep()
  }
})()

