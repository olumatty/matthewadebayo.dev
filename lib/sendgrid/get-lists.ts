import client from '@sendgrid/client';

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error('SENDGRID_API_KEY environment variable is not set');
}
client.setApiKey(apiKey);

export async function getSendGridLists() {
  const [response] = await client.request({
    method: 'GET',
    url: '/v3/marketing/lists',
  });

  return response.body;
}
