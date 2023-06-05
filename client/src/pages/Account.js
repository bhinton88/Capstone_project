import { Tab,Tabs } from "react-bootstrap"
import AccountProfilePage from "../components/AccountProfilePage"


function Account () {

  return(
    <>
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
    </>

  )

}

export default Account