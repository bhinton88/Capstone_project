import { Tabs,Tab } from "react-bootstrap"
import AccountProfilePage from "../components/AccountProfilePage"

function AccountTabs () {

  return(
    <Tabs 
    defaultActiveKey="profile"
    className="mb-3"
    justify
  >
    <Tab eventKey='profile' title="Profile">
      <AccountProfilePage />
    </Tab>
    <Tab eventKey="orders" title="Orders">

    </Tab>
  </Tabs>

  )

}

export default AccountTabs