const axios = require('axios');

// jest.setTimeout(15000);

test('Addition Testing', () => {
  expect(10 + 20).toBe(30);
});

test('Random testing', () => {
  const r = Math.random();
  expect(r).toBeLessThan(1);
  expect(r).toBeGreaterThanOrEqual(0);
});

test('Get the data', () => {
  (async () => {
    const response = await axios.get('https://kh-test.vercel.app/');
    expect(response.data).toBe("Hello everyone");
  })();
})