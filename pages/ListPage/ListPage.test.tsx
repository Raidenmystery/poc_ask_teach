import React from "react";
import renderer from "react-test-renderer";

import ListPage from "./index";

describe("<ListPage />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<ListPage />).toJSON();
    expect(tree?.children?.length).toBe(1);
  });
});
