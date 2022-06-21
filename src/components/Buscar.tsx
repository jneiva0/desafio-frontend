import {
  Box,
  chakra,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ErrorResult } from 'src/components/ErrorResult'
import { Loading } from 'src/components/Loading'
import { MenuItemListResult } from 'src/components/MenuItem/MenuItem'
import { RestaurantListResult } from 'src/components/Restaurant/RestaurantListResult'
import { useBusca } from 'src/hooks/useBusca'

export const Buscar = () => {
  const { query } = useRouter()
  const { resultado, error, isLoading } = useBusca(String(query.q))

  if (isLoading) return <Loading />
  if (error) return <ErrorResult error={error} />

  return (
    <Box>
      <Heading size='lg' fontWeight='600'>
        Buscando por <chakra.span color='red'>{query.q}</chakra.span>
      </Heading>
      <Tabs size='md' colorScheme='red' mt={2}>
        <TabList>
          <Tab>Restaurantes</Tab>
          <Tab>Itens</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <RestaurantListResult restaurants={resultado?.restaurants} />
          </TabPanel>
          <TabPanel>
            <MenuItemListResult menuItens={resultado?.itens} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
