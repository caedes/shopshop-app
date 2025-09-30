import { Grid } from "@mui/material";

type BasicGridProps<T extends { id: string }> = {
  gridItems: T[];
  render: (item: T) => React.ReactNode;
};

/**
 * A simple grid component that takes an array of items and a render function.
 *
 * In a production app, you might want to use a more robust solution like MUI's DataGrid or just the Grid component directly.
 */
export const BasicGrid = <T extends { id: string }>({
  gridItems,
  render,
}: BasicGridProps<T>) => {
  return (
    <Grid container spacing={2}>
      {gridItems.map((gridItem) => (
        <Grid size={{ xs: 12, md: 4, lg: 3 }} key={gridItem.id}>
          {render(gridItem)}
        </Grid>
      ))}
    </Grid>
  );
};
