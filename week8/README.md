# What I Learned in Week 8

## Week 8 was mostly reviews of stuff and Flexbox

### FLEXBOX ###

I learned about flexbox, which is a way of making dynamically-sized elements.  Items are arranged either as rows of columns.  Rows is the default.  The main axis is the default arrangement, while the cross axis is the perpendicular direction.

Properties of the container element:
- `display`: Set this to `flex` to enable flexbox in the children.
- `flex-direction`: Sets the main axis.  This can be `row`, `row-reverse`, `column`, and `column-reverse`.  Reverse reverses the order of the elements.
- `flex-wrap`: Enables wrapping by specifying `wrap`.
- `justify-content`: Specifies how the content is spaced:
- - `flex-start`: Items are all moved to the start.
- - `flex-end`: Items are all moved to the end.
- - `center`: Items are centered.
- - `space-between`: Outer items are at the edge, and inner ones are evenly spaced between.
- - `space-around`: Puts an equal amount of space around each element.  This makes the space between elements twice as much as the space around the edge elements.
- - `space-evenly`: Spaces all the elements evenly.
- `align-items`: Specifies how the items are aligned in the cross axis.  Available settings are `flex-start`, `flex-end`, `center`, `stretch`, and `baseline`.  `stretch` stretches the items from start to end, and `baseline` aligns the items to the baseline of the first line of text in each element.
- `align-content`: Specifies how the rows of items are aligned in the cross axis.  Available settings are `flex-start`, `flex-end`, `center`, `stretch`, `space-between`, `space-around`.

Properties of the children:
- `order`: An integer that specifies the order of the items.  Default is `0`.
- `flex-grow`: A unitless number that specifies the ratio of how the cells grow to fill in their area.
- `flex-shrink`: A unitless number that specifies the ratio of how the cells shrink to fill in their area.
- `flex-basis`: Specifies the default size for cells before they have grown/shrunk.
- `align-self`: Sets the alignment of the cross axis of just the current cell.  Overrides `align-items`.
