import client from '@sendgrid/client';

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error('SENDGRID_API_KEY environment variable is not set');
}
client.setApiKey(apiKey);

type AddToListData = {
  firstName?: string;
  email: string;
};

export async function addToSendGridList(options: AddToListData) {
  const { email, firstName } = options;
  const listId = process.env.SENDGRID_LIST_ID;

  if (!listId) {
    throw new Error('SENDGRID_LIST_ID environment variable is not set');
  }

  const [response] = await client.request({
    method: 'PUT',
    url: '/v3/marketing/contacts',
    body: {
      list_ids: [listId],
      contacts: [{ email, first_name: firstName }],
    },
  });

  return response.body;
}
