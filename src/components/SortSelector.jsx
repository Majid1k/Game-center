import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

/* in Rawg api , under games endpont we have QUERY PARAMETERS for sorting games (named as ordering) by released date/critic/rating etc,
Note: filtering games by genre & platform are different from sorting, sorting doesn't filter api data instead it's just re-aranging display, 
 thats why we don't have a separate endpoint in rawg-api to achieve that purpose, instead these query perameters are defined under fetching 
 games endpoint, thats why we are making our own array about how we want to sort games, values that we use are given in api-docs, we sort them
 as per our requirement (- hiphen) or how many values we want to give in drop-down, then we can send data to games endpoint */

const SortSelector = ({ onSelectSortOrder, sortOrder }) => {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date added" }, // - hiphen before value means show latest data first,
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  // Menu button displays value property, so in sortOrders array we find a value which is equal to clicked sortOrder coming from apps
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order by: {currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
