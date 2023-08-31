import { EnumQueryParams } from "../../common/enums/EnumQueryParams";
import { ListHeader } from "../../components/list-header/ListHeader";
import { StyledDashboardSideContainer } from "./Dashboard.style";
import { ItemCard } from "../../components/item-card/ItemCard";
import { Loading } from "../../components/loading/Loading";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Grid, Pagination } from "@mui/material";
import { Item } from "../../common/types/Item";
import React from "react";

const DEFAULT_PER_PAGE = 10

export function DashboardItems() {
    const [query, setQuery] = useSearchParams();

    const search = query.get(EnumQueryParams.SEARCH);
    const page = query.get(EnumQueryParams.PAGE);

    const { data, isLoading, error } = useQuery({
        queryKey: ['item'],
        queryFn: () => {
            let url = `https://www.balldontlie.io/api/v1/players?per_page=100`;
            return fetch(url).then((res) => res.json())
        },
    });

    if (error) throw error;
    if (data?.error) {
        alert(error || data.error);
        return <React.Fragment />
    }
    if (isLoading) return <Loading />

    let { data: items }: { data: Item[] } = (data || []);

    if (search) {
        items = items.filter(item => item.first_name.includes(search) || item.last_name.includes(search))
    }

    const currentPage = page ? parseInt(page) : 1;
    const pages = Math.floor(items.length / DEFAULT_PER_PAGE);
    const paginatedItems = items.slice((currentPage - 1) * DEFAULT_PER_PAGE, (currentPage) * DEFAULT_PER_PAGE)
    return (
        <StyledDashboardSideContainer>
            <ListHeader
                title="Items"
                actionComponent={(
                    <Pagination
                        onChange={(_, value: number) => {
                            query.set(EnumQueryParams.PAGE, value.toString());
                            setQuery(query);
                        }}
                        count={pages}
                        page={currentPage}
                        variant="outlined"
                    />
                )}
            />
            <Grid container spacing={2} className='list-container'>
                {paginatedItems.map((item) => (
                    <Grid key={item.id} item xs={4}>
                        <ItemCard item={item} />
                    </Grid>
                ))}
            </Grid>
        </StyledDashboardSideContainer>
    )
}