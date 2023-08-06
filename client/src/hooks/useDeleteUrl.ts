import { useMutation, useQueryClient } from 'react-query';
import UrlsService from '../services/urls.service';
import { useToastError } from './useToastError';
import { useToast } from '@chakra-ui/react';
import { QueryKeys } from '../enums';

export const useDeleteUrlQuery = () => {
  const showError = useToastError();
  const toast = useToast();
  const client = useQueryClient();
  return useMutation({
    mutationFn: (urlCode: string) => UrlsService.delete(urlCode),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QueryKeys.URLS] });
      toast({
        status: 'success',
        title: 'Link succesfully deleted',
        position: 'top'
      });
    },
    onError: showError
  });
};