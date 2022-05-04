import { useCallback, useState } from 'react';

import { UserService } from '../services';
import { IGetUserByIdResponse } from '../interfaces';
import { useNFT } from './useNFT';

export function useUser() {
  const [user, setUser] = useState<IGetUserByIdResponse>();

  const { getNFTPhotoURL } = useNFT();

  const getUserById = useCallback(async (id: string) => {
    const { status, data } = await UserService.getById(id);
    if (status === 200) {
      data.likedNfts = data.likedNfts.map((nft) => ({
        ...nft,
        photoUrl: getNFTPhotoURL(nft.photoUrl),
      }));
      setUser(data);
    }
  }, []);

  return {
    user,
    getUserById,
  };
}
