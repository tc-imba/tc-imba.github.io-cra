/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoadWrapper } from 'utils/loadable';

export const HomePage = lazyLoadWrapper(() => import('./index'), 'HomePage');
