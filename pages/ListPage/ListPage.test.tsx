import { QueryClient, QueryClientProvider } from "react-query";
import renderer from "react-test-renderer";

import ListPage from "../ListPage";

const queryClient = new QueryClient();

describe("<ListPage />", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("has 4 child", () => {
    const tree = renderer.create(
      <QueryClientProvider client={queryClient}>
        <ListPage />
      </QueryClientProvider>
    ).toJSON();
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

  it("updates the list after 5 seconds", () => {
    const tree = renderer.create(
      <QueryClientProvider client={queryClient}>
        <ListPage />
      </QueryClientProvider>
    );

    jest.runAllTimers();

    const updatedTree = tree.toJSON();
    // assert that the updated tree is what you expect

    tree.unmount();
  });
});