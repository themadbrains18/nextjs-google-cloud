import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from 'react'
import Hero from '@/components/home/hero'
import CryptoCoin from '@/components/home/CryptoCoin'
import CreateProfile from '@/components/home/create-profile'
import TradeAnyWhere from '@/components/home/trade-anywhere'
import BestServices from '@/components/home/best-services'
import InvestorSec from '@/components/home/investor-sec'
import StartMinning from '@/components/home/start-minning'
import { getProviders } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { authOptions } from "./api/auth/[...nextauth]";

const inter = Inter({ subsets: ["latin"] });

interface Session {
  session: {
    user: any
  },
  provider: any,
  coinList: any
}

export default function Home({ session, coinList }: Session) {
  const [allCoins, setAllCoins] = useState(coinList);

  useEffect(() => {

    // console.log(detectBrowser());

    fetch('http://ip-api.com/json')
      .then(response => response.json())
      .then(data => {
        // console.log(data, '=====api all data')
      });
  }, []);

  const detectBrowser = () => {
    let os = navigator.userAgent.toLowerCase();
    // if (!!document.DOCUMENT_NODE === true) {
    //   return "IE"
    // }
    if (os.search('chrome') > -1 || os.search('crios') > -1) {
      return 'Chrome';
    } else if (os.search('firefox') > -1 || os.search('fxios') > -1 || os.search('focus') > -1) {
      return 'Firefox';
    }
  }

  useEffect(() => {
    const websocket = new WebSocket('ws://localhost:3001/');

    websocket.onopen = () => {
      console.log('connected');
    }

    websocket.onmessage = (event) => {
      const data = JSON.parse(event.data).data;
      let eventDataType = JSON.parse(event.data).type;
      if (eventDataType === "price") {
        refreshTokenList()
      }
    }

  }, [])

  const refreshTokenList = async () => {
    let tokenList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/token`, {
      method: "GET"
    }).then(response => response.json());

    setAllCoins(tokenList?.data);
  }

  return (
    <>
      <section className='container max-w-[1818px] w-full'>
        <Hero />
      </section>
      <CryptoCoin coinList={allCoins} />
      <CreateProfile />
      <TradeAnyWhere />
      <BestServices />
      <InvestorSec />
      <StartMinning />
    </>
  )
}


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const session = await getServerSession(context.req, context.res, authOptions);
  const providers = await getProviders();

  let tokenList = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/token`, {
    method: "GET"
  }).then(response => response.json());

  return {
    props: {
      sessions: session,
      session: session,
      provider: providers,
      coinList: tokenList?.data || []
    },
  };
}