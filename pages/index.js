import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({purpose, title1, title2, desc1, desc2, linkname, buttonText, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner"/>
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1} <br />{title2}</Text>
      <Text fontSize="lg" paddingY="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl">
        <Link href={linkname}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({propertiesForSale, propertyForRent}) {
  // console.log(propertiesForSale, propertyForRent);
  return (
    <Box>
      <Banner 
        purpose='Rent a home'
        title1='Rental homes for'
        title2='everyone'
        desc1='Explore Villas, Homes, Apartments'
        desc2='and more'
        buttonText='Explore Renting'
        linkname="/search?purpose-for-rent"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap="wrap">
        {/* Flex the property from the API and map them */}
        {propertyForRent.map((property) => <Property property={property} key={property.id}/>)}
      </Flex>
      <Banner 
        purpose='BUY A HOME'
        title1="Find, Buy & Your"
        title2='Dream Home'
        desc1='Explore Villas, Homes, Apartments'
        desc2='and more'
        buttonText='Explore Renting'
        linkname="/search?purpose-for-rent"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap="wrap">
        {propertyForRent.map((property) => <Property property={property} key={property.id}/>)}
      </Flex>

    </Box>
  )
}

export async function getStaticProps(){
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits
    }
  }
}