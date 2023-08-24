import { NextApiRequest, NextApiResponse } from 'next';

const BuiltTime = require('built-time.ts');
export default function handler(request: NextApiRequest, response: NextApiResponse){
  response.setHeader('content-type', 'text/plain');
  response.send(`
    This Serverless Function was built at ${new Date(BuiltTime)}.
    The current time is ${new Date()}
  `);
};