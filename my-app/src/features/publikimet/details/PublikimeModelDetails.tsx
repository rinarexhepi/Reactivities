import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Image, Item } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer(function PublikimeModelDetails() {
    const { publikimeStore } = useStore();
    const { selectedPublikime: publikime, loadPublikime, loadingInitial } = publikimeStore;
    const { id } = useParams<{ id: any }>();

    useEffect(() => {
        if (id) loadPublikime(id);
    }, [id, loadPublikime]);

    if (loadingInitial || !publikime) return <LoadingComponent />;

    return (
        <Item.Group>
            <Item>
                <Item.Image size='medium' src={`../../../../assets/libratImg/${publikime.foto}`} />

                <Item.Content>
                    <Item.Header as='a'>
                        <h5>TITULLI I PUBLIKIMIT: {publikime.emri}</h5>

                    </Item.Header>
                    <Item.Extra><h5>AUTORI I PUBLIKIMIT: {publikime.autori}</h5></Item.Extra>
                    <Item.Description>
                        <h5>PERSHKRIMI I PUBLIKIMIT:</h5>
                        {publikime.pershkrimi}
                    </Item.Description>
                    <Item.Meta><h5>VITI I PUBLIKIMIT: {publikime.viti_Publikimit} </h5></Item.Meta>
                    <Button.Group className="p-30 m-30">
                        <Button as={Link} to={`/manage9/${publikime.id}`} basic color="blue" content="Edit" />
                        <Button as={Link} to='/publikime' basic color="red" content="Cancel" />
                    </Button.Group>
                </Item.Content>
            </Item>
        </Item.Group>
    )


})