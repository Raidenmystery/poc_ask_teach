import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const wrapper = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default wrapper;
