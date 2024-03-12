import { Text } from "@chakra-ui/react";

export default function Home() {
  return(
    <>
    <Text fontSize={{base: "5xl", md: "7xl"}} align={'center'} pt={{base: '10%', md: '4%'}}>Welcome!</Text>
    <Text fontSize={{base: "2xl", md: "4xl"}} align={'center'} pt={{base: '10%', md: '4%'}}>こちらはiOSアプリのサポートページです。</Text>
    <Text  fontSize={{base: "2xl", md: "4xl"}} align={'center'} pt={{base: '10%', md: '4%'}}>
      アプリをご利用いただきありがとうございます。<br />不具合やご不明点等ございましたら本サイトよりお問い合わせください。
    </Text>
    <Text fontSize={{base: "2xl", md: "4xl"}} align={'center'} pt={{base: '10%', md: '4%'}}>SignUpもしくはLogInよりお問い合わせお願い致します。</Text>
    </>
  )
}
