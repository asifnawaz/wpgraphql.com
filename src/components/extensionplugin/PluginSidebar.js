import React from "react"
import { Box, Text } from "@chakra-ui/core"
import { FaCertificate, FaUsers } from "react-icons/fa"
import PluginLink from "./PluginLink"

const PluginSidebar = ({ pluginType, pluginHost, pluginLink }) => {
  let icon = FaCertificate
  let text = "Official Plugin"
  if (pluginType === "community") {
    icon = FaUsers
    text = "Community Plugin"
  }

  return (
    <>
      <Text>
        <Box as={icon} mt={-1} size="16px" display="inline-block" /> {text}
      </Text>
      <PluginLink pluginHost={pluginHost} pluginLink={pluginLink} />
    </>
  )
}

export default PluginSidebar
