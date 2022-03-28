import React from "react";
import { createUseStyles, useTheme } from "react-jss";
import { useHistory } from "react-router-dom";
import URLS from "../../resources/Urls";
import { IoMdContacts } from "../../assets/icons";
import { convertSlugToUrl } from "../../resources/Utilities";
import Menu from "./MenuComponent";
import MenuItem from "./MenuItemComponent";

const useStyles = createUseStyles({
  separator: {
    borderTop: ({ theme }) => `1px solid ${theme.color.lightGrayishBlue}`,
    marginTop: 16,
    marginBottom: 16,
    opacity: 0.06
  }
});

function SidebarComponent() {
  const { push } = useHistory();
  const theme = useTheme();
  const classes = useStyles({ theme });
  const isMobile = window.innerWidth <= 1080;

  async function logout() {
    push(URLS.login);
  }

  function onClick(slug, parameters = {}) {
    push(convertSlugToUrl(slug, parameters));
  }

  return (
    <Menu isMobile={isMobile}>
      <div style={{ paddingTop: 30, paddingBottom: 30 }}></div>
      <MenuItem
        id={URLS.dashboard}
        title="Dashboard"
        icon={IoMdContacts}
        onClick={() => onClick(URLS.dashboard)}
      />
      <MenuItem
        id={URLS.overview}
        items={[URLS.overviewTwo, URLS.overviewThree]}
        title="Overview"
        icon={IoMdContacts}
      >
        <MenuItem
          id={URLS.overview}
          title="Sub Item 1"
          level={2}
          icon={IoMdContacts}
          onClick={() => onClick(URLS.overview)}
        />
      </MenuItem>
      <MenuItem
        id={URLS.tickets}
        title="Tickets"
        icon={IoMdContacts}
        onClick={() => onClick(URLS.tickets)}
      />
      <div className={classes.separator}></div>
      <MenuItem
        id={URLS.settings}
        title="Settings"
        icon={IoMdContacts}
        onClick={() => onClick(URLS.settings)}
      />

      <MenuItem
        id="logout"
        title="Logout"
        icon={IoMdContacts}
        onClick={logout}
      />
    </Menu>
  );
}

export default SidebarComponent;
