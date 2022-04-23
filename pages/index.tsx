import React from "react";
import type { NextPage } from "next";
// import Head from "next/head";
// import Image from "next/image";
import Navbar from "../components/Navbar";
import SlidingStats from "../components/SlidingStats";
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <SlidingStats />
    </>
  );
};

export default Home;
