import GlobalHeader from "carbon-react/lib/components/global-header";
import carbonLogo from "../assets/images/carbon-logo.png";
import {
  Menu,
  MenuItem,
  MenuSegmentTitle,
} from "carbon-react/lib/components/menu";
export const GlobalHeaderBasicMenu = () => {
  const Logo = () => <img height={28} src={carbonLogo} alt="Carbon logo" />;

  return (
    <GlobalHeader logo={<Logo />}>
      <Menu menuType="black" display="flex" flex="1">
        <MenuItem flex="1" submenu="Product Switcher">
          <MenuItem>Product A</MenuItem>
          <MenuItem>Product B</MenuItem>
        </MenuItem>
        <MenuItem flex="0 0 auto" submenu="Parent Menu 1">
          <MenuItem href="#">Child Item 1</MenuItem>
          <MenuSegmentTitle>Segment title</MenuSegmentTitle>
          <MenuItem href="#">Child Item 2</MenuItem>
          <MenuItem href="#">Child Item 3</MenuItem>
        </MenuItem>
        <MenuItem flex="0 0 auto" submenu="Parent Menu 2">
          <MenuItem>Child Item</MenuItem>
        </MenuItem>
      </Menu>
    </GlobalHeader>
  );
};
