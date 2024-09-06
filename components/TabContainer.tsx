
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react';
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react'





    
 function ContentTab(props: { about: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; projects: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; contact: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; staff: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined }){

   return (
         <Tabs>
  <TabList>

  <Tab>
About
  </Tab> 

  <Tab>
 Projects
  </Tab> 

  <Tab>
Contact 
</Tab> 

<Tab>
Staff
</Tab>

</TabList>

  <TabPanels>
    <TabPanel >
   </TabPanel>
    <TabPanel >
</TabPanel>
    <TabPanel >
</TabPanel>
<TabPanel >
</TabPanel>
  </TabPanels>
</Tabs>
)
}

export default ContentTab