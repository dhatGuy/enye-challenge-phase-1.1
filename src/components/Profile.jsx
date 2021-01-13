import {
  Avatar,
  Card,
  Heading,
  Link,
  PhoneIcon,
  Tab,
  TabNavigation,
} from "evergreen-ui";
import React, { useState } from "react";
import "./Profile.css";
import { Pane, Text, EnvelopeIcon } from "evergreen-ui";

const Profile = ({ profile }) => {
  const tabs = ["Payment", "Location", "Others"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Card
        width={"95%"}
        border="default"
        boxSizing="border-box"
        margin={10}
        padding={10}
        className="grid-div"
        elevation={3}
      >
        <Pane display="flex">
          <Avatar
            isSolid
            marginX={10}
            name={`${profile.FirstName} ${profile.LastName}`}
            size={60}
          />
          <Pane display="flex" flexDirection="column">
            <Heading>{`${profile.FirstName} ${profile.LastName}`}</Heading>
            <Text size={400}>@{profile.UserName}</Text>
            <Text size={300}>{profile.Gender}</Text>
            <Text display="flex" alignItems="center">
              <EnvelopeIcon marginRight={5} />{" "}
              <Link textDecoration="none" href={`mailto:${profile.Email}`}>{profile.Email}</Link>
            </Text>
            <Text display="flex" alignItems="center">
              <PhoneIcon marginRight={5} />{" "}
              <Link textDecoration="none" href={`tel:+${profile.PhoneNumber}`}>{profile.PhoneNumber}</Link>
            </Text>
          </Pane>
        </Pane>
        <Pane display="flex" flexDirection="column"></Pane>

        <TabNavigation marginBottom={16} flexBasis={240} marginRight={24}>
          {tabs.map((tab, index) => (
            <Tab
              key={tab}
              id={tab}
              onSelect={() => setSelectedIndex(index)}
              isSelected={index === selectedIndex}
              aria-controls={`panel-${tab}`}
            >
              {tab}
            </Tab>
          ))}
        </TabNavigation>

        <Pane background="tint1" flex="1">
          <Pane
            role="tabpanel"
            aria-labelledby={"payment-tab"}
            aria-hidden={selectedIndex === 0}
            display={selectedIndex === 0 ? "flex" : "none"}
            flexDirection="column"
          >
            <Heading paddingY={5}>Payment Details</Heading>
            <Text>Credit Card Number: {profile.CreditCardNumber}</Text>
            <Text>Credit Card Type: {profile.CreditCardType}</Text>
            <Text>Payment Method: {profile.PaymentMethod}</Text>
          </Pane>
        </Pane>

        <Pane background="tint1" flex="1">
          <Pane
            role="tabpanel"
            aria-labelledby={"payment-tab"}
            aria-hidden={selectedIndex === 0}
            display={selectedIndex === 1 ? "flex" : "none"}
            flexDirection="column"
          >
            <Pane display="flex" flexDirection="column">
              <Heading paddingY={5}>Location Details</Heading>
              <Text>Longitude: {profile.Longitude}</Text>
              <Text>Latitude: {profile.Latitude}</Text>
            </Pane>
          </Pane>
        </Pane>

        <Pane background="tint1" flex="1">
          <Pane
            role="tabpanel"
            aria-labelledby={"payment-tab"}
            aria-hidden={selectedIndex === 0}
            display={selectedIndex === 2 ? "flex" : "none"}
            flexDirection="column"
          >
            <Pane display="flex" flexDirection="column">
              <Heading paddingY={5}>Other details</Heading>
              <Text>Last Login: {profile.LastLogin}</Text>
              <Text>
                URL: <Link href={profile.URL}> {profile.URL}</Link>
              </Text>
              <Text>Domain Name: {profile.DomainName}</Text>
              <Text>Mac Address: {profile.MacAddress}</Text>
            </Pane>
          </Pane>
        </Pane>
      </Card>
    </>
  );
};

export default Profile;
