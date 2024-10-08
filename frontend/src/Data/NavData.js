import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { FaSatellite } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { TbBadgeOff } from "react-icons/tb";
 export const NavIcon = [
    {
      name: "Dashboard",
      to: "/",
      icon: RiDashboardHorizontalFill,
    },
    {
      name: "Realtime Map",
      to: "/map",
      icon: FaMapLocationDot,
    },
    {
      name: "Anomalies",
      to: "/anomaly",
      icon: TbBadgeOff,
    },
    {
      name: "Satellite Image",
      to: "/satellite",
      icon: FaSatellite,
    },
    {
      name: "Alert",
      to: "/alert",
      icon: TbAlertTriangleFilled,
    },
    {
      name: "Records",
      to: "/records",
      icon: FaFileAlt,
    },
    {
      name: "Setting",
      to: "/setting",
      icon: IoSettings,
    },
  ];