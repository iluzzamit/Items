import { ThumpsContext } from '../thumps-provider/ThumpsProvider';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { EnumThump } from '../../common/enums/EnumThump';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@mui/material';
import React from 'react';

export function Thump({ id, thump }: { id: number, thump: EnumThump }) {
    const { thumps, setThumps } = React.useContext(ThumpsContext);
    const isClicked = thumps?.[id]?.[thump] || false;

    const ThumpIcon = thump === EnumThump.UP ? ThumbUpIcon : ThumbDownIcon
    return (
        <IconButton onClick={() => setThumps?.(thumps => ({ ...thumps, [id]: { ...thumps[id], [thump]: !isClicked}}))}>
            <ThumpIcon color={isClicked ? 'info' : 'action'} />
        </IconButton>
    )
}