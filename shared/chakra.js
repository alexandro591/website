import { Box, Text, Image, Heading, Button } from "@chakra-ui/react";
import { Icon, CheckCircleIcon } from "@chakra-ui/icons";
import {
  MdHome,
  MdPerson,
  MdInsertDriveFile,
  MdMyLocation,
} from "react-icons/md";

import { IoMdEyeOff, IoMdEye } from "react-icons/io";

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

function IconIoMdEye() {
  return <Icon as={IoMdEye}></Icon>;
}

function IconIoMdEyeOff() {
  return <Icon as={IoMdEyeOff}></Icon>;
}

export {
  Box,
  Text,
  Image,
  Icon,
  Heading,
  Button,
  CheckCircleIcon,
  IconMdHome,
  IconMdPerson,
  IconMdInsertDriveFile,
  IconMdMyLocation,
  IconIoMdEye,
  IconIoMdEyeOff,
};
