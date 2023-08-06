import { useQuery } from 'react-query';
import { useToastError } from './useToastError';
import UrlsService from '../services/urls.service';
import { QueryKeys } from '../enums';

export const useUrlsQuery = () => {
  const showError = useToastError();
  return useQuery({
    queryFn: () => UrlsService.getAll(),
    queryKey: [QueryKeys.URLS],
    staleTime: 5000,
    onError: showError
  });
};
