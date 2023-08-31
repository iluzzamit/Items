import { TranslateText } from "../translate-text/TranslateText";
import { EnumThump } from "../../common/enums/EnumThump";
import { StyledItemCard } from "./ItemCard.style";
import { Item } from "../../common/types/Item";
import { Typography } from "@mui/material";
import { Thump } from "../thump/Thump";

export function ItemCard({ item }: { item: Item }) {
    return (
        <StyledItemCard>
            <div className='item-details'>
                <div>
                    <Typography variant='body2'><TranslateText text={`Title: ${item.first_name}`} /></Typography>
                    <Typography variant='body2'><TranslateText text={`Body: ${item.last_name}`} /></Typography>
                </div>
                <div className='thumps'>
                    <Thump id={item.id} thump={EnumThump.UP} />
                    <Thump id={item.id} thump={EnumThump.DOWN} />
                </div>
            </div>
        </StyledItemCard>
    )
}