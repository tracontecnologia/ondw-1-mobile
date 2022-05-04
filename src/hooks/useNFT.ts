import { useCallback, useState } from 'react';

import { NFTService } from '../services';
import { INFT } from '../interfaces';
import { Constants } from '../configs';

export function useNFT() {
  const [nft, setNFT] = useState<INFT>();
  const [nfts, setNFTs] = useState<INFT[]>([]);

  const findAllNFTs = useCallback(async () => {
    const { status, data } = await NFTService.findAll();
    if (status === 200) {
      const nfts = data.map((nft) => ({
        ...nft,
        photoUrl: getNFTPhotoURL(nft.photoUrl),
      }));
      setNFTs(nfts);
    }
  }, []);

  const getNFTById = useCallback(async (id: string) => {
    const { status, data } = await NFTService.getById(id);
    if (status === 200) {
      data.photoUrl = getNFTPhotoURL(data.photoUrl);
      setNFT(data);
    }
  }, []);

  const likeByNFTId = useCallback(async (id: string) => {
    const { status } = await NFTService.likeById(id);
    return status === 201;
  }, []);

  const deleteNFTById = useCallback(async (id: string) => {
    const { status } = await NFTService.deleteNFTById(id);
    return status === 200;
  }, []);

  const getNFTPhotoURL = useCallback(
    (photoURL: string) => `${Constants.ApiBaseUrl}/${photoURL}`,
    []
  );

  return {
    nft,
    nfts,
    getNFTById,
    findAllNFTs,
    likeByNFTId,
    deleteNFTById,
    getNFTPhotoURL,
  };
}
