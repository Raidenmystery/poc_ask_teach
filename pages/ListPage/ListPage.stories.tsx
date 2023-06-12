import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { QueryClientProvider } from "react-query";

import ListPage from "./index";
import { queryClient } from "../../shared/config";

export default {
  title: "ListPage",
  component: ListPage,
} as ComponentMeta<typeof ListPage>;

const Template: ComponentStory<typeof ListPage> = () => (
  <QueryClientProvider client={queryClient}>
    <ListPage />
  </QueryClientProvider>
);

export const Default = Template.bind({});
