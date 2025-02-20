import { Box } from "@/components/ui/box";
import React from "react";
import { ScrollView } from "react-native";
import { Image } from "@/components/ui/image";

export default function Home() {
  return (
    <Box className="flex-1 h-[100vh]" style={{ backgroundColor: "#1B755E" }}>
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box className="flex flex-auto justify-center items-center">
          <Image
            source={{
              uri: "https://github.com/spagnol10.png",
            }}
            alt="Logo"
            size="xl"
            className="aspect-[320/208] w-full max-w-[320px] "
          />
        </Box>
      </ScrollView>
    </Box>
  );
}
