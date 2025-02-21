import { Box } from "@/components/ui/box";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import React from "react";
import { View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1" style={{ backgroundColor: "#1B755E" }}>
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
    </View>
  );
}
