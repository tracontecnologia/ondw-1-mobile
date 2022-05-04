import { createContext, useContext, useEffect, useState } from 'react';

import { Constants } from '../configs';
import { StorageHelper } from '../helpers';
import { IGetUserDataResponse } from '../interfaces';
import { setBearerToken } from '../providers';

export interface IAuthContext {
  accessToken?: string;
  setAccessToken(accessToken: string): void;
  user?: IGetUserDataResponse;
  setUser(user: IGetUserDataResponse): void;
}

const AuthContext = createContext<IAuthContext>(null!);

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [accessToken, setAccessToken] = useState<string>();
  const [user, setUser] = useState<IGetUserDataResponse>();

  async function loadDefault() {
    const storage = await StorageHelper.getItem(Constants.AuthStorageKey);
    if (storage?.accessToken) {
      setAccessToken(storage.accessToken);
      setBearerToken(storage.accessToken);
    }
    if (storage?.user) setUser(storage.user);
  }

  useEffect(() => {
    loadDefault();
  }, []);

  useEffect(() => {
    StorageHelper.setItem(Constants.AuthStorageKey, { accessToken, user });
  }, [accessToken, user]);

  return (
    <AuthContext.Provider
      value={{ accessToken, setAccessToken, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
