import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "17px",
        fontWeight: "500",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      {/* <Menu.Item key="/wallet">
        <NavLink to="/wallet">👛 My Wallet</NavLink>
      </Menu.Item> */}
      <Menu.Item key="/1inch">
        <NavLink to="/1inch">Trade</NavLink>
      </Menu.Item>
      <Menu.Item key="farm">
        <NavLink to="/onramp">NeoBit Farm</NavLink>
      </Menu.Item>
      <Menu.Item key="onramp">
        <NavLink to="/onramp">NeoBit Pools</NavLink>
      </Menu.Item>
      <Menu.Item key="nft">
        <NavLink to="/onramp">NeoBit NFT</NavLink>
      </Menu.Item>
      <Menu.Item key="whitepaper">
        <NavLink to="/onramp">Whitepaper</NavLink>
      </Menu.Item>
      <Menu.Item key="contract">
        <NavLink to="/onramp">Contract</NavLink>
      </Menu.Item>
      {/* <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance">💰 Balances</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
        <NavLink to="/erc20transfers">💸 Transfers</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">🖼 NFTs</NavLink>
      </Menu.Item>
      <Menu.Item key="/contract">
        <NavLink to="/contract">📄 Contract</NavLink>
      </Menu.Item> */}
    </Menu>
  );
}

export default MenuItems;
