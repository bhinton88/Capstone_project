import { Tabs,Tab } from "react-bootstrap"
import AccountProfilePage from "../components/AccountProfilePage"
import { useContext } from "react"
import { UserContext } from "../context/UserContext"

function AccountTabs () {

  const { user } = useContext(UserContext)

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
    {
      user.admin_rights ?
      <Tab eventKey="itemManagement" title="Manage Items">

      </Tab>
      :

      null
    }
  </Tabs>

  )

}

export default AccountTabs