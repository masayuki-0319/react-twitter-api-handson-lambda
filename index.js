const twitter = require('twitter');

const client = new twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
});

exports.handler = async () => {
  const params = { screen_name: 'hukurouo_code', count: 1 };
  await client
    .get('favorites/list', params)
    .then((tweet) => {
      console.log(tweet);
    })
    .catch((error) => {
      throw error;
    });
  return {
    statusCode: 200,
    body: 'success!',
  };
};
