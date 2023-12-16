import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Image, Item } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer(function LibraBoterorModelDetails() {
    const { libraBoterorStore } = useStore();
    const { selectedLibraBoteror: libraBoteror, loadLibriBoteror, loadingInitial } = libraBoterorStore;
    const { id } = useParams<{ id: any }>();

    useEffect(() => {
        if (id) loadLibriBoteror(id);
    }, [id, loadLibriBoteror]);

    if (loadingInitial || !libraBoteror) return <LoadingComponent />;

    return (
        <Item.Group>
            <Item>
                <Item.Image size='medium' src={`../../../../assets/libratImg/${libraBoteror.foto}`} />

                <Item.Content>
                    <Item.Header as='a'>
                        <h5>TITULLI I LIBRIT: {libraBoteror.titulli}</h5>

                    </Item.Header>
                    <Item.Extra><h5>AUTORI I LIBRIT: {libraBoteror.autori}</h5></Item.Extra>
                    <Item.Meta>{libraBoteror.isbn}</Item.Meta>
                    <Item.Extra><h5>SHTEPIA BOTUESE: {libraBoteror.gjuha} </h5></Item.Extra>
                    <Button.Group className="p-30 m-30">
                        <Button as={Link} to={`/manage11/${libraBoteror.id}`} basic color="blue" content="Edit" />
                        <Button as={Link} to='/libraBoteror' basic color="red" content="Cancel" />
                    </Button.Group>
                </Item.Content>
            </Item>
        </Item.Group>
    )


})