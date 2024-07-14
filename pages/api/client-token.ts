import type { NextApiRequest, NextApiResponse } from 'next';
import braintree, { Environment } from 'braintree';

const gateway = new braintree.BraintreeGateway({
  environment: Environment.Sandbox,
  merchantId: 'wks3whv2kgkgttxs',
  publicKey: '45m22tvprnjmn9bw',
  privateKey: 'e51531ea45c0130cb83bea141f235386'
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await new Promise((resolve, reject) => {
      gateway.clientToken.generate({}, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });

    res.status(200).json({ clientToken: response.clientToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
