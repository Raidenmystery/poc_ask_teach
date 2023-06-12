import { QueryClient, QueryClientProvider } from "react-query";
import renderer from "react-test-renderer";

import ListPage from "../ListPage";

const queryClient = new QueryClient();

describe("<ListPage />", () => {
  it("has 4 child", () => {
    const tree = renderer.create(
    <QueryClientProvider client={queryClient}>
      <ListPage />
    </QueryClientProvider>
    )
    .toJSON();
    expect(tree?.children?.length).toBe(4);
  });
  it("renders correctly", () => {
    const tree = renderer.create(
      <QueryClientProvider client={queryClient}>
        <ListPage />
      </QueryClientProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});