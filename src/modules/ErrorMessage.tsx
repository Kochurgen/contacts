import {Container} from '../components/Containers';
import {BoxColumn} from '../components/Box';
import {TypographyFormMarker, TypographyTitle} from '../components/Typography';
import {useSelector} from 'react-redux';


export default function ( ) {
    const error = useSelector((state:UsersState) => state.error)
    return (
        <Container>
            <BoxColumn>
                <TypographyTitle>Error</TypographyTitle>
                <TypographyFormMarker>{error.status}-{error.parsedBody.detail}</TypographyFormMarker>
            </BoxColumn>
        </Container>
    )
}
