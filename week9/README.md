# What I Learned in Week 9

## Week 9 was mostly grids and working on projects.

### GRID ###

I learned about the display mode `display: grid;`, which is a way of arranging elements into a grid.

Properties of the container element:
- `display`: Set this to `grid` to arrange the children in a grid.  You can also use `inline-grid` to display the element inline instead of as a block.
- `grid-template-columns`: Defines the columns in the grid.  This is expressed as a list of column sizes, but can also include names for the lines between the columns.
- `grid-template-columns`: Defines the columns in the grid.  This is expressed as a list of column sizes, but can also include names for the lines between the columns.
- `justify-content`: Specifies how the content is spaced:
- - `start`: Items are all moved to the start.
- - `end`: Items are all moved to the end.
- - `center`: Items are centered.
- - `space-between`: Outer items are at the edge, and inner ones are evenly spaced between.
- - `space-around`: Puts an equal amount of space around each element.  This makes the space between elements twice as much as the space around the edge elements.
- - `space-evenly`: Spaces all the elements evenly.
- `align-items`: Specifies how the items are aligned in the cross axis.  Available settings are `start`, `end`, `center`, `stretch`, and `baseline`.  `stretch` stretches the items from start to end, and `baseline` aligns the items to the baseline of the first line of text in each element.
- `align-content`: Specifies how the rows of items are aligned in the cross axis.  Available settings are `start`, `end`, `center`, `stretch`, `space-between`, `space-around`.

Properties of the children:
- `grid-column`: Specifies which column line the element starts at / where it ends.
- `grid-row`: Specifies which row line the element starts at / where it ends.
- `justify-self`: Sets the alignment of the current cell.  Overrides `justify-items`.
- `align-self`: Sets the alignment of the cross axis of just the current cell.  Overrides `align-items`.
