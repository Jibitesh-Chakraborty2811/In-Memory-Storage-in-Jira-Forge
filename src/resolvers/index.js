import Resolver from '@forge/resolver';
import { storage } from '@forge/api';


const resolver = new Resolver();

resolver.define('getText', async (req) => {
  await storage.set('foo', 'bar');
  const storedValue = await storage.get('foo');
  console.log(storedValue)
  return storedValue;
});

export const handler = resolver.getDefinitions();
