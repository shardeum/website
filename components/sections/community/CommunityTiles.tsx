import React from "react";
import { useTranslation } from "next-i18next";
import { Box, Container, Flex, Text, VStack, SimpleGrid } from "@chakra-ui/react";

import { CommunityStat } from "types";
import {
  TWITTER_URL,
  GITHUB_URL,
  TELEGRAM_URL,
  DISCORD_URL,
  YOUTUBE_URL,
  REDDIT_URL,
  LINKEDIN_URL,
  GITLAB_URL,
} from "constants/links";
import Image from "next/image";

type Tile = {
  key: string;
  title: string;
  icon: string;
  link: string;
  fallBackNum: string;
  userAlias: string;
};

const titleFixedData: Tile[] = [
  {
    key: "discord",
    title: "Discord",
    icon: "/community/icons/discord.svg",
    link: DISCORD_URL,
    fallBackNum: "4500+",
    userAlias: "members",
  },
  {
    key: "youtube",
    title: "YouTube",
    icon: "/community/icons/youtube.svg",
    link: YOUTUBE_URL,
    fallBackNum: "1.67k+",
    userAlias: "subscribers",
  },
  {
    key: "twitter",
    title: "Twitter",
    icon: "/community/icons/twitter.svg",
    link: TWITTER_URL,
    fallBackNum: "13.5k+",
    userAlias: "followers",
  },
  {
    key: "telegram",
    title: "Telegram",
    icon: "/community/icons/telegram.svg",
    link: TELEGRAM_URL,
    fallBackNum: "4.6k+",
    userAlias: "members",
  },
  {
    key: "reddit",
    title: "Reddit",
    icon: "/community/icons/reddit.svg",
    link: REDDIT_URL,
    fallBackNum: "141",
    userAlias: "members",
  },

  {
    key: "linkedin",
    title: "LinkedIn",
    icon: "/community/icons/linkedin.svg",
    link: LINKEDIN_URL,
    fallBackNum: "891",
    userAlias: "followers",
  },
  {
    key: "github",
    title: "GitHub",
    icon: "/community/icons/github.svg",
    link: GITHUB_URL,
    fallBackNum: "14",
    userAlias: "contributors",
  },
  {
    key: "gitlab",
    title: "GitLab",
    icon: "/community/icons/gitlabDark.svg",
    link: GITLAB_URL,
    fallBackNum: "24",
    userAlias: "contributors",
  },
];

