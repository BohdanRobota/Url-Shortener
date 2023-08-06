import { useMutation, useQueryClient } from 'react-query';
import { useToastError } from './useToastError';
import UrlsService from '../services/urls.service';
import { useToast } from '@chakra-ui/react';
import { QueryKeys } from '../enums';

export const useAddUrlQuery = () => {
  const showError = useToastError();
  const toast = useToast();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (longUrl: string) => UrlsService.addUrl(longUrl),
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.URLS] });
      toast({
        status: 'success',
        title: 'Link successfully shortened',
        position: 'top'
      });
      return data;
    },
    onError: showError
  });
};
