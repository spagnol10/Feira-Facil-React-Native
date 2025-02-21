import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import React from "react";
import { ScrollView } from "react-native";

export default function Home() {
  return (
    <Box className="flex-1 h-[100vh]" style={{ backgroundColor: "#1B755E" }}>
      <ScrollView
        className="h-full grow"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box className="flex flex-auto justify-center items-center">
          <Image
            size="2xl"
            source={require("@/assets/images/logo.png")}
            alt="Logo-FeiraFacil"
          />
          <Text className="color-white font-bold text-center mt-4" size="4xl">
            Feira Fácil
          </Text>
        </Box>
      </ScrollView>
    </Box>
  );
}
