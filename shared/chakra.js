import { Box, Text, Image, Heading, Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import {
  MdHome,
  MdPerson,
  MdInsertDriveFile,
  MdMyLocation,
} from "react-icons/md";

function IconMdHome() {
  return <Icon as={MdHome}></Icon>;
}

function IconMdPerson() {
  return <Icon as={MdPerson}></Icon>;
}
function IconMdInsertDriveFile() {
  return <Icon as={MdInsertDriveFile}></Icon>;
}

function IconMdMyLocation() {
  return <Icon as={MdMyLocation}></Icon>;
}

export {
  Box,
  Text,
  Image,
  Icon,
  Heading,
  Button,
  IconMdHome,
  IconMdPerson,
  IconMdInsertDriveFile,
  IconMdMyLocation,
};
