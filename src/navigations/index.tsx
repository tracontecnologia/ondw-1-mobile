import { useAuthContext } from '../contexts';
import { AuthenticatedNavigation } from './AuthenticatedNavigation';
import { UnauthenticatedNavigation } from './UnauthenticatedNavigation';

export function AppNavigations() {
  const { accessToken } = useAuthContext();
  const isAuthenticated = !!accessToken;

  return isAuthenticated ? (
    <AuthenticatedNavigation />
  ) : (
    <UnauthenticatedNavigation />
  );
}
