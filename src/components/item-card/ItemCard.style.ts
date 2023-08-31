import { Card } from "@mui/material";
import styled from "styled-components";

export const StyledItemCard = styled(Card)`
    justify-content: space-between;
    white-space: nowrap;
    align-items: center;
    margin-right: 1rem;
    display: flex;
    padding: 1rem;

    .item-details {
        justify-content: space-between;
        align-items: center;
        display: flex;
        width: 100%;

        .item-name {
            margin-left: 0.5rem;
        }
    }
`