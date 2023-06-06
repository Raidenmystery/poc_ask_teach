import { useQuery } from 'react-query';

function useGetValues() {
  const data = useQuery(
    'data',
    async () => {
      const result = {}
      /* const {
        data: { result },
      } = await fetchCurrency() */
      return result
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  )

  return data
}

export { useGetValues };
