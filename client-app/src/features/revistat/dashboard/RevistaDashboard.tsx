import React from 'react';
import { Container } from 'react-bootstrap';
import { RevistaModel } from '../../../app/models/RevistaModel';
import RevistaForm from '../form/RevistaForm';
import RevistaById from '../revistaDetails/RevistaById';
import RevistaList from './RevistatList';

interface Props{
    revistat: RevistaModel[];
    deleteRevista: (id: number) => void;
    createRevista: (revista: RevistaModel) => void;
    // selectedRevista: RevistaModel | undefined;
    // selectRevista: (id: number) => void;
    // cancelSelectRevista: () => void;
}

//we can use other methods for desctruction the props
//like: in the constructor of revistadashboar (props: Props) and we use props.revistat.map()
export default function RevistaDashboard({revistat, deleteRevista, createRevista}: Props){
    return (
        <>
            <Container>
                    <RevistaList revistat={revistat}
                            deleteRevista={deleteRevista}
                            // selectRevista={selectRevista}
                    />
                    <RevistaForm 
                        createRevista={createRevista}
                    />
                    {/* <RevistaById revista={selectedRevista} cancelSelectRevista={cancelSelectRevista} /> */}
            </Container>

            

        </>
    )
}