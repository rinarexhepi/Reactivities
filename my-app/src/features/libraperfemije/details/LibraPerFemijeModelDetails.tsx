import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Image, Item } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer(function LibraPerFemijeModelDetails() {
    const { libraPerFemijeStore } = useStore();
    const { selectedLibraPerFemije: libraPerFemije, loadLibriPerFemije, loadingInitial } = libraPerFemijeStore;
    const { id } = useParams<{ id: any }>();

    useEffect(() => {
        if (id) loadLibriPerFemije(id);
    }, [id, loadLibriPerFemije]);

    if (loadingInitial || !libraPerFemije) return <LoadingComponent />;

    return (
        <Item.Group>
            <Item>
                <Item.Image size='medium' src={`../../../../assets/libratImg/${libraPerFemije.foto}`} />

                <Item.Content>
                    <Item.Header as='a'>
                        <h5>TITULLI I LIBRIT: {libraPerFemije.emri}</h5>

                    </Item.Header>
                    <Item.Extra><h5>AUTORI I LIBRIT: {libraPerFemije.autori}</h5></Item.Extra>
                    <Item.Description>
                        <h5>PERSHKRIMI I LIBRIT:</h5>
                        {libraPerFemije.pershkrimi}
                    </Item.Description>
                    <Item.Meta><h5>VITI I PUBLIKIMIT: {libraPerFemije.viti_publikimit} </h5></Item.Meta>
                    <Button.Group className="p-30 m-30">
                        <Button as={Link} to={`/manage14/${libraPerFemije.id}`} basic color="blue" content="Edit" />
                        <Button as={Link} to='/libraPerFemije' basic color="red" content="Cancel" />
                    </Button.Group>
                </Item.Content>
            </Item>
        </Item.Group>
    )


})