import {
  Avatar,
  Card,
  CreditCardIcon,
  Heading,
  LocateIcon,
  PhoneIcon,
  Tab,
  TabNavigation,
} from "evergreen-ui";
import React, { useState } from "react";
import { Pane, Text, EnvelopeIcon } from "evergreen-ui";

const Profile = ({ profile }) => {
  const tabs = ["Payment", "Location", "Others"];
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <Card width={"100%"} border="default">
        <Pane display="flex">
          <Avatar
            isSolid
            marginX={10}
            name={`${profile.FirstName} ${profile.LastName}`}
            size={80}
          />
          <Pane display="flex" flexDirection="column">
            <Heading>{`${profile.FirstName} ${profile.LastName}`}</Heading>
            <Text size={400}>@{profile.UserName}</Text>
            <Text size={300}>
              {profile.Gender}
            </Text>
          <Text>
            <EnvelopeIcon /> {profile.Email}
          </Text>
          <Text>
            <PhoneIcon /> {profile.PhoneNumber}
          </Text>
          </Pane>
        </Pane>
        <Pane display="flex" flexDirection="column">
        </Pane>

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
            <Heading>Payment Details</Heading>
            <Text>
              <CreditCardIcon /> Credit Card Number: {profile.CreditCardNumber}
            </Text>
            <Text>
              <CreditCardIcon /> Credit Card Type: {profile.CreditCardType}
            </Text>
            <Text>
              <CreditCardIcon /> Payment Method: {profile.PaymentMethod}
            </Text>
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
              <Heading padding={5} borderWidth={1} border="default">
                Location Details
              </Heading>
              <Text>
                <LocateIcon /> Longitude: {profile.Longitude}
              </Text>
              <Text>
                <LocateIcon /> Latitude: {profile.Latitude}
              </Text>
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
              <Text>URL: {profile.URL}</Text>
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
