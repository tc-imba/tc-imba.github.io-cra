/**
 * Asynchronously loads the component for ProfilePage
 */

import { lazyLoadWrapper } from 'utils/loadable';

export const CodeActivityPage = lazyLoadWrapper(
  () => import('./index'),
  'CodeActivityPage',
);
