import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Tibco',
    path: '/tibco',
    icon: <AiIcons.AiFillDribbbleCircle />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Web Services',
        path: 'webService',
        icon: <MdIcons.MdOutlineSettingsSuggest />,
        cName: 'sub-nav'
      },
      {
        title: 'Paramters',
        path: 'paramter',
        icon: <MdIcons.MdOutlineSettingsSuggest />,
        cName: 'sub-nav'
      },
      {
        title: 'Actions',
        path: 'action',
        icon: <MdIcons.MdOutlineSettingsSuggest />
      },
      {
        title: 'Action Parameter',
        path: 'actionParamter',
        icon: <MdIcons.MdOutlineSettingsSuggest />
      }
    ]
  },
];
