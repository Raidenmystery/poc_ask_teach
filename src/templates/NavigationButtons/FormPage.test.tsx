import React from "react";
import renderer from "react-test-renderer";

import App from "./index";

describe("<App />", () => {
  it("has 5 child", () => {
    const tree = renderer.create(<App navigation={{}} type="List" />).toJSON();
    expect(tree?.children?.length).toBe(2);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<App navigation={{}} type="List" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