// const tilesData: Tile[] = [
//   {
//     key: "Shardeum_Community",
//     title: "Shardeum Community",
//     icon: "/community/icons/telegram.svg",
//     link: "https://t.me/shardians",
//     fallBackNum: "",
//     userAlias: "members",
//   },
//   {
//     key: "Shardeum_Discussion_Telegram",
//     title: "Shardeum Discussion Telegram",
//     icon: "/community/icons/telegram.svg",
//     link: "https://t.me/ShardeumBlockchain",
//     fallBackNum: "",
//     userAlias: "members",
//   },
//   {
//     key: "Shardeum_Academy",
//     title: "Shardeum Academy",
//     icon: "/community/icons/telegram.svg",
//     link: "https://t.me/shardeumacademy",
//     fallBackNum: "",
//     userAlias: "members",
//   },
//   {
//     key: "Shardeum_community",
//     title: "Shardeum community",
//     icon: "/community/icons/telegram.svg",
//     link: "https://t.me/shardians",
//     fallBackNum: "",
//     userAlias: "members",
//   },
//   {
//     key: "Russian_Telegram",
//     title: "Russian Telegram",
//     icon: "/community/icons/telegram.svg",
//     link: "t.me/Shardeum_ru",
//     fallBackNum: "",
//     userAlias: "members",
//   },
//   {
//     key: "Ukraininan_Telegram",
//     title: "Ukraininan Telegram",
//     icon: "/community/icons/telegram.svg",
//     link: "t.me/shardeum_ua",
//     fallBackNum: "",
//     userAlias: "members",
//   },
//   {
//     key: "Indonesian_Telegram",
//     title: "Indonesian Telegram",
//     icon: "/community/icons/telegram.svg",
//     link: "https://t.me/shardeumid",
//     fallBackNum: "",
//     userAlias: "members",
//   },
//   {
//     key: "Shardeum_Telegram_Tamil",
//     title: "Shardeum Telegram Tamil",
//     icon: "/community/icons/telegram.svg",
//     link: "https://t.me/shardeumtamil",
//     fallBackNum: "",
//     userAlias: "members",
//   },
//   {
//     key: "Shardeum_Tamil_Annoucements",
//     title: "Shardeum Tamil Annoucements ",
//     icon: "/community/icons/telegram.svg",
//     link: "https://t.me/shardeum_tamil",
//     fallBackNum: "",
//     userAlias: "members",
//   },
//   {
//     key: "Shardeum_Africa",
//     title: "Shardeum Africa",
//     icon: "/community/icons/telegram.svg",
//     link: "https://t.me/ShardeumAfrica",
//     fallBackNum: "",
//     userAlias: "members",
//   },
//   {
//     key: "Turkish_Telegram",
//     title: "Turkish Telegram",
//     icon: "/community/icons/telegram.svg",
//     link: "https://t.me/shardeumturkey",
//     fallBackNum: "",
//     userAlias: "members",
//   },
//   {
//     key: "Shardians_YT",
//     title: "Shardians YT",
//     icon: "/community/icons/youtube.svg",
//     link: "https://www.youtube.com/c/Shardians",
//     fallBackNum: "",
//     userAlias: "subscribers",
//   },
//   {
//     key: "Shardeum_Academy_YT",
//     title: "Shardeum Academy YT",
//     icon: "/community/icons/youtube.svg",
//     link: "https://www.youtube.com/channel/UCGC1cKfj1Z6zJp-OODD6ZXA",
//     fallBackNum: "",
//     userAlias: "subscribers",
//   },
//   {
//     key: "Shardeum_YT",
//     title: "Shardeum YT",
//     icon: "/community/icons/youtube.svg",
//     link: "https://www.youtube.com/channel/UCO20LJZBF-lYbc6PWVvwkMA",
//     fallBackNum: "",
//     userAlias: "subscribers",
//   },
//   {
//     key: "Shardeum_Africa",
//     title: "Shardeum Africa",
//     icon: "/community/icons/twitter.svg",
//     link: "https://twitter.com/ShardeumAfrica",
//     fallBackNum: "",
//     userAlias: "followers",
//   },
//   {
//     key: "Shardeum",
//     title: "Shardeum",
//     icon: "/community/icons/twitter.svg",
//     link: "https://twitter.com/shardeum",
//     fallBackNum: "",
//     userAlias: "followers",
//   },
//   {
//     key: "Documenting_SHM",
//     title: "Documenting SHM",
//     icon: "/community/icons/twitter.svg",
//     link: "https://twitter.com/DocumentingSHM/",
//     fallBackNum: "",
//     userAlias: "followers",
//   },
//   {
//     key: "Shardeum_Times",
//     title: "Shardeum Times",
//     icon: "/community/icons/twitter.svg",
//     link: "https://twitter.com/shardeumtimes",
//     fallBackNum: "",
//     userAlias: "followers",
//   },
//   {
//     key: "Shardeum_Memes",
//     title: "Shardeum Memes",
//     icon: "/community/icons/twitter.svg",
//     link: "https://twitter.com/shardeummemes",
//     fallBackNum: "",
//     userAlias: "followers",
//   },
//   {
//     key: "Shardeum_Academy",
//     title: "Shardeum Academy",
//     icon: "/community/icons/twitter.svg",
//     link: "https://twitter.com/shardeumacademy",
//     fallBackNum: "",
//     userAlias: "followers",
//   },
//   {
//     key: "Shardeum_Russia_YouTube",
//     title: "Shardeum Russia YouTube",
//     icon: "/community/icons/youtube.svg",
//     link: "https://youtube.com/channel/UCi8U7RaQIHuenNCYHrHOoqQ",
//     fallBackNum: "",
//     userAlias: "subscribers",
//   },
//   {
//     key: "Shardeum_Community",
//     title: "Shardeum Community",
//     icon: "/community/icons/twitter.svg",
//     link: "https://twitter.com/shardeum_org",
//     fallBackNum: "",
//     userAlias: "followers",
//   },
//   {
//     key: "shardeum_swap",
//     title: "shardeum swap",
//     icon: "/community/icons/twitter.svg",
//     link: "https://twitter.com/ShardeumSwap",
//     fallBackNum: "",
//     userAlias: "followers",
//   },
//   {
//     key: "Shardeum_Nigeria",
//     title: "Shardeum Nigeria",
//     icon: "/community/icons/twitter.svg",
//     link: "https://twitter.com/ShardeumNigeria",
//     fallBackNum: "",
//     userAlias: "followers",
//   },
//   {
//     key: "Shardeum_Twitter_Communities",
//     title: "Shardeum (Twitter Communities)",
//     icon: "/community/icons/twitter.svg",
//     link: "https://twitter.com/i/communities/1515268176610684934",
//     fallBackNum: "",
//     userAlias: "followers",
//   },
// ];

