import React from "react";
import { Drawer, Button, Group } from "@mantine/core";
import { useState } from "react";
import FilterSection from "./FilterSection";
import { IconFilter } from "@tabler/icons";
const FilterDrawer = () => {
	const [opened, setOpened] = useState(false);
	return (
		<>
			<Drawer
            className="overflow-auto "
				opened={opened}
				onClose={() => setOpened(false)}
                overlayOpacity={0.55}
                overlayBlur={3}
				padding="xs"
				size="sm"
                lockScroll={false}
                position="right" 
                styles={{drawer:{backgroundColor: "#fff2dc"}}}
			>
				<FilterSection />
			</Drawer>

				<Button className=" bg-primaryDark/60 hover:bg-secondaryDark " onClick={() => setOpened(true)}>
                <IconFilter size={18} />Filters</Button>
			
		</>
	);
};

export default FilterDrawer;
