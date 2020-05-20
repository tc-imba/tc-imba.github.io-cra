/**
 * Asynchronously loads the component for ProfilePage
 */

import { lazyLoadWrapper } from 'utils/loadable';

export const ProfilePage = lazyLoadWrapper(
  () => import('./index'),
  'ProfilePage',
);