const tilesData: Tile[] = [
  {
    key: "Shardeum_Community",
    title: "Shardeum Community",
    icon: "https://pbs.twimg.com/community_banner_img/1534601410649632768/AuOT61IW?format=jpg&name=900x900",
    link: "https://twitter.com/i/communities/1515268176610684934",
    fallBackNum: "",
    userAlias: "@ShuwamRana (Twitter)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Africa",
    icon: "https://cdn-icons-png.flaticon.com/512/197/197562.png",
    link: "https://twitter.com/shardeum_africa",
    fallBackNum: "",
    userAlias: "iPrinceMoon #3958 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum IND",
    icon: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969",
    link: "https://twitter.com/ShardeumIND",
    fallBackNum: "",
    userAlias: "@imayanmajumdar (Twitter)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum China",
    icon: "https://cdn.britannica.com/90/7490-004-BAD4AA72/Flag-China.jpg",
    link: "https://twitter.com/ShardeumCN",
    fallBackNum: "",
    userAlias: "HHUH#3692 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Japan",
    icon: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1200px-Flag_of_Japan.svg.png",
    link: "https://twitter.com/shardeum_JP",
    fallBackNum: "",
    userAlias: "Block Wu#3605 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Memes",
    icon: "https://pbs.twimg.com/profile_images/1603810681739886597/JaGCxZu__400x400.jpg",
    link: "https://twitter.com/shardeummemes",
    fallBackNum: "",
    userAlias: "@BTCKHAN (Twitter)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum News",
    icon: "https://pbs.twimg.com/profile_images/1607343670487048192/pTGkRqtJ_400x400.jpg",
    link: "https://twitter.com/shardeumnews",
    fallBackNum: "",
    userAlias: "brohems#7670 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Russia",
    icon: "https://cdn.britannica.com/42/3842-004-F47B77BC/Flag-Russia.jpg",
    link: "https://t.me/ShardeumRu",
    fallBackNum: "",
    userAlias: "@GainsCrypt (Telegram)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum TR",
    icon: "/TR.jpg",
    link: "https://t.me/ShardeumTR",
    fallBackNum: "",
    userAlias: "@Ruesandora0 (Twitter)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Turkey",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/640px-Flag_of_Turkey.svg.png",
    link: "https://t.me/shardeumturkey",
    fallBackNum: "",
    userAlias: "@anlionerda (Telegram)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Times",
    icon: "https://pbs.twimg.com/profile_images/1600286392361586688/DuNdqiUm_400x400.jpg",
    link: "https://twitter.com/shardeumtimes",
    fallBackNum: "",
    userAlias: "@banjobalreturns (Telegram)",
  },
  {
    key: "Shardeum_Community",
    title: "ShardeumTÜRKİYE🇹🇷",
    icon: "https://pbs.twimg.com/profile_images/1595129001445670923/de7MTxds_400x400.jpg",
    link: "https://twitter.com/ShardeumTR",
    fallBackNum: "",
    userAlias: "@Muallimin_biri (Twitter)",
  },
  {
    key: "Shardeum_Community",
    title: "Shard Army",
    icon: "https://pbs.twimg.com/profile_images/1535900662927478784/oplHfjTB_400x400.jpg",
    link: "https://twitter.com/ShardArmy",
    fallBackNum: "",
    userAlias: "@ab0211k (Twitter)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Pepe",
    icon: "https://pbs.twimg.com/profile_images/1599338830938898433/ujAyjg7y_400x400.jpg",
    link: "https://twitter.com/ShardeumPepe",
    fallBackNum: "",
    userAlias: "@ShardeumPepe (Twitter)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Intern",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://twitter.com/Shardeumintern",
    fallBackNum: "",
    userAlias: "@Shardeumintern (Twitter)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Indonesia",
    icon: "https://cdn.britannica.com/48/1648-004-A33B72D8/Flag-Indonesia.jpg",
    link: "https://t.me/shardeumid",
    fallBackNum: "",
    userAlias: "@simpatimania (Telegram)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Academy",
    icon: "https://pbs.twimg.com/profile_images/1521433528369434624/a0m2qf66_400x400.jpg",
    link: "https://twitter.com/shardeumacademy",
    fallBackNum: "",
    userAlias: "@shardeumacademy (Twitter)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardians",
    icon: "https://yt3.googleusercontent.com/NDiC3fD1jAEnBekfSvLA4rARN30kG4VKV4BtLRxJjE-0o62eR7sbGKulaxk9X2d9xmIia98VzQ=s176-c-k-c0x00ffffff-no-rj",
    link: "https://www.youtube.com/@Shardians",
    fallBackNum: "",
    userAlias: "@ShuwamRana (Twitter)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum India",
    icon: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969",
    link: "https://t.me/ShardeumBharat",
    fallBackNum: "",
    userAlias: "0xSimba#3891(Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Kolkata",
    icon: "https://pbs.twimg.com/profile_images/1612466146699280384/LPjHAGjS_400x400.jpg",
    link: "https://twitter.com/ShardeumKolkata",
    fallBackNum: "",
    userAlias: "LUCIF3R#9616 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Africa",
    icon: "https://cdn.britannica.com/27/4227-004-32423B42/Flag-South-Africa.jpg",
    link: "https://t.me/ShardeumAfrica",
    fallBackNum: "",
    userAlias: "@YHWH_is_King1 (Telegram)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Hyderabad",
    icon: "https://yt3.googleusercontent.com/NDiC3fD1jAEnBekfSvLA4rARN30kG4VKV4BtLRxJjE-0o62eR7sbGKulaxk9X2d9xmIia98VzQ=s176-c-k-c0x00ffffff-no-rj",
    link: "https://t.me/ShardeumHyderabad",
    fallBackNum: "",
    userAlias: "suhas#4913 (Discord) susmitha#1582 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Vietnam",
    icon: "https://cdn.britannica.com/41/4041-004-D051B135/Flag-Vietnam.jpg",
    link: "https://t.me/vietnamshardeum",
    fallBackNum: "",
    userAlias: "nghia#6800 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Nigeria",
    icon: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
    link: "https://t.me/+PTqo12duixIzM2M0",
    fallBackNum: "",
    userAlias: "Ajughu#1122 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Tamil",
    icon: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969",
    link: "https://t.me/shardeum_tamil",
    fallBackNum: "",
    userAlias: "sanjaivps#5907 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeumarmy",
    icon: "https://pbs.twimg.com/profile_images/1543120311633477632/i2WxBE_w_400x400.jpg",
    link: "https://twitter.com/shardeumarmy",
    fallBackNum: "",
    userAlias: "anksri9038#3787 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum News (Discord)",
    icon: "https://pbs.twimg.com/profile_images/1607343670487048192/pTGkRqtJ_400x400.jpg",
    link: "https://discord.gg/7EQJBEE3KX",
    fallBackNum: "",
    userAlias: "brohems#7670 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Africa (Discord)",
    icon: "https://cdn.britannica.com/27/4227-004-32423B42/Flag-South-Africa.jpg",
    link: "https://discord.gg/HyeTrVMtSt",
    fallBackNum: "",
    userAlias: "iPrinceMoon #3958 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Bangla",
    icon: "https://yt3.googleusercontent.com/NDiC3fD1jAEnBekfSvLA4rARN30kG4VKV4BtLRxJjE-0o62eR7sbGKulaxk9X2d9xmIia98VzQ=s176-c-k-c0x00ffffff-no-rj",
    link: "https://t.me/ShardeumBangla",
    fallBackNum: "",
    userAlias: "RiseBoi#2925 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "ShardeumCN",
    icon: "https://yt3.googleusercontent.com/NDiC3fD1jAEnBekfSvLA4rARN30kG4VKV4BtLRxJjE-0o62eR7sbGKulaxk9X2d9xmIia98VzQ=s176-c-k-c0x00ffffff-no-rj",
    link: "https://t.me/Shardeum_CN",
    fallBackNum: "",
    userAlias: "Assistant#3161 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Nepal",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flag_of_Nepal.svg/1200px-Flag_of_Nepal.svg.png",
    link: "https://t.me/ShardeumNepal",
    fallBackNum: "",
    userAlias: "Frodo#7189 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Insider",
    icon: "https://pbs.twimg.com/profile_images/1610582997014806531/ZRGs-4uH_400x400.jpg",
    link: "https://twitter.com/shardeuminsider",
    fallBackNum: "",
    userAlias: "RiseBoi#2925 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Nigeria",
    icon: "https://cdn.britannica.com/68/5068-004-72A3F250/Flag-Nigeria.jpg",
    link: "https://t.me/ShardeumNigeria",
    fallBackNum: "",
    userAlias: "iPrinceMoon #3958 (Discord)",
  },
  // {
  //   key: "Shardeum_Community",
  //   title: "Indonesia TCS",
  //   icon: "/TCS.jpg",
  //   link: "https://t.me/+pLgm5vrE0WljNTc9",
  //   fallBackNum: "",
  //   userAlias: "this is me#7795 (Discord)",
  // },
  {
    key: "Shardeum_Community",
    title: "Shardeum Vietnam",
    icon: "https://cdn.britannica.com/41/4041-004-D051B135/Flag-Vietnam.jpg",
    link: "https://t.me/nodeazOfficial/23006",
    fallBackNum: "",
    userAlias: "Tbros#6868 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Tamil Queries",
    icon: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969",
    link: "https://t.me/shmcit",
    fallBackNum: "",
    userAlias: "Sanity420#2396 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "The Shardians",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://twitter.com/TheShardians",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum List",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://t.me/shardeumlist",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Korea",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://t.me/shardeumkorea",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "ShardeumRus",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://t.me/shardeumrus",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Hispano",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://twitter.com/ShardeumHispano",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Belarus",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://t.me/shardeum_belarus_official",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Rivers (Nigeria)",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://t.me/ShardeumRiver",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Kolkata",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://t.me/ShardeumKolkata",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Whale",
    icon: "https://pbs.twimg.com/profile_images/1638052223090569216/vrk5E0to_400x400.jpg",
    link: "https://twitter.com/SHMWhale",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Ukraine",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://t.me/ShardeumUkraine",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum France",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://twitter.com/ShardeumFrance",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Vietnam",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://t.me/Shardeumvietnamgroup",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum USA",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://twitter.com/shardeumusa",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
  {
    key: "Shardeum_Community",
    title: "Shardeum Kenya",
    icon: "https://pbs.twimg.com/profile_images/1619661303844585472/9_Q6Dwef_400x400.jpg",
    link: "https://t.me/shardeumkenya",
    fallBackNum: "",
    userAlias: "shuwamrana#1123 (Discord)",
  },
];

const CommunityTiles = ({ communityStats }: { communityStats: CommunityStat[] }) => {
  const { t: pageTranslation } = useTranslation("page-community");

  const handleTileClick = (url: string) => {
    window.open(url, "_blank"); //to open new page
  };

  const communityStatsMap = communityStats?.reduce((result: any, item) => {
    result[item.key] = item.followerCount;
    return result;
  }, {});

  return (
    <Flex bg="brand.white" as="section">
      <Container
        maxW="container.xl"
        mx="auto"
        px={{ base: 6, sm: 6, md: 6, lg: 6, xl: 0 }}
        pt={{ base: 6, lg: 16 }}
      >
        <Box>
          <VStack spacing={2} width="100%" alignItems="start">
            <Text
              as="h3"
              textAlign="left"
              lineHeight="normal"
              fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              width="100%"
              color="brand.grey-90"
            >
              Shardeum Official Channels
              {/* {pageTranslation("page-community-join-community-h1")} */}
            </Text>
            <Box maxW={{ base: "md", md: "full" }}>
              <Text
                fontSize={{ base: "md", lg: "md" }}
                textAlign="left"
                lineHeight={{ base: "7", md: "8" }}
                color="brand.grey-80"
                mb="5"
              >
                Join us via our official channels to stay connected and collaborate with fellow
                Shardians
                {/* {pageTranslation("page-community-join-community-description")} */}
              </Text>
            </Box>

            <SimpleGrid spacing={6} columns={{ base: 2, sm: 2, md: 3, lg: 4 }} w="100%">
              {titleFixedData?.map((tile, index) => (
                <Box
                  key={tile.key + index}
                  display="flex"
                  flexDir="column"
                  cursor="pointer"
                  overflow="hidden"
                  bgColor="brand.white"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  p={{ base: "3", sm: "4", lg: "5" }}
                  pb={{ base: "4", sm: "6", lg: "8" }}
                  // w={{ base: "170px", sm: "200px", md: "200px", lg: "300px" }}
                  border={"1px solid"}
                  borderColor={"brand.grey-70"}
                  _hover={{
                    bgColor: "brand.grey-10",
                  }}
                  onClick={() => handleTileClick(tile.link)}
                >
                  <div>
                    <img src={tile.icon} alt={tile.key} width={32} height={32} />
                  </div>
                  <Text
                    color={"brand.grey-80"}
                    fontSize={{ base: "md", sm: "md", lg: "lg" }}
                    fontWeight={"bold"}
                  >
                    {pageTranslation(`page-community-${tile.key}`) || tile.title}
                  </Text>

                  <Text
                    color={"brand.grey-80"}
                    fontSize={{ base: "sm", sm: "sm", lg: "sm" }}
                    fontWeight={"normal"}
                  >
                    {communityStatsMap?.[tile.key] || tile.fallBackNum}{" "}
                    {pageTranslation(`page-community-join-${tile.userAlias}`) || tile.userAlias}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>

        <Box style={{ marginTop: "50px" }}>
          <VStack spacing={2} width="100%" alignItems="start">
            <Text
              as="h3"
              textAlign="left"
              lineHeight="normal"
              fontSize={{ base: "3xl", md: "3xl", lg: "4xl" }}
              fontWeight="bold"
              width="100%"
              color="brand.grey-90"
            >
              Find Your Tribe
              {/* {pageTranslation("page-community-join-community-h2")} */}
            </Text>
            <Box maxW={{ base: "md", md: "full" }}>
              <Text
                fontSize={{ base: "md", lg: "md" }}
                textAlign="left"
                lineHeight={{ base: "7", md: "8" }}
                color="brand.grey-80"
                mb="5"
              >
                Find and join community-run platforms. If you want to create a new platform and lead
                it, please submit the{" "}
                <a
                  target="_blank"
                  style={{ color: "orange" }}
                  href="https://docs.google.com/forms/d/e/1FAIpQLScTEcmXkLN-xHEtTd248ycuKZnQVIZQNGKU_q2wQJoNPAQJCQ/viewform"
                  rel="noreferrer"
                >
                  Shardeum League form
                </a>
                , and stand a chance to be an early adopter of Shardeum with great incentives
                {/* {pageTranslation("page-community-join-community-description2")} */}
              </Text>
            </Box>

            <SimpleGrid spacing={6} columns={{ base: 2, sm: 2, md: 3, lg: 4 }} w="100%">
              {tilesData?.map((tile, index) => (
                <Box
                  key={tile.key + index}
                  display="flex"
                  flexDir="column"
                  cursor="pointer"
                  overflow="hidden"
                  bgColor="brand.white"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  p={{ base: "3", sm: "4", lg: "5" }}
                  pb={{ base: "4", sm: "6", lg: "8" }}
                  // w={{ base: "170px", sm: "200px", md: "200px", lg: "300px" }}
                  border={"1px solid"}
                  borderColor={"brand.grey-70"}
                  _hover={{
                    bgColor: "brand.grey-10",
                  }}
                  onClick={() => handleTileClick(tile.link)}
                >
                  {/* <Image src={tile.icon} alt={tile.key} width={32} height={32} /> */}
                  <div style={{ minHeight: "50px" }}>
                    <img src={tile.icon} alt={tile.key} width={32} height={32} />
                  </div>
                  <Text
                    color={"brand.grey-80"}
                    fontSize={{ base: "md", sm: "md", lg: "lg" }}
                    fontWeight={"bold"}
                  >
                    {/* {pageTranslation(`page-community-${tile.key}`) || tile.title} */}
                    {tile.title}
                  </Text>

                  {/* <Text
                    color={"brand.grey-80"}
                    fontSize={{ base: "sm", sm: "sm", lg: "sm" }}
                    fontWeight={"normal"}
                  > */}
                  {/* {communityStatsMap?.[tile.key] || tile.fallBackNum}{" "} */}
                  {/* {pageTranslation(`page-community-join-${tile.userAlias}`) || tile.userAlias} */}
                  {/* {tile.userAlias} */}
                  {/* </Text> */}
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Container>
    </Flex>
  );
};

export default CommunityTiles;
