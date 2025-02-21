import { Box } from "@/components/ui/box";
import React from "react";
import { ScrollView } from "react-native";
import { Image } from "@/components/ui/image";
import Logo from "@/assets/images/logo.png";

export default function Home() {
  return (
    <Box className="flex-1 h-[100vh]" style={{ backgroundColor: "#1B755E" }}>
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box className="flex flex-auto justify-center items-center">
          <Image
            size="2xl"
            source={Logo}
            alt="image"
          />
        </Box>
      </ScrollView>
    </Box>
  );
}
