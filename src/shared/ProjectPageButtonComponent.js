import { Link as ChakraLink } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const ProjectPageButton = ({link}) => {
    if(link !== null) {
        return <ChakraLink  href={link} target="_blank" style={{textWrap: 'nowrap'}} isExternal>
                    Link to Project Page <ExternalLinkIcon mx='2px' />
                </ChakraLink>
    }
    else {
        return <></>
    }
}

export default ProjectPageButton;